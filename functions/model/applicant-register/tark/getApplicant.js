/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { getApplicant } = require("../lib");


exports.getApplicant = function(request, response) {
    const uid = request.body.data.RegistrationId;
    let result;
    let status = 200;
    const p1 = getApplicant(uid).then((res)=>{
        result = { data: res };
        console.log(res);
    });
    Promise.resolve(p1).then(()=>{
        console.log("Success! Fetched Applicant Data");
        return response.status(status).send(result);
    }).catch((error)=>{
        status = 500;
        result = "NOT FOUND";
        console.log("Error! Cannot Find Applicant");
        return response.status(status).send(result);
    });
};