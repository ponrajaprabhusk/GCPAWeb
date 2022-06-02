/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

 const { db } = require("../application/lib");
const { getUser } = require("../user/lib");
const { generateTemplate } = require("./tark/generateTemplate");

 /**
  * Description
  * @param {any} uid
  * @param {any} mailType
  * @param {any} applicationId
  * @return {any}
  */
  exports.mailer = function(uid, mailType, applicationId) {
    const promise = getUser(uid, "").then((data) => {
        console.log(data);
        console.log(data.Email);
        console.log(data.DisplayName);
        const p1 = generateTemplate(mailType, data.DisplayName, applicationId).then((message)=>{
            sendMail(data.Email, message[0], message[1]);
        }).catch((error)=>{
            console.error(error);
        return error;
        });
        Promise.resolve(p1);
    }).catch((error) => {
        console.error(error);
        return error;
    });
    return Promise.resolve(promise);
};

 /**
  * Description
  * @param {any} userEmail
  * @param {any} subjectMessage
  * @param {any} htmlMessage
  * @return {any}
  */
const sendMail = function(userEmail, subjectMessage, htmlMessage) {
     const sendEmailPromise = db.collection("mail").add({
         to: userEmail,
         message: {
             subject: subjectMessage,
             html: htmlMessage,
         },
     });
     return Promise.resolve(sendEmailPromise);
 };