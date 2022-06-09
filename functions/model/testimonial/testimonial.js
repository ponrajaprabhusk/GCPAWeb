/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { fastify, functions, cors, requestHandler } = require("../application/lib");
const { addTestimonial } = require("./tark/addTestimonial");
const { getTestimonials } = require("./tark/getTestimonials");

fastify.post("/addTestimonial", (req, res) => {
    console.log("Adding Testimonial");
    addTestimonial(req, res);
});

fastify.post("/getTestimonials", (req, res) => {
    console.log("getting Testimonial");
    getTestimonials(req, res);
});

exports.testimonials = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        fastify.ready((err) => {
            if (err) throw err;
            requestHandler(req, res);
        });
    });
});