/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { db } = require("../application/lib");
const { mailer } = require("../Mailer/lib");
 /**
  * Description
  * @param {any} Uid
  * @param {any} order
  * @return {any}
  */
exports.setRazorDetails = function(Uid, order) {
    const p1 = db.collection("Registrations").doc(Uid).update({
        RazorPayOrderDetails: order,
    });
   return Promise.resolve(p1);
};

exports.setPaymentStatus = function(orderId, id) {
    console.log("orderid", orderId);
    console.log("reg id", id);
    let data;

    const p1 = db.collection("Registrations").doc(id).get().then((doc)=>{
        data = doc.data();
        data.RazorPayOrderDetails.amount_due = 0;
        data.RazorPayOrderDetails.amount_paid = 100,
        data.RazorPayOrderDetails.status = "paid";
    });
    Promise.resolve(p1).then(()=>{
        const promise = db.collection("Registrations").doc(id).update({
            PaymentStatus: "Complete",
            RazorPayOrderDetails: data.RazorPayOrderDetails,
        });
        mailer(data.UserUid, "Payment_Complete", id);
        return Promise.resolve(promise);
    });
};
