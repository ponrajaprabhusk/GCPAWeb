/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const {registerNewUser} = require("./tark/applicant-register");
const {getApplicant} = require("./tark/getApplicant");
const {fastify, functions, cors, requestHandler} = require("../application/lib");

fastify.post("/registerNewUser", (req, res) => {
  registerNewUser(req, res);
});

fastify.post("/getApplicant", (req, res) => {
    getApplicant(req, res);
  });

exports.registrations = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    fastify.ready((err) => {
      if (err) throw err;
      requestHandler(req, res);
    });
  });
});
