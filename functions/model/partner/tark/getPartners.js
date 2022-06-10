/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { getPartners } = require("../lib");

exports.getPartners = function(request, response) {
    let status = 200;

    getPartners().then((partnerData) => {
        if (partnerData) {
            const result = { data: { status: "OK", data: partnerData } };
            return response.status(status).send(result);
        }
    }).catch((err) => {
        status = 500;
        console.error(err);
        return response.status(status).send(err);
    });
};