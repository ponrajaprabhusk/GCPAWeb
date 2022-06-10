
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { getApplicant } = require("../lib");

exports.getRegistrationById = function(request, response) {
    const uid = request.body.data.uid;

    let status = 200;

    getApplicant(uid).then((registerData) => {
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