/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { getSupportData } = require("../lib");

exports.getSupportById = function(request, response) {
    const ticketId = request.body.data.ticketId;

    let status = 200;

    getSupportData(ticketId).then((registerData) => {
        if (registerData) {
            const result = { data: { status: "OK", data: registerData } };
            return response.status(status).send(result);
        }
    }).catch((err) => {
        status = 500;
        console.error(err);
        return response.status(status).send(err);
    });
};