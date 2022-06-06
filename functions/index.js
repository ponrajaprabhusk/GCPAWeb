/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require("firebase-admin");
admin.initializeApp();

const { users } = require("./model/user/user");
const { registrations } = require("./model/applicant-register/register");
const { readData } = require("./model/read-user-data/read-user-data");
const { rawDatas } = require("./model/raw-data/raw-data");
const { payment } = require("./model/payment/payment");

exports.users = users;
exports.registrations = registrations;
exports.readData = readData;
exports.rawDatas = rawDatas;
exports.payment = payment;