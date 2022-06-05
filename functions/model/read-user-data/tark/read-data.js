/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { updateRegistration } = require("../lib");
const { getUser } = require("../../user/lib");

exports.getData = function(request, response) {
    const user = request.body.data;
    const uid = user.uid;
    const status = 200;
    let result;

    const promise = getUser(uid, "").then((doc) => {
        if (doc == undefined) {
            result = { data: { status: "Note doesn't exist" } };
        } else {
            const numberOfRegistrations = doc.NumberOfRegistrations + 1;
            const inputJson = {
                NumberOfRegistrations: numberOfRegistrations,
            };
            updateRegistration(inputJson, uid);
        }
    });

    Promise.resolve(promise).then(() => {
            result = { data: { status: "OK" } };
            console.log("Note edited Successfully");
            return response.status(status).send(result);
        })
        .catch((error) => {
            result = { data: error };
            console.error("Error Deleting", error);
            return response.status(status).send(result);
        });
};