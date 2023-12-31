import logger from '@utilities/color-logger';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// Access environment variables
const env = process.env;

/**
 * If .env file missing in root directory then print
 * ==> Environment Variable Missing In Root Directory <==
 */

if(env.node_env === undefined && env.port === undefined) logger.warn('==> Environment Variable Missing In Root Directory <==');

/**
 * Configuration object containing MongoDB URI, port, and Node.js environment.
 *
 * @namespace
 * @property {string} mongodb_URI - The MongoDB connection URI.
 * @property {number} port - The port on which the application will listen.
 * @property {string} node_env - The Node.js environment (e.g., 'development', 'production').
 */
export const { mongodb_URI, port, node_env } = {
	mongodb_URI: env.MONGODB_URI,
	port: env.PORT || 5000,
	node_env: env.NODE_ENV,
};