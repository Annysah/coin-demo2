const email = document.getElementById("email")
const password = document.getElementById("password")

const errorElem = document.getElementById("errors")

const form = document.getElementById("form")

form.addEventListener("submit", function(e){
    let messages = []
    if(email.value === '' || email.value == null) {
        messages.push("Email is required")
    }

    if(password.value.length <= 6) {
        messages.push("* Password must be more than 6 characters")
    }

    if(password.value.length >= 16) {
        messages.push("* Password must be less than 16 characters")
    }

    if(password.value == "password") {
        messages.push("Password cannot be set to password")
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElem.innerText = messages.join(", ")
    }
})