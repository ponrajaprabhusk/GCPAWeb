const { registerUser } = require("../lib");

exports.registerNewUser = function(request, response) {
    const user = request.body.data;
    const Uid = user.Uid;
    const Dob = user.Dob
    const FirstName = user.FirstName
    const LastName = user.LastName
    const GaurdFirst = user.GaurdFirst
    const GaurdLast = user.GaurdLast
    const Address = user.Address
    const Zip = user.Zip
    const Number = user.Number
    const Email = user.Email
    const School = user.School
    const Country = user.Country
    const Category = user.Category
    const Achievement = user.Achievement
    const Photo = user.Photo
    const Profile = user.Profile
    const Social = user.Social

    let status = 200;
    registerUser(Uid, Dob, FirstName, LastName, GaurdFirst, GaurdLast, Address, Zip, Number, Email, School, Country, Category, Achievement, Photo, Profile, Social).then(() => {
        result = { data: "Applicant Registered Successfully" };
        console.log("Applicant Registered Successfully");
        return response.status(status).send(result);
    }).catch((error) => {
        result = { data: error };
        console.error("Error Registering applicant", error);
        return response.status(status).send(result);
    });;

}