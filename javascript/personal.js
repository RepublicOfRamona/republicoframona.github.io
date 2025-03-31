const username = getCookie("username");
const expiry = new Date();
expiry.setDate(expiry.getDate() + 30);

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return atob(c.substring(name.length, c.length));
      }
    }
    return "";
  }

function setdetails() {
    const password = document.getElementById('passwordInput').value;
    const username = document.getElementById('usernameInput').value;
    document.cookie = `password=${btoa(password)}; expires=${expiry.toUTCString()}; path=/`;
    document.cookie = `username=${btoa(username)}; path=/`;
    document.getElementById('welcomeMessage').textContent = `Welcome ${username}`;
    alert("Your new Username and Password were set succsessfully!")
}

document.getElementById('setuserpass').addEventListener('click', setdetails);

if (username) {
    document.getElementById('welcomeMessage').textContent = `Welcome ${username}`;
}