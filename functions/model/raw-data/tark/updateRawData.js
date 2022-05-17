const { error } = require("console");
const { updateRawData, getRawData } = require("../lib");


exports.updateData = function(updateType) {
    let status = 200
    const promise = getRawData().then((doc) => {

        if (doc == undefined) {
            result = { data: { status: "Note doesn't exist" } };
        } else {
            if (updateType == "user") {
                const numberOfUsers = doc.NumberOfUsers + 1
                const inputJson = {
                    NumberOfUsers: numberOfUsers
                };
                updateRawData(inputJson)
            } else if (updateType == "registration") {
                const numberOfRegistrations = doc.NumberOfRegistrations + 1
                const inputJson = {
                    NumberOfRegistrations: numberOfRegistrations
                };
                updateRawData(inputJson)
            } else {
                throw error("updateType not specified")
            }
        }



    });

    return Promise.resolve(promise);

}