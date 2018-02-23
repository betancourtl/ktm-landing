const path = require('path');
const DB_NAME = 'my-project';
const TEST_DB_NAME = 'my-project-test';
const DIST_DIR = path.join(__dirname, '../dist');
const ENTRY_FILE = path.join(__dirname, '../client/index.js');
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const DIST_DIR_INDEX_FILE = path.join(DIST_DIR, 'index.html');

// templates
const TEMPLATE_FILE = path.join(TEMPLATES_DIR, 'template.html');

// database
const DB_TEST = `mongodb://localhost/${TEST_DB_NAME}`;
const DB_LOCAL = `mongodb://localhost/${DB_NAME}`;
const { MONGO_USER, MONGO_PASS, MONGO_PORT, MONGO_DB, MONGO_HOSTNAME, } = process.env;
const DB = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

// prod
const VENDOR_LIBS = [
  'babel-polyfill',
  'react',
  'react-dom',
];

const ENV_VARS = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID),
  FACEBOOK_APP_SECRET: JSON.stringify(process.env.FACEBOOK_APP_SECRET),
  FACEBOOK_URL_CALLBACK: JSON.stringify(process.env.FACEBOOK_URL_CALLBACK),
};

// express
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

module.exports = {
  ENTRY_FILE,
  VENDOR_LIBS,
  // templates
  TEMPLATE_FILE,
  // dist
  DIST_DIR,
  DIST_DIR_INDEX_FILE,
  // express
  PORT,
  HOST,
  DB,
  DB_TEST,
  ENV_VARS,
};
