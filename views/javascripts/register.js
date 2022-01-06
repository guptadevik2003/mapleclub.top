console.log(`Register Page MapleClub`)

var formBox = document.getElementById('formBox')
var errorText = document.getElementById('errorText')
var nameField = document.getElementById('nameField')
var emailField = document.getElementById('emailField')
var passwField = document.getElementById('passwordField')
var confPasswordField = document.getElementById('confPasswordField')

formBox.addEventListener('submit', async function(event) {
    var userName = nameField.value
    var emailId = emailField.value
    var passWrd = passwField.value
    var confPass = confPasswordField.value

    if (passWrd != confPass) {
        return errorText.innerHTML = 'Passwords Don\'t Match'
    }

    let result
    await fetch('/api/register', {
        method: 'POST',
        headers: {
            'userName': userName,
            'userEmail': emailId,
            'userPassword': passWrd,
        }
    })
    .then(response => response.json())
    .then(data => result = data.response)

    console.log(result)
    if (result === 'email_already_exists') {
        errorText.innerHTML = 'Email Already Exists'
    }
    if (result === 'error_occured') {
        errorText.innerHTML = 'An Error Occured'
    }
    if(result === 'register_success') {
        window.open('/login', '_self')
    }
})
