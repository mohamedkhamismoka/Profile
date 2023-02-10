var btn = document.querySelector(".moon");
btn.onclick = function() {
    document.body.classList.add("dark");


    document.getElementsByClassName("moon")[0].style.display = "none";
    document.getElementsByClassName("light")[0].style.display = "block"

}
var btn = document.querySelector(".light");
btn.onclick = function() {
    document.body.classList.remove("dark");


    document.getElementsByClassName("moon")[0].style.display = "block";
    document.getElementsByClassName("light")[0].style.display = "none"

}

var typed = new Typed(".title", {
    strings: ["Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

})


window.onscroll = function() {
    if (window.pageYOffset > 100) {
        document.getElementById("intro").classList.add("scroll-header")
        console.log(window.pageYOffset);
    } else {
        document.getElementById("intro").classList.remove("scroll-header")
    }
}