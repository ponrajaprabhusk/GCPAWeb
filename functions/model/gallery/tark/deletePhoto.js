/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const { data } = require("jquery");
const { deletePhotoByUid } = require("../lib");

exports.deletePhoto = function(request, response) {
        const uid = request.body.data.Uid;
        let result;
        deletePhotoByUid(uid).then(() => {
            result = { data: "Image Deleted successfully" };
            console.log(data);
            return response.status(200).send(result);
        }).catch((error) => {
            result = { data: error };
            console.error("Error", error);
            return response.status(500).send(result);
        });
};
