window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // if at the top
        navbar.style.backgroundColor = '#EBE6F9'; //transparent
    } else { navbar.style.backgroundColor = "transparent" }

})