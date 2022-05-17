const { createRawData, updateRawData } = require("./tark/createRawData");
const { fastify, functions, cors, requestHandler } = require("../application/lib");

fastify.post("/createRawData", (req, res) => {
    console.log('oierg');
    createRawData(req, res);
});
fastify.post("/updateRawData", (req, res) => {
    console.log('oierg');
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