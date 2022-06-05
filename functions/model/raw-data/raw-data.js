/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { createRawData } = require("./tark/createRawData");
const { updateData } = require("./tark/updateRawData");
const { fastify, functions, cors, requestHandler } = require("../application/lib");

fastify.post("/createRawData", (req, res) => {
    createRawData(req, res);
});
fastify.post("/updateRawData", (req, res) => {
    updateData(req, res);
});

exports.rawDatas = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});