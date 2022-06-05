/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const RazorPay = require("razorpay");
const cors = require("cors")({ origin: true });

const admin = require("firebase-admin");
const { getApplicant } = require("../../applicant-register/lib");
const db = admin.firestore();

/* Generate the base-62 key*/
const base62 = {
    charset: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        .split(""),
    encode: (integer) => {
        if (integer === 0) {
            return 0;
        }
        let s = [];
        while (integer > 0) {
            s = [base62.charset[integer % 62], ...s];
            integer = Math.floor(integer / 62);
        }
        return s.join("");
    },
};

// eslint-disable-next-line require-jsdoc
function generateBase62Constant() {
    const dateLocal = new Date();
    const miliSec = dateLocal.getTime();
    return base62.encode(miliSec);
}

exports.addPayment = function(request, response) {
    cors(request, response, () => {
        const Uid = request.body.data.UserUid;
        const amount = request.body.data.Amount;

        getApplicant(Uid).then((doc) => {
            if (doc.exists) {
                // Test Credentials
                const razorpay = new RazorPay({
                    key_id: "rzp_test_jWOofTDBbQGPFa",
                    key_secret: "N9fWEfNEVnIrmubuMyDhxP4i",
                });

                // Production Credentials
                // const razorpay = new RazorPay({
                //     key_id: "rzp_live_xoOwFekmzVS4do",
                //     key_secret: "UnY8Vp9ty5c9wL1TWNUlBsci",
                // });

                const generatedReceipt = generateBase62Constant();

                const options = {
                    amount: parseInt(amount * 100), // amount in the smallest currency unit
                    currency: "INR",
                    receipt: generatedReceipt,
                };

                console.log(options);
                razorpay.orders.create(options, function(err, order) {
                    if (err) {
                        const result = { data: err };
                        console.log(err);
                        return response.status(500).send(result);
                    }

                    db.collection("Registrations").doc(Uid).update({
                        RazorPayOrderDetails: order,
                    });
                    // Test credentials
                    order.key = "rzp_test_jWOofTDBbQGPFa";

                    // Production Credentials
                    // order.key = "rzp_live_xoOwFekmzVS4do";
                    order.receipt = generatedReceipt;
                    const result = { data: order };
                    return response.status(200).send(result);
                });
            }
        });
    });
};