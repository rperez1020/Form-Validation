const username = document.getElementById("username")
const password = document.getElementById("password")
const verifyPassword = document.getElementById("verifyPassword")
const termsOfService = document.getElementById("termsOfService")
const form = document.getElementById("form")
const error = document.getElementById("errorMessage")

form.addEventListener("submit", e => {
    
    let messages = []
    if(username.value === '' || username.value == null || username.value.length < 6){
        messages.push("Username must be longer than 6 characters")
    }
    if(username.value === '' || username.value == null || username.value.length < 6){
        messages.push("Username must be longer than 6 characters")
    }
    if(username.value === '' || username.value == null || username.value.length < 6){
        messages.push("Username must be longer than 6 characters")
    }
    if(termsOfService.checked == false){
        messages.push("You must agree to terms of service")
    }

    if(messages.length > 0){

        e.preventDefault()
        error.innerText=messages.join(',')
    }
})




