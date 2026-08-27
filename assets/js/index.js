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

// COntato botões

document.addEventListener("DOMContentLoaded", () => {

    const botoesCategoria = document.querySelectorAll(".btn-opcao");
    const botaoWhatsApp = document.getElementById("btn-whatsapp-enviar");

    const numeroWhatsApp = "558498318905";

    let categoriaSelecionada = "Maquiagem";

    // Seleciona a categoria
    botoesCategoria.forEach((botao) => {

        botao.addEventListener("click", () => {

            // Remove a seleção de todos
            botoesCategoria.forEach((item) => {
                item.classList.remove("active");
            });

            // Seleciona o botão clicado
            botao.classList.add("active");

            // Guarda a categoria
            categoriaSelecionada = botao.dataset.categoria;

        });

    });

    // Envia para o WhatsApp
    botaoWhatsApp.addEventListener("click", (event) => {

        event.preventDefault();

        const mensagem =
            `Olá! Vim pelo site da Pink Glamour e gostaria de atendimento sobre a categoria ${categoriaSelecionada}.`;

        const url =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

});