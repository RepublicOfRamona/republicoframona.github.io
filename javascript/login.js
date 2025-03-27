// Base64-encoded password ("test")
const pass = "UmFtb25hNGV2ZXI=";
const URL = "aHR0cHM6Ly9hcnRodXJiMjYuZ2l0aHViLmlvL3JhbW9uYWxvY2tlZG1lbWJlcnNwYWdlLw==";

// Function to validate the password
function validatePassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    try {
        const decodedPassword = atob(pass);
        if (input === decodedPassword) {
            window.location.href = atob(URL);
        } else {
            errorMessage.textContent = "Invalid password. Please try again.";
        }
    } catch (e) {
        errorMessage.textContent = "An error occurred. Please try again.";
    }
}

// Attach the validatePassword function to the login button
document.getElementById('loginButton').addEventListener('click', validatePassword);