const { getData } = require("./tark/read-data");
const { getRegistrations } = require("./tark/getRegistrations")
const { fastify, functions, cors, requestHandler } = require("../application/lib");

fastify.post("/readUserData", (req, res) => {
    console.log('o');
    getData(req, res);
});

fastify.post("/getUsersRegistrations", (req, res) => {
    console.log('fetching Users Registrations');
    getRegistrations(req, res);
});


exports.readData = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});