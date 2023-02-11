$(document).ready(function() {
    var data = $("#navbar-fixed").find(".nav-link");
    for (let index = 0; index < data.length; index++) {
        if (data[index].classList.contains("active")) {
            $(".intro").find(".nav-link:eq(" + index + ")").addClass("nav-active")
        }

        ;

    }

    $(window).scroll(function() {

        $(".intro").find(".nav-link:eq(" + 0 + ")").removeClass("nav-active")
        var data = $("#navbar-fixed").find(".nav-link");
        for (let index = 0; index < data.length; index++) {
            if (data[index].classList.contains("active")) {
                $(".intro").find(".nav-link:eq(" + index + ")").addClass("active")
            }

            ;

        }
    })

})



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
        document.getElementById("navbar-fixed").classList.add("scroll-header")

    } else {
        document.getElementById("navbar-fixed").classList.remove("scroll-header")
    }
}