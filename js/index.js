var sections = document.querySelectorAll("section");

onscroll = function() {

    if (window.pageYOffset > 300) {
        $(".jump").css("opacity", "1");


    } else {
        $(".jump").css("opacity", "0");
    }



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

$(function() {
    new WOW().init();
    $("body ").scrollspy({
        target: '#navabar',
        offset: 10
    });


    $(".jump").click(function() {
        window.scrollTo(0, 0)
    })

    function sendEmail(name, email, body) {

        Email.send({

            SecureToken: "cfcf8187-0032-4b01-9e8c-bf6aebc2ee0a",

            To: "atiffahmykhamis@gmail.com",
            From: "atiffahmykhamis@gmail.com",
            Subject: "message from " + name,
            Body: "message from " + email + " from your profile App <br/>" + body


        }).then(
            message => message == "OK" ? alert("mail sent successfully") : alert(message)
        );
    }

    $('form').submit(function(evt) {
        evt.preventDefault();
        window.history.back();
        var valid = false;
        if ($("#name").val() == "") {
            $("#name").addClass("not-valid");
            $(".name-message").css("display", "block")
            $(".name-message").text("name is required")
        } else if ($("#name").val().length < 5) {
            $("#name").addClass("not-valid");
            $(".name-message").css("display", "block")
            $(".name-message").text("min length is 5")
        } else {
            valid = true;
        }

        if ($("#email").val() == "") {
            $("#email").addClass("not-valid");
            $(".email-message").css("display", "block")
            $(".email-message").text("email is required")
        } else if ($("#email").val().toString().indexOf("@") == -1) {
            $("#email").addClass("not-valid");
            $(".email-message").css("display", "block")
            $(".email-message").text("Please Enter valid mail")
        } else {
            valid = true;
        }

        if ($("#message").val() == "") {
            $("#message").addClass("not-valid");
            $(".message-message").css("display", "block")
            $(".message-message").text("message is required")
        } else if ($("#message").val().length < 10) {
            $("#message").addClass("not-valid");
            $(".message-message").css("display", "block")
            $(".message-message").text("message min length is 10")
        } else {
            valid = true;
        }


        if (valid) {
            sendEmail($("#name").val(), $("#email").val(), $("#message").val())
        }

    });
    $("#name").change(function() {
        if ($("#name").val() == "") {
            $("#name").addClass("not-valid");
            $(".name-message").css("display", "block")
            $(".name-message").text("name is required")
        } else if ($("#name").val().length < 5) {
            $("#name").addClass("not-valid");
            $(".name-message").css("display", "block")
            $(".name-message").text("min length is 5")
        } else {
            $("#name").removeClass("not-valid");
            $(".name-message").css("display", "none")
            $(".name-message").text("name is required")
        }



    })


    $("#message").change(function() {
        if ($("#message").val() == "") {
            $("#message").addClass("not-valid");
            $(".message-message").css("display", "block")
            $(".message-message").text("message is required")
        } else if ($("#message").val().length < 10) {
            $("#message").addClass("not-valid");
            $(".message-message").css("display", "block")
            $(".message-message").text("message min length is 10")
        } else {
            $("#message").removeClass("not-valid");
            $(".message-message").css("display", "none")
        }
    })

    $("#email").change(function() {
        if ($("#email").val() == "") {
            $("#email").addClass("not-valid");
            $(".email-message").css("display", "block")
            $(".email-message").text("email is required")
        } else if ($("#email").val().toString().indexOf("@") == -1) {
            $("#email").addClass("not-valid");
            $(".email-message").css("display", "block")
            $(".email-message").text("Please Enter valid mail")
        } else {
            $("#email").removeClass("not-valid");
            $(".email-message").css("display", "none")
            $(".email-message").text("name is required")
        }
    })

});