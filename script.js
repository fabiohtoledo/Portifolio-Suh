// Typed para cargos ficarem alterando
var typed = new Typed('#typed-cargos', {
    strings: ['Editora de Vídeo', 'Criadora de Conteúdo', 'Graduada em Design'],
    typeSpeed: 50,
    loop:true,
    backspeed: 30,
});
var typed = new Typed('#typed-footer-cargos', {
    strings: ['Editora de Vídeo', 'Criadora de Conteúdo', 'Graduada em Design'],
    cursorChar:'▶',
    typeSpeed: 50,
    loop:true,
    backspeed: 30,
});






// teste de api do youtube
// Guarda instâncias dos players do YouTube
const ytPlayers = {};
const ytReady = {}; // controla quais players já estão prontos

// Chamada automática da API YouTube
function onYouTubeIframeAPIReady() {
  document.querySelectorAll('.swiper-slide iframe').forEach((iframe, i) => {
    const id = 'yt-' + i;
    iframe.id = id;
    ytPlayers[id] = new YT.Player(id, {
      events: {
        'onReady': (event) => {
          event.target.mute(); // garante mudo
          ytReady[id] = true; // marca como pronto
        }
      }
    });
  });
}

// Função para pausar/tocar o vídeo ativo
function handleActiveVideo(swiper) {
  const activeSlide = swiper.el.querySelector('.swiper-slide-active');
  if (!activeSlide) return;

  // Pausa todos os YouTubes
  Object.entries(ytPlayers).forEach(([id, player]) => {
    try { player.pauseVideo(); } catch (e) {}
  });

  // Pausa todos os vídeos locais
  document.querySelectorAll('.swiper-slide video').forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  // Toca o vídeo do meio
  const iframe = activeSlide.querySelector('iframe');
  const video = activeSlide.querySelector('video');

  if (iframe && ytReady[iframe.id]) {
    try { ytPlayers[iframe.id].playVideo(); } catch (e) {}
  } else if (video) {
    try {
      video.currentTime = 0;
      video.muted = true;
      video.play();
    } catch (e) {}
  }
}

// swiper videos
var swiper = new Swiper(".mySwiper", {
  keyboard: { enabled: true },
  slidesPerView: 1,
  initialSlide: 0,
  speed: 700,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 10,
    slideShadows: true,
    stretch: 170,
  },
  loop: true,
  centeredSlides: true,
  pagination: { el: ".swiper-pagination", dynamicBullets: true },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: { slidesPerView: 1, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 40 },
  },
  on: {
    init() { setTimeout(() => handleActiveVideo(this), 1000); }, // espera um pouco
    slideChangeTransitionEnd() { handleActiveVideo(this); },
  }
});

// // Videos dão play quando on focous
// function handleActiveVideo(swiper) {
// // obtém o slide DOM que está ativo agora
// const activeSlide = swiper.slides[swiper.activeIndex];
// if (!activeSlide) return;

// // pausa e reseta TODOS os vídeos (inclui clones)
// document.querySelectorAll('.swiper-slide video').forEach(video => {
//     // se o vídeo estiver dentro do slide ativo, ignore por enquanto
//     if (video.closest('.swiper-slide') === activeSlide) return;
//     try {
//     video.pause();
//     video.currentTime = 0;
//     } catch (e) {
//     // alguns navegadores podem bloquear currentTime antes de carregar; ignore
//     console.warn('reset video error', e);
//     }
// });

// // toca o vídeo do slide ativo (garanta que o elemento existe)
// const activeVideo = activeSlide.querySelector('video');
// if (activeVideo) {
//     // garante autoplay sem som
//     activeVideo.muted = true;
//     // opcional: reiniciar do 0 (se quiser começar sempre do 0)
//     try { activeVideo.currentTime = 0; } catch (e) {}
//     activeVideo.play().catch(err => {
//     // autoplay pode ser bloqueado — log para debug
//     console.warn('video play blocked or failed', err);
//     });
// }
// }

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
            whatsappHeader.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            whatsappHeader.classList.remove('active');
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