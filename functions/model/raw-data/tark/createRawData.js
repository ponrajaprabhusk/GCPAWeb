/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { setRawData } = require("../lib");

exports.createRawData = function(request, response) {
    const user = request.body.data;
    const numberOfUsers = user.numberOfUsers;
    const numberOfRegistrations = user.numberOfRegistrations;
    const numberOfSupport = user.numberOfSupport;

    let status = 200;
    setRawData(numberOfUsers, numberOfRegistrations, numberOfSupport).then(() => {
      const result = { data: "Raw data setUp complete" };
        console.log("Raw data setUp complete");
        return response.status(status).send(result);
    }).catch((error) => {
        status = 500;
        const result = { data: error };
        console.error("Error setting up Raw data", error);
        return response.status(status).send(result);
    });
};