const yup = require("yup")

let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });
  
  // check validity
  schema
    .isValid({
      name: 'Shivan LP',
      age: 39,
    })
    .then(function (valid) {
        valid ? console.log("Validation successful") : console.log("Server side validation failed");
    })
    .catch(function(err) {
        console.log("Some error occured")
    })