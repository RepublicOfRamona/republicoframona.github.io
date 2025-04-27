function menuToggle() {
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        body.style.marginTop = "6rem";
    } else {
        menu.style.display = "block";
        body.style.marginTop = "10rem";
    }

}