const pass = "MTIzNA==";
const backuppass = "SWYzN2lzT3cx";
const backupusername = "QmFja3Vw";
const URL = "bWVtYmVyc3BhZ2U=";
const acceptedUsername = ["Leader", "Member"];

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

function validatePassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    const errorMessage2 = document.getElementById('errorMessage2');
    const username = document.getElementById('usernameInput').value;

    try {
        const decodedPassword = atob(pass);
        
        if (input === decodedPassword && acceptedUsername.includes(username)) {
          if (getCookie("username") === "" || getCookie("password") === "") {
            window.location.href = atob(URL);
          } else {
            errorMessage.textContent = "Invalid username or password. If you have previously set a username and password, please use them to log in.";
            errorMessage2.textContent = "If you have forgotten your password, please contact the Minister of Science and Technology.";
            return;
          }
        } else if (username === atob(backupusername) && input === atob(backuppass)) {
          confirm("You have used a temporary password. please select a new one on the next page.");
          window.location.href = atob(URL);
        } else if (getCookie("username") !== "" || getCookie("password") !== "") {
            if (username === getCookie("username") && input === getCookie("password")) {
                window.location.href = atob(URL);
            }
        } 
        errorMessage.textContent = "Invalid username or password. Please try again.";
        } catch (e) {
            errorMessage.textContent = "An error occurred. Please try again.";
        }
}

document.getElementById('loginButton').addEventListener('click', validatePassword);