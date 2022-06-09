/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const { createActivityList, getSupportData, updateSupportData } = require("../lib");


exports.createActivity = function(request, response) {
    const activity = request.body.data;
    const sendor = activity.sendor;
    const message = activity.message;
    const date = activity.date;
    const time = activity.time;
    const ticketId = activity.ticketId;

    let status = 200;
    getSupportData(ticketId).then((doc) => {
        const actId = "A" + (doc.NumberOfActivity + 1);
        createActivityList(actId, sendor, message, date, time, ticketId).then(() => {
           const result = { data: "Activity created Successfully" };
            console.log("Activity created Successfully");
            const inputJson = {
                NumberOfActivity: doc.NumberOfActivity + 1,
            };
            updateSupportData(doc.TicketId, inputJson).then(() => {
                console.log("Number Of Activity Updated.");
            });
            return response.status(status).send(result);
        }).catch((error) => {
            status=500;
            const result = { data: error };
            console.error("Error Creating Activity", error);
            return response.status(status).send(result);
        });
    });
};