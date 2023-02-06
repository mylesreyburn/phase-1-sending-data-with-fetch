// Add your code here


/* function submitData(userName, userEmail){
    let userObject = {
        name: userName,
        email: userEmail
    }
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userObject)
    }
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function(response){
            let egg = response.json()
            console.log("response.json:", egg)
            return egg
        })
        .then(function(object){
            console.log(object)
            document.querySelector("body").append(object)
        })
        .catch((error) => {
            alert("uh oh! someone's [ERROR]")
            document.querySelector("body").append(error.message)
        })
}

submitData("John Jingle", "jj@hohoho.hotmail.biz") */



function submitData(userName, userEmail){
    let userObject = {
        name: userName,
        email: userEmail
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userObject)
    })
        .then(function(response){
            let egg = response.json()
            console.log("response.json:", egg)
            return egg
        })
        .then(function(object){
            console.log(object)
            document.querySelector("body").append(object)
        })
        .catch((error) => {
            alert("uh oh! someone's [ERROR]")
            document.querySelector("body").append(error.message)
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






