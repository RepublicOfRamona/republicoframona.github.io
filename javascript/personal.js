const username = document.cookie.split('; ').find(row => row.startsWith('username='))?.split('=')[1];
const expiry = new Date();
expiry.setDate(expiry.getDate() + 7);

function setdetails() {
    const password = document.getElementById('passwordInput').value;
    const username = document.getElementById('usernameInput').value;
    document.cookie = `password=${password}; expires=${expiry.toUTCString()}; path=/`;
    document.cookie = `username=${username}; path=/`;
    document.getElementById('welcomeMessage').textContent = `Welcome ${username}`;
    alert("Your new Username and Password were set succsessfully!")
}

document.getElementById('setuserpass').addEventListener('click', setdetails);

if (username) {
    document.getElementById('welcomeMessage').textContent = `Welcome ${username}`;
}