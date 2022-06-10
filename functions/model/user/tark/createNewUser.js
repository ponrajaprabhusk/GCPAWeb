/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { setUser } = require("../lib");
const { updateData } = require("../../raw-data/tark/updateRawData");

exports.createNewUser = function(request, response) {
    const user = request.body.data;
    const Uid = user.uid;
    const PhotoURL = user.photoURL;
    const DisplayName = user.displayName;
    const Email = user.email;
    const PhoneNumber = user.phoneNumber;
    const ProviderId = user.providerId;
    const NumberOfRegistrations = user.numberOfRegistrations;

    let status = 200;
    let result;
    setUser(Uid, PhotoURL, DisplayName, Email, PhoneNumber, ProviderId, NumberOfRegistrations).then(() => {
        result = { data: "User Signned In Successfully" };
        console.log("User Signned In Successfully");
        updateData("user").then(() => {
            console.log("User Raw Data Updated.");
        });
        return response.status(status).send(result);
    }).catch((error) => {
        status = 500;
        result = { data: error };
        console.error("Error LogIn/SignUp User", error);
        return response.status(status).send(result);
    });
};