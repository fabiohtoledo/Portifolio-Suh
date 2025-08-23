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