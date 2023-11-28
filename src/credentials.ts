// credential.ts
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from the .env file
dotenv.config({
  path: path.resolve(__dirname, '../database.env'),
});

// Access the environment variables
const DATABASE_HOST = process.env.DATABASE_HOST || 'defaultHost';
const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'defaultUser';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'defaultPassword';

// You can use these variables in your application
console.log('DATABASE_HOST:', DATABASE_HOST);
console.log('DATABASE_USERNAME:', DATABASE_USERNAME);
console.log('DATABASE_PASSWORD:', DATABASE_PASSWORD);
