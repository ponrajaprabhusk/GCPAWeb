/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { db } = require("../application/lib");

exports.addPhoto = function(uid, date, imageurl) {
    const galleryData = db.collection("Gallery").doc(uid).set({
        Uid: uid,
        Date: date,
        ImageUrl: imageurl,
        Hovering: false,
        Status: "Ok",

    });
    return Promise.resolve(galleryData);
};

exports.getPhotoes = function(start, end) {
    const query = db.collection("Gallery");
    const promise = query.get().then((doc) => {
        const data = [];
        doc.forEach((element) => {
            if (element.exists) {
                let uid = element.data().Uid;
                uid = uid.slice(1);
                if (uid > start && uid <= end) {
                    data.push(element.data());
                }
            }
        });
        return data;
    });

    return Promise.resolve(promise);
};