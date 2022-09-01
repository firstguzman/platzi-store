import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    mongo: {
      uri: process.env.MONGO_URI,
      database: process.env.MONGO_DB,
    },
    apiKey: process.env.API_KEY,
  };
});
