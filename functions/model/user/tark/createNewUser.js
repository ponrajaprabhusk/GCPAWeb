const { setUser } = require("../lib");

exports.createNewUser = function(request, response) {
    const user = request.body.data;
    const Uid = user.uid;
    const PhotoURL = user.photoURL;
    const DisplayName = user.displayName;
    const Email = user.email;
    const PhoneNumber = user.phoneNumber;
    const ProviderId = user.providerId;

    const date = new Date();
    const Username = 'test';

    let status = 200;
    setUser(Uid, PhotoURL, DisplayName, Email, PhoneNumber, ProviderId, Username).then(() => {
        result = { data: "User Signned In Successfully" };
        console.log("User Signned In Successfully");
        return response.status(status).send(result);
    }).catch((error) => {
        result = { data: error };
        console.error("Error LogIn/SignUp User", error);
        return response.status(status).send(result);
    });

}