import { Meteor } from 'meteor/meteor';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

const getEnvFilePath = (envFilePath = '.env') =>
	path.resolve(process.env.PWD, envFilePath);

const loadEnvVars = (path) => {
	console.info('Loading env vars from : ', path);
	dotenv.config({ path });
};

/**
 * Pull from EXEC_ENV
 */
console.info('RUNNNING');
if (process.env.EXEC_ENV || Meteor.settings?.exec_env) {
	const exec_env = process.env.EXEC_ENV || Meteor.settings.exec_env;
	const exec_path = getEnvFilePath(`.env.${exec_env}`);
	loadEnvVars(exec_path);
}
