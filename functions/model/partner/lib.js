/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { db } = require("../application/lib");

exports.addNewPartner = function(uid, name, type, imageurl) {
    const partnerData = db.collection("Partners").doc(uid).set({
        Uid: uid,
        Name: name,
        Type: type,
        ImageUrl: imageurl,

    });
    return Promise.resolve(partnerData);
};

exports.getAllPartners = function() {
    const query = db.collection("Partners");

    const promise = query.get().then((doc) => {
        const data = [];
        doc.forEach((element) => {
            if (element.exists) {
                data.push(element.data());
            }
        });
        return data;
    });

    return Promise.resolve(promise);
};