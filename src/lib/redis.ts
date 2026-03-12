import { createClient } from "redis";

type RedisClient = ReturnType<typeof createClient>;

let client: RedisClient | null = null;
let connectPromise: Promise<RedisClient | null> | null = null;

function normalizeRedisUrl(rawUrl: string): string {
  const trimmed = rawUrl.trim();
  const schemeMatch = trimmed.match(/^(rediss?):\/\//i);
  if (!schemeMatch) {
    return trimmed;
  }

  const scheme = schemeMatch[1].toLowerCase();
  const rest = trimmed.slice(schemeMatch[0].length);
  const atIndex = rest.lastIndexOf("@");
  if (atIndex === -1) {
    return trimmed;
  }

  const authPart = rest.slice(0, atIndex);
  const hostPart = rest.slice(atIndex + 1);
  const colonIndex = authPart.indexOf(":");
  if (colonIndex === -1) {
    return trimmed;
  }

  const username = authPart.slice(0, colonIndex);
  const password = authPart.slice(colonIndex + 1);
  const encodedUser = encodeURIComponent(username);
  const encodedPass = encodeURIComponent(password);

  return `${scheme}://${encodedUser}:${encodedPass}@${hostPart}`;
}

function canRetryWithoutTls(err: unknown): boolean {
  if (!(err instanceof Error)) {
    return false;
  }

  const msg = err.message.toLowerCase();
  return (
    msg.includes("err_ssl_packet_length_too_long") ||
    msg.includes("packet length too long")
  );
}

async function connectClient(url: string): Promise<RedisClient | null> {
  const nextClient = createClient({ url });
  nextClient.on("error", (err) => {
    console.error("Redis client error:", err);
  });

  await nextClient.connect();
  return nextClient;
}

export async function getRedisClient(): Promise<RedisClient | null> {
  const rawUrl = process.env.REDIS_URL;
  if (!rawUrl) {
    return null;
  }

  if (client?.isOpen) {
    return client;
  }

  if (!connectPromise) {
    const url = normalizeRedisUrl(rawUrl);
    connectPromise = connectClient(url)
      .catch(async (err) => {
        if (url.startsWith("rediss://") && canRetryWithoutTls(err)) {
          const fallbackUrl = url.replace(/^rediss:\/\//, "redis://");
          console.warn("Redis TLS failed, retrying without TLS");
          return connectClient(fallbackUrl);
        }
        throw err;
      })
      .then((connectedClient) => {
        client = connectedClient;
        return connectedClient;
      })
      .catch((err) => {
        console.error("Redis connect failed:", err);
        client = null;
        return null;
      })
      .finally(() => {
        connectPromise = null;
      });
  }

  return connectPromise;
}

