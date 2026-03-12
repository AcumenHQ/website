import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "acumen";

if (!uri) {
  console.warn("MONGODB_URI is not set");
}

const globalMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!globalMongo._mongoClientPromise) {
    const client = new MongoClient(uri);
    globalMongo._mongoClientPromise = client.connect();
  }

  return globalMongo._mongoClientPromise;
}

export async function getMongoDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

