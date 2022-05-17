const { db } = require("../application/lib");

exports.registerUser = function(uid, dob, firstName, lastName, gaurdFirst, gaurdLast, address, zip, number, email, school, country, category, achievement, photo, profile, social, userUid, numberOfFiles) {
    const registerData = db.collection("Registrations").doc(uid).set({
        Uid: uid,
        Dob: dob,
        FirstName: firstName,
        LastName: lastName,
        GaurdFirst: gaurdFirst,
        GaurdLast: gaurdLast,
        Address: address,
        Zip: zip,
        Number: number,
        Email: email,
        School: school,
        Country: country,
        Category: category,
        Achievement: achievement,
        Photo: photo,
        Profile: profile,
        Social: social,
        UserUid: userUid,
        NumberOfFiles: numberOfFiles

    });
    return Promise.resolve(registerData);
};

exports.getApplicant = function(Uid) {
    let query = db.collection("Registrations");

    if (Uid != "") {
        query = query.where("Uid", "==", Uid);
    }

    const promise = query.get().then((doc) => {
        let data;
        doc.forEach((element) => {
            if (element.exists) {
                data = element.data();
            }
        });
        return data;
    });

    return Promise.resolve(promise);
};

exports.updateApplicant = function(inputJson, uid) {
    const editRegistrationPromise = db.collection("Registrations").doc(uid).update(inputJson);
    return Promise.resolve(editRegistrationPromise);
};

exports.addFile = function(uid, file, fileUid) {
    console.log("sibcub")
    const addfile = db.collection("Registrations").doc(uid).collection('FilesUploaded').doc(fileUid).set(file);
    return Promise.resolve(addfile);

}