const {registerNewUser} = require("./tark/applicant-register");
const {getApplicant} = require("./tark/getApplicant");
const {getRegistrationById} = require("./tark/getRegistrationById");
const {fastify, functions, cors, requestHandler} =require("../application/lib");
const {getAllRegistrations} = require("./tark/getAllRegistrations");
const {updateRegistrationById} = require("./tark/updateRegistrationById");

fastify.post("/registerNewUser", (req, res) => {
  registerNewUser(req, res);
});

fastify.post("/getApplicant", (req, res) => {
  getApplicant(req, res);
});

fastify.post("/getRegistrationById", (req, res) => {
  console.log("getting Registration by Uid");
  getRegistrationById(req, res);
});

fastify.post("/getAllRegistrations", (req, res) => {
  console.log("getting Registrations");
  getAllRegistrations(req, res);
});

fastify.post("/updateRegistrationById", (req, res) => {
  console.log("updating Registration");
  updateRegistrationById(req, res);
});

exports.registrations = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    fastify.ready((err) => {
      if (err) throw err;
      requestHandler(req, res);
    });
  });
});
