/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { updateRawData, getRawData } = require("../lib");


exports.updateData = function(updateType) {
    let status = 200;
    let result;
    const promise = getRawData().then((doc) => {
        if (doc == undefined) {
            result = { data: { status: "Note doesn't exist" } };
            console.log(status, " || ", result);
        } else {
            if (updateType == "user") {
                const numberOfUsers = doc.NumberOfUsers + 1;
                const inputJson = {
                    NumberOfUsers: numberOfUsers,
                };
                updateRawData(inputJson);
            } else if (updateType == "registration") {
                const numberOfRegistrations = doc.NumberOfRegistrations + 1;
                const inputJson = {
                    NumberOfRegistrations: numberOfRegistrations,
                };
                updateRawData(inputJson);
            } else {
                status = 500;
                console.error("updateType not specified");
            }
        }
    });

    return Promise.resolve(promise);
};