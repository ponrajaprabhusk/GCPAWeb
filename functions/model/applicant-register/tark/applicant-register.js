/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { registerUser, getApplicant, updateApplicant, addFile } = require("../lib");
const { getRawData } = require("../../raw-data/lib");
const { updateData } = require("../../raw-data/tark/updateRawData");
const { mailer } = require("../../Mailer/lib");
const ShortUniqueId = require("short-unique-id");

const addFiles = function(uid, file) {
    const promise = getApplicant(uid).then((doc) => {
        if (doc == undefined) {
            console.log("Document does not exist");
        } else {
            const numberOfFiles = doc.NumberOfFiles + 1;
            const inputJson = {
                NumberOfFiles: numberOfFiles,
            };
            updateApplicant(inputJson, uid).then(() => {
                const fileUid = "F" + numberOfFiles;
                file.Uid = fileUid;
                addFile(uid, file, fileUid);
            });
        }
    });

    return Promise.resolve(promise);
};

exports.registerNewUser = function(request, response) {
    const user = request.body.data;

    const prefix=user.Prefix;
    const dob = user.Dob;
    const firstName = user.FirstName;
    const lastName = user.LastName;
    const gaurdFirst = user.GaurdFirst;
    const gaurdLast = user.GaurdLast;
    const address = user.Address;
    const zip = user.Zip;
    const number = user.Number;
    const email = user.Email;
    const school = user.School;
    const country = user.Country;
    const category = user.Category;
    const achievement = user.Achievement;
    const photo = user.Photo;
    const profile = user.Profile;
    const social = user.Social;
    const userUid = user.UserUid;
    const numberOfFiles = 0;
    let result;
    const status = 200;

    getRawData().then((doc) => {
        const uidGenerator = new ShortUniqueId({ length: 10 });
        const uid=uidGenerator();
        registerUser(uid, prefix, dob, firstName, lastName, gaurdFirst, gaurdLast, address, zip, number, email, school, country, category, achievement, photo.FileUrl, profile.FileUrl, social, userUid, numberOfFiles).then(() => {
            result = { data: uid };
            console.log("Applicant Registered Successfully");
            // adding file code
            if (photo.FileUrl) {
                addFiles(uid, photo).then(() => {
                    if (profile.FileUrl) {
             addFiles(uid, profile);
                      }
                });
            }

            // end
            updateData("registration").then(() => console.log("Registration Raw Data Updated"));
            mailer(userUid, "Registration_Complete", uid);
            return response.status(status).send(result);
        }).catch((error) => {
            result = { data: error };
            console.error("Error Registering applicant", error);
            return response.status(status).send(result);
        });
    });
};

module.exports.addFiles = this.addFiles;