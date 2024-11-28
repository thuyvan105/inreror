import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Project%20Dashboard_owner:MJ9gpFvmw3yc@ep-orange-sound-a52r77a1.us-east-2.aws.neon.tech/ai-room-redesgin?sslmode=require',
  },
});