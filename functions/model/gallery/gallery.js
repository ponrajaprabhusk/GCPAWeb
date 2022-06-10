/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { fastify, functions, cors, requestHandler } = require("../application/lib");
const { addPhoto } = require("./tark/addPhoto");
const { getPhotoes } = require("./tark/getPhotoes");

fastify.post("/addPhoto", (req, res) => {
    console.log("Adding Photo");
    addPhoto(req, res);
});

fastify.post("/getPhotoes", (req, res) => {
    console.log("getting Photoes");
    getPhotoes(req, res);
});

exports.gallery = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});