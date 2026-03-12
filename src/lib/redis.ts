import { createClient, type RedisClientType } from "redis";

let client: RedisClientType | null = null;
let connectPromise: Promise<RedisClientType | null> | null = null;

export async function getRedisClient(): Promise<RedisClientType | null> {
  const url = process.env.REDIS_URL;
  if (!url) {
    return null;
  }

  if (!client) {
    client = createClient({ url });
    client.on("error", (err) => {
      console.error("Redis client error:", err);
    });
  }

  if (client.isOpen) {
    return client;
  }

  if (!connectPromise) {
    connectPromise = client
      .connect()
      .then(() => client)
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

