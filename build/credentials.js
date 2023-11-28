"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// credential.ts
var dotenv = require("dotenv");
var path = require("path");
// Load environment variables from the .env file
dotenv.config({
    path: path.resolve(__dirname, '../database.env'),
});
// Access the environment variables
var DATABASE_HOST = process.env.DATABASE_HOST || 'defaultHost';
var DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'defaultUser';
var DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'defaultPassword';
// You can use these variables in your application
console.log('DATABASE_HOST:', DATABASE_HOST);
console.log('DATABASE_USERNAME:', DATABASE_USERNAME);
console.log('DATABASE_PASSWORD:', DATABASE_PASSWORD);
//# sourceMappingURL=credentials.js.map