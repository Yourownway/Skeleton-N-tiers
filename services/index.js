// service dépendencies
const repositories = require("../repositories/index"),
  nodemailer = require("nodemailer"),
  bcrypt = require("bcrypt");

// services
const user_service = require("./user"),
  mailer_service = require("./mailer");

// create a services object for map all the services
const services = {
  user: user_service(repositories, bcrypt),
  mailer: mailer_service(nodemailer),
};

// export our service object
module.exports = services;
