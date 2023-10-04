require('dotenv').config();

module.exports = {
  DATABASE: process.env.DATABASE,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL_FROM: process.env.EMAIL_FROM,
  EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD, 
};
