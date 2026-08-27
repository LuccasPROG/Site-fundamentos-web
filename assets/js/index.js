const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu nav a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        menuToggle.checked = false;

    });

});