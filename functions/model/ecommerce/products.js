/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { fastify, functions, cors, requestHandler } = require("../application/lib");
const { addProduct } = require("./tark/addProduct");
const { addOrder } = require("./tark/addOrder");
const { getProducts } = require("./tark/getProducts");
const { getProductById }= require("./tark/getproductById");
const { getOrders }= require("./tark/getOrders");


fastify.post("/addProduct", (req, res) => {
    console.log("Adding Product");
    addProduct(req, res);
});

fastify.post("/getProducts", (req, res) => {
    console.log("getting Products");
    getProducts(req, res);
});

fastify.post("/getProductById", (req, res) => {
    console.log("getting Product");
    getProductById(req, res);
});

fastify.post("/addOrder", (req, res) => {
    console.log("Adding Order");
    addOrder(req, res);
});

fastify.post("/getOrders", (req, res) => {
    console.log("getting Orders");
    getOrders(req, res);
});

exports.ecommerce = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});