/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { createNewUser } = require("./tark/createNewUser");
const { getUsers } = require("./tark/getUsers");
const { getUser } = require("./tark/getUser");
const { fastify, functions, cors, requestHandler } = require("../application/lib");

fastify.post("/createNewUser", (req, res) => {
    createNewUser(req, res);
});

fastify.post("/getUsers", (req, res) => {
    console.log("oierg");
    getUsers(req, res);
});

fastify.post("/getUser", (req, res) => {
    console.log("oierg");
    getUser(req, res);
});


exports.users = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});