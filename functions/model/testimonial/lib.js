/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { db } = require("../application/lib");

exports.addNewTestimonial = function(uid, name, testimonial, imageurl, achievement) {
    const testimonialData = db.collection("Testimonials").doc(uid).set({
        Uid: uid,
        Name: name,
        Testimonial: testimonial,
        ImageUrl: imageurl,
        Achievement: achievement,
        Status: "Ok",

    });
    return Promise.resolve(testimonialData);
};

exports.getAllTestimonials = function() {
    const query = db.collection("Testimonials");

    const promise = query.get().then((doc) => {
        const data = [];
        doc.forEach((element) => {
            if (element.exists) {
                data.push(element.data());
            }
        });
        return data;
    });

    return Promise.resolve(promise);
};