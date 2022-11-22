// Add your code here
// The destination URL
// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. 
// These should be assigned to name and 
// email keys within an object. This object should then be stringified.

  
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({name: name, email: email}),
    };
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
    return response.json();
    })
    .then(function (object) {
        document.body.innerHTML = object.id
    })
    .catch(function (error) {
        alert("Unauthorized Access");
        document.body.innerHTML = error.message;
      });
}
