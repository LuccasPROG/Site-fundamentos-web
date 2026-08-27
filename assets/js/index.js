// fechar menu sosinho
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu nav a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        menuToggle.checked = false;

    });

});

// BARRA DE PROGRESSO

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const documentHeight = document.documentElement.scrollHeight;

    const windowHeight = window.innerHeight;

    const scrollTotal = documentHeight - windowHeight;

    const scrollProgress = (scrollTop / scrollTotal) * 100;

    progressBar.style.width = scrollProgress + "%";

});

// Botão TOpo

const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        btnTopo.classList.add("show");
    } else {
        btnTopo.classList.remove("show");
    }

});

btnTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});