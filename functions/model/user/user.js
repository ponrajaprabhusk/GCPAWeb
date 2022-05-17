const { createNewUser } = require("./tark/createNewUser");
const { fastify, functions, cors, requestHandler } = require("../application/lib");

fastify.post("/createNewUser", (req, res) => {
    console.log('oierg');
    createNewUser(req, res);
});

exports.users = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});