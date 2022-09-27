/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const RazorPay = require("razorpay");

const { getApplicant } = require("../../applicant-register/lib");
const { setRazorDetails, generateBase62Constant } = require("../lib");

exports.addPayment = function(request, response) {
        const Uid = request.body.data.RegistrationId;
        const amount = request.body.data.Amount;
        getApplicant(Uid).then((doc) => {
            console.log(doc);
            if (doc != undefined) {
                // Test Credentials
                const razorpay = new RazorPay({
                    key_id: "rzp_test_nfhDfN6X5cgp42",
                    key_secret: "EjWL1pPedHeT4Z1C4laM3u1b",
                });

                const generatedReceipt = generateBase62Constant();

                const options = {
                    amount: parseInt(amount * 100), // amount in the smallest currency unit
                    currency: "INR",
                    receipt: generatedReceipt,
                };

                razorpay.orders.create(options, function(err, order) {
                    if (err) {
                        const result = { data: err };
                        console.log(err);
                        return response.status(500).send(result);
                    }

                    setRazorDetails(Uid, order);
                    // Test credentials
                    order.key = "rzp_test_nfhDfN6X5cgp42";
                    order.receipt = generatedReceipt;
                    const result = { data: order };
                    return response.status(200).send(result);
                });
            }
        });
};