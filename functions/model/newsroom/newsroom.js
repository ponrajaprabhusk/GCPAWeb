/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const {fastify, functions, cors, requestHandler} = require("../application/lib");
const {addNews} = require("./tark/addNews");
const {getNews} = require("./tark/getNews");

fastify.post("/addNews", (req, res) => {
  console.log("Adding News");
  addNews(req, res);
});

fastify.post("/getNews", (req, res) => {
  console.log("getting News");
  getNews(req, res);
});

exports.newsroom = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    fastify.ready((err) => {
      if (err) throw err;
      requestHandler(req, res);
    });
  });
});
