/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
 const { getTemplate } = require("./getTemplate");

 /**
  * Description
  * @param {any} mailType
  * @param {any} applicantName
  * @param {any} applicationId
  * @return {any}
  */
 exports.generateTemplate = function(mailType, applicantName, applicationId) {
   const message = [];
   let subjectMessage = "";
   let templateName = "";
   let mailSubject;
   if (mailType == "Registration_Complete") {
       console.log("registration");
     templateName = "registration.html";
   } else if (mailType == "Payment_Complete") {
     templateName = "payment.html";
   } else if (mailType == "Selected_Email") {
    templateName = "selected.html";
   } else if (mailType == "Rejected_Email") {
    templateName = "rejected.html";
   }
   const promise = getTemplate(templateName).then((data) => {
     if (templateName == "registration.html") {
        mailSubject="Registration Successful - GCPA";
        data = data.replace("$Name$", applicantName);
        data = data.replace("$Name1$", applicantName);
        data = data.replace("$Applicationid$", applicationId);
        data = data.replace("$applicationLink$", "https://www.gcpawards.com/payment/" + applicationId); // applicationId
     } else if (templateName == "payment.html") {
        data = data.replace("$Name$", applicantName);
        data = data.replace("$Name1$", applicantName);
        data = data.replace("$ApplicationId$", applicationId);
        data = data.replace("$ApplicationLink$", "https://www.gcpawards.com/payment/"+ applicationId); // applicationId
        mailSubject="Payment Successful - GCPA";
     } else if (templateName == "selected.html") {
        data = data.replace("$Name$", applicantName);
        mailSubject="Congratulations on the Global Child Prodigy Award";
        data = data.replace("$applicationLink$", "https://www.gcpawards.com/"); // applicationId
    } else if (templateName == "rejected.html") {
        data = data.replace("$Name$", applicantName);
        mailSubject="Application Status - GCPA";
    }
     subjectMessage = mailSubject;
     message.push(subjectMessage);
     message.push(data);
     return message;
   }).catch((err) => {
     console.error(err);
     return;
   });
   return Promise.resolve(promise);
 };