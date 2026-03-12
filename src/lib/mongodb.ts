import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "acumen";

if (!uri) {
  console.warn("MONGODB_URI is not set");
}

type GlobalMongoCache = {
  clientPromise?: Promise<MongoClient>;
};

const globalMongo = globalThis as typeof globalThis & {
  _mongo?: GlobalMongoCache;
};

if (!globalMongo._mongo) {
  globalMongo._mongo = {};
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (!globalMongo._mongo?.clientPromise) {
    const client = new MongoClient(uri);
    globalMongo._mongo!.clientPromise = client.connect();
  }

  return globalMongo._mongo.clientPromise;
}

export async function getMongoDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

