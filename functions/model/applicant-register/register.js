const { registerNewUser } = require("./tark/applicant-register");
const { fastify, functions, cors, requestHandler } = require("../application/lib");

fastify.post("/registerNewUser", (req, res) => {
    console.log('oierg');
    registerNewUser(req, res);
});

exports.registrations = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});