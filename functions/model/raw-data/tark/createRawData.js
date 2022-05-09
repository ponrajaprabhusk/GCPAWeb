const { setRawData } = require("../lib");

exports.createRawData = function(request, response) {
    const user = request.body.data;
    const numberOfUsers = user.numberOfUsers;
    const numberOfRegistrations = user.numberOfRegistrations

    let status = 200;
    setRawData(numberOfUsers, numberOfRegistrations).then(() => {
        result = { data: "Raw data setUp complete" };
        console.log("Raw data setUp complete");
        return response.status(status).send(result);
    }).catch((error) => {
        result = { data: error };
        console.error("Error setting up Raw data", error);
        return response.status(status).send(result);
    });

}