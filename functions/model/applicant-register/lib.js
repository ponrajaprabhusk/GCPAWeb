const { db } = require("../application/lib");

exports.registerUser = function(Uid, Dob, FirstName, LastName, GaurdFirst, GaurdLast, Address, Zip, Number, Email, School, Country, Category, Achievement, Photo, Profile, Social) {
    const registerData = db.collection("Registrations").doc(Uid).set({
        uid: Uid,
        dob: Dob,
        firstName: FirstName,
        lastName: LastName,
        gaurdFirst: GaurdFirst,
        gaurdLast: GaurdLast,
        address: Address,
        zip: Zip,
        number: Number,
        email: Email,
        school: School,
        country: Country,
        category: Category,
        achievement: Achievement,
        photo: Photo,
        profile: Profile,
        social: Social

    });
    return Promise.resolve(registerData);
};