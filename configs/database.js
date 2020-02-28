
const dotenv = require('dotenv');

dotenv.config();


const dbConfig = {
  env: process.env.NODE_ENV || 'development',
  express_port: process.env.EXPRESS_PORT || 3306
}

module.exports = dbConfig;