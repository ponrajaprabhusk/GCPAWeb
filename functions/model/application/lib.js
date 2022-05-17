const admin = require("firebase-admin");
const firestore = admin.firestore();
const http = require("http");
const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
let requestHandler = null;

const fastify = require("fastify")({
    logger: false,
    serverFactory: (handler) => {
        requestHandler = handler;
        return http.createServer();
    },
});

fastify.addContentTypeParser("application/json", {}, (req, body, done) => {
    done(null, body.body);
});

exports.fastify = fastify;
exports.db = firestore;
exports.functions = functions;
exports.cors = cors;
exports.requestHandler = requestHandler;