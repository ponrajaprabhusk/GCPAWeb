const { update_registration } = require("../lib");
const { getUser } = require("../../user/lib");

exports.getData = function(request, response) {
    const user = request.body.data;
    const uid = user.uid;
    let status = 200;

    const promise = getUser(uid, "").then((doc) => {

        if (doc == undefined) {
            result = { data: { status: "Note doesn't exist" } };
        } else {
            const numberOfRegistrations = doc.NumberOfRegistrations + 1
            const inputJson = {
                NumberOfRegistrations: numberOfRegistrations
            };
            update_registration(inputJson, uid);
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
}