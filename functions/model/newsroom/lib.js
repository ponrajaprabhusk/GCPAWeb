/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { db } = require("../application/lib");

exports.addNewNews = function(uid, name, link, imageurl) {
    const newsData = db.collection("News").doc(uid).set({
        Uid: uid,
        Name: name,
        Link: link,
        ImageUrl: imageurl,
        Status: "Ok",

    });
    return Promise.resolve(newsData);
};

exports.getAllNews = function() {
    const query = db.collection("News");

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