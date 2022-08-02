{function submitData(name, email){
    const userData = {
        name: name,
        email: email
    }
    let body = document.querySelector('body')

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            console.log(object.id)
            body.append(object.id)
        })
        .catch(function(error) {
            alert("THIS ISN'T GOOD!")
            console.log(error.message)
            body.append(error.message)
        })
}}