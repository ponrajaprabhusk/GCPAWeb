const { db } = require("../application/lib");

exports.setUser = function(uid, photoURL, displayName, email, phoneNumber, providerId, numberOfRegistrations) {
    const userData = db.collection("Users").doc(uid).set({
        Uid: uid,
        PhotoURL: photoURL,
        DisplayName: displayName,
        Email: email,
        PhoneNumber: phoneNumber,
        ProviderId: providerId,
        NumberOfRegistrations: numberOfRegistrations,
    });
    return Promise.resolve(userData);
};

exports.getUser = function(Uid, username) {
    let query = db.collection("Users");

    if (username != "") {
        query = query.where("Username", "==", username);
    }

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