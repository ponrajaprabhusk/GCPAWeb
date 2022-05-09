const { getUsersRegistrations } = require("../lib")

exports.getRegistrations = function(request, response) {
    const useruid = request.body.data.UserUid;

    let status = 200;

    getUsersRegistrations(useruid).then((registerData) => {
        if (registerData) {
            result = { data: { status: "OK", data: registerData } };
            return response.status(status).send(result);
        }
    }).catch((err) => {
        status = 500;
        console.error(err);
        return response.status(status).send(err);
    });
};