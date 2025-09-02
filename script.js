// Typed para cargos ficarem alterando
var typed = new Typed('#typed-cargos', {
    strings: ['Editora de Vídeo', 'Criadora de Conteúdo', 'Graduada em Design'],
    typeSpeed: 50,
    loop:true,
    backspeed: 30,
  });


// swiper pros videos
const swiper = new Swiper('#swiper-videos', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '#next-videos',   // referência direta ao botão correto
        prevEl: '#prev-videos',
    },
    pagination: {
        el: '#pagination-videos', // referência direta à paginação
        clickable: true,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        300: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
    },
    loopedSlides: 5, // número de slides total
});

// Menu Hambúrguer Responsivo
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const whatsappHeader = document.getElementById('whatsapp-header');
    
    // Toggle do menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        whatsappHeader.classList.toggle('active');
        
        // Animação do ícone hambúrguer
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        }
    });
});

//tiltar as imagens da galeria
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 10,
    speed: 400,
    glare: false,
    reset: true,
    gyroscope: false,
    reverse: false,
});

// modal
const gallery = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

//ativando o modal ao clicar na imagem
gallery.forEach(img => {
    img.addEventListener('click', () => {
        const preload = new Image();
        preload.src = img.src;
        modal.classList.add('active');
        preload.onload = () => {
            modalImg.src = img.src;
            modalImg.classList.add('loaded');
        }
    });

});

//fechando ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modalImg.classList.remove('loaded');
        modal.classList.remove('active');
    }
});

//tilt no modal com gyroscope pra celular
VanillaTilt.init(document.querySelector("#modalImg"), {
    max: 10,
    speed: 400,
    reset:true,
    glare: false,
    reverse: false,
    gyroscope: true // <- ativa giroscópio
});