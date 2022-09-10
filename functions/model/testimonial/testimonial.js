/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { fastify, functions, cors, requestHandler } = require("../application/lib");
const { addTestimonial } = require("./tark/addTestimonial");
const { getTestimonials } = require("./tark/getTestimonials");
const { deleteTestimonial } = require("./tark/deleteTestimonial");
const { editTestimonial } = require("./tark/editTestimonial");

fastify.post("/addTestimonial", (req, res) => {
    console.log("Adding Testimonial");
    addTestimonial(req, res);
});

fastify.post("/getTestimonials", (req, res) => {
    console.log("getting Testimonial");
    getTestimonials(req, res);
});

fastify.post("/editTestimonial", (req, res) => {
    console.log("Updating Testimonial");
    editTestimonial(req, res);
});

fastify.post("/deleteTestimonial", (req, res) => {
    console.log("Deleting Testimonial");
    deleteTestimonial(req, res);
});

exports.testimonials = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});