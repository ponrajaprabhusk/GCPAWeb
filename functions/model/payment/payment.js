/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { fastify, functions, cors, requestHandler } = require("../application/lib");
// eslint-disable linebreak-style
const { addPayment } = require("./tark/addPayment");
fastify.post("/addPayment", (req, res) => {
    addPayment(req, res);
});

exports.payment = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});