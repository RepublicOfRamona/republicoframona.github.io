const pass = "UmFtb25hNGV2ZXI=";
const URL = "bWVtYmVyc3BhZ2U=";
const acceptedUsername = ["Leader", "Member"];

function validatePassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const username = document.getElementById('usernameInput').value;

    try {
        const decodedPassword = atob(pass);
        if (input === decodedPassword or input === document.cookie  && acceptedUsername.includes(username)) {
            window.location.href = atob(URL);
        } else {
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    } catch (e) {
        errorMessage.textContent = "An error occurred. Please try again.";
    }
}

document.getElementById('loginButton').addEventListener('click', validatePassword);