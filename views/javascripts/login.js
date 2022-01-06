console.log(`Login Page MapleClub`)

var formBox = document.getElementById('formBox')
var errorText = document.getElementById('errorText')
var emailField = document.getElementById('emailField')
var passwField = document.getElementById('passwordField')

formBox.addEventListener('submit', async function(event) {
    var emailId = emailField.value
    var passWrd = passwField.value

    let result
    await fetch('/api/login', {
        method: 'POST',
        headers: {
            'userEmail': emailId,
            'userPassword': passWrd
        }
    })
    .then(response => response.json())
    .then(data => result = data.response)

    console.log(result)
    if (result === 'wrong_password') {
        errorText.innerHTML = 'Wrong Password Entered'
    }
    if (result === 'email_not_found') {
        errorText.innerHTML = 'No Account Found'
    }
    if(result === 'logged_in') {
        window.open('/dashboard', '_self')
    }
})
