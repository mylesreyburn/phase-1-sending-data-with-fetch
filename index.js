// Add your code here


function submitData(userName, userEmail){
    // let userObject = {
    //     name: userName,
    //     email: userEmail
    // }
    let userObject = {};
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }
    return fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json())
        .then((object) => {
            document.append(object)
        })
        .catch((error) => {
            alert("uh oh! someone's [ERROR]")
            document.append(error.message)
        })
}

submitData("John Jingle", "jj@hohoho.hotmail.biz")






/* fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  }); */






