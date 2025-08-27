new Typed('.typed', {
    strings: ['Editor de Vídeo', 'Criador de Conteúdo', 'Designer Publicitário'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
});


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
    
    // Toggle do menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
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