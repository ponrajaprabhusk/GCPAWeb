/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { getExtraFiles } = require("../lib");

exports.getExtraFiles = function(request, response) {
    const uid = request.body.data.uid;
    let status = 200;

    getExtraFiles(uid).then((extraFilesData) => {
        if (extraFilesData) {
          const result = { data: { status: "OK", data: extraFilesData } };
            return response.status(status).send(result);
        }
    }).catch((err) => {
        status = 500;
        console.error(err);
        return response.status(status).send(err);
    });
};