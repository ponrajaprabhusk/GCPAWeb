/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { getAllRegistrations } = require("../lib");

exports.getAllRegistrations = function(request, response) {
    let status = 200;

    getAllRegistrations().then((registerData) => {
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