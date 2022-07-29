const {getApplicant, updateApplicant, addFile} = require("../lib");

exports.addExtraFiles = function(request, response) {
  const data = request.body.data;
  const uid=data.uid;
  const file=data.file;
  let result;
  let status = 200;
  getApplicant(uid).then((doc) => {
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
    result ={data: {status: "OK"}};
    return response.status(status).send(result);
  }).catch((error) => {
    status=500;
    result = {data: error};
    console.error("Error Registering applicant", error);
    return response.status(status).send(result);
  });
};
