/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */


 /**
  * Description
  * @param {any} uid
  * @param {any} mailType
  * @param {any} applicationId
  * @return {any}
  */
exports.setRazorDetails(Uid){
    const p1 = db.collection("Registrations").doc(Uid).update({
        RazorPayOrderDetails: order,
    });
    Promise.resolve(p1);
}
