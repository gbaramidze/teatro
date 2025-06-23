import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://meomari:250202@cluster1.neufanu.mongodb.net/events-db?retryWrites=true&w=majority'

if (!MONGODB_URI) {
  throw new Error('⚠️ Укажи MONGODB_URI в .env.local.local');
}

// Кэшируем подключение между перезапусками
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {conn: null, promise: null};
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
