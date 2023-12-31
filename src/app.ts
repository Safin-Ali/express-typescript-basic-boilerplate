/**
 * @module app
 */

import { port } from '@config/env-var';
import initMiddleware from '@middleware';
import Routes from '@routes/routes';
import initDB from '@database/db';

import express, { Application} from 'express';
import logger from '@utilities/color-logger';

/**
 * Represents the main application class.
 * @class
 */
class App {
	/**
	 * The Express.js application instance.
	 * @private
	 * @type {Express}
	 */
	private express: typeof express = express;

	/**
	 * The Express.js application instance.
	 * @type {Application}
	 */
	public expressApp: Application;

	/**
	 * The Routes instance for managing routes.
	 * @type {Routes}
	 */
	private routes: Routes;

	/**
	 * Creates an instance of App.
	 * Initializes the Express.js application, middleware, routes, and database.
	 * @constructor
	 */
	constructor() {
		this.expressApp = this.express();
		initMiddleware(this.expressApp);
		this.routes = new Routes(this.expressApp);
		initDB();
	}

	/**
	 * Starts the server and listens on the specified port.
	 * @public
	 */
	startServer = () => {
		this.expressApp.listen(port, () => {
			logger.process(`The server is running on ${port}`);
		});
	};
}

/**
 * The main application instance.
 * @type {App}
 */
const app: App = new App();

export const {startServer,expressApp} = app;

export default app;
