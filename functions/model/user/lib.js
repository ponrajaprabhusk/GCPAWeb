const { db } = require("../application/lib");

exports.setUser = function(Uid, PhotoURL, DisplayName, Email, PhoneNumber, ProviderId) {
    const userData = db.collection("Users").doc(Uid).set({
        uid: Uid,
        photoURL: PhotoURL,
        displayName: DisplayName,
        email: Email,
        phoneNumber: PhoneNumber,
        providerId: ProviderId,
    });
    return Promise.resolve(userData);
};