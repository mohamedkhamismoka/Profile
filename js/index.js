var sections = document.querySelectorAll("section");

onscroll = function() {



    if (window.pageYOffset > 100) {

        $(".navbar").addClass("scroll-header");
    } else {
        $(".navbar").removeClass("scroll-header");
    }
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function() {
    document.querySelectorAll(".navbar a").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActiveClass = function(id) {
    // console.log(id);
    var selector = `.navbar a[href="#${id}"]`;
    document.querySelectorAll(selector)[0].classList.add("active");
    if (document.querySelectorAll(selector)[1] != null) {
        document.querySelectorAll(selector)[1].classList.add("active")
    }
};

var navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {

        var currentId = e.target.attributes.href.value;
        var section = document.querySelector(currentId);
        var sectionPos = section.offsetTop;
        // section.scrollIntoView({
        //   behavior: "smooth",
        // });

        window.scroll({
            top: sectionPos,
            behavior: "smooth",
        });
    });
});




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