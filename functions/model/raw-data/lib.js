const { db } = require("../application/lib");

exports.setRawData = function(numberOfUsers, numberOfRegistrations) {
    const rawData = db.collection("RawData").doc("RawData").set({
        NumberOfUsers: numberOfUsers,
        NumberOfRegistrations: numberOfRegistrations,
    });
    return Promise.resolve(rawData);
};

exports.updateRawData = function(inputJson) {
    const editRawDataPromise = db.collection("RawData").doc("RawData").update(inputJson);
    return Promise.resolve(editRawDataPromise);
};

exports.getRawData = function() {
    let query = db.collection("RawData");

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