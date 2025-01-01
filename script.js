document.addEventListener("DOMContentLoaded", function () {
    // Modal de bienvenida
    const welcomeModal = new bootstrap.Modal(document.getElementById("welcomeModal"));
    setTimeout(() => {
        welcomeModal.show();
    }, 1000);

    // Efecto en las fotos del álbum
    const albumPhotos = document.querySelectorAll(".album-photo");
    albumPhotos.forEach((photo) => {
        photo.addEventListener("mouseenter", () => {
            photo.classList.add("hovered");
        });
        photo.addEventListener("mouseleave", () => {
            photo.classList.remove("hovered");
        });
    });

    // Configuración del carousel
    const carouselElement = document.querySelector("#photoCarousel");
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000, // Cambia cada 5 segundos
        pause: false      // No se detiene al hacer hover
    });

    // Frases bonitas asociadas a las fotos
    const phrases = [
        "Eres la razón por la que sonrío cada día.",
        "Tu amor llena mi vida de colores hermosos.",
        "Cada momento contigo es un regalo invaluable.",
        "Eres mi sol en los días nublados.",
        "No hay sueño más dulce que estar a tu lado.",
        "Contigo aprendí que el amor es la fuerza más poderosa.",
        "Eres mi estrella guía, incluso en las noches más oscuras.",
        "Cada mirada tuya ilumina mi alma.",
        "El tiempo contigo siempre pasa demasiado rápido.",
        "Tu risa es la melodía más hermosa que conozco.",
        "Juntos podemos conquistar cualquier obstáculo.",
        "El mundo es más bello porque tú estás en él.",
        "Tu amor es mi refugio en las tormentas de la vida.",
        "Eres mi motivo favorito para creer en los milagros.",
        "Tu sonrisa es el idioma universal de la felicidad.",
        "Cuando estoy contigo, el tiempo se detiene y todo es perfecto.",
        "Eres la razón por la que mi corazón late con alegría.",
        "Amar y ser amado por ti es el mayor privilegio de mi vida.",
        "Eres mi poema favorito escrito por la vida.",
        "Cada día contigo es un capítulo lleno de felicidad.",
        "Eres el inicio y el final de mis sueños más dulces.",
        "Eres la inspiración detrás de cada cosa hermosa que veo.",
        "En tus ojos encuentro un universo lleno de amor.",
        "Agradezco al destino por cruzar nuestros caminos.",
        "Tenerte en mi vida es la definición de suerte.",
        "Tu amor me hace sentir que todo es posible.",
        "Eres mi hogar, mi paz y mi felicidad.",
        "Cada palabra tuya es un poema que atesoro.",
        "Gracias por convertir cada día ordinario en algo extraordinario.",
        "Eres el tesoro que nunca dejaré de cuidar.",
        "El amor que compartimos me hace invencible.",
        "Eres mi flor favorita en el jardín de la vida.",
        "La vida contigo sabe más dulce que la miel.",
        "Tu cariño es el fuego que calienta mi corazón.",
        "Eres la melodía que da sentido a mi canción.",
        "Tu abrazo es mi lugar seguro en el mundo.",
        "Cada paso contigo es un viaje lleno de alegría.",
        "Eres mi arcoíris después de cada tormenta.",
        "Tu bondad ilumina el mundo de quienes te rodean.",
        "Contigo aprendí que el amor verdadero existe.",
        "Eres mi para siempre en un mundo lleno de momentos fugaces.",
        "Tu amor es el tesoro más grande que podría desear.",
        "Gracias por ser el mejor capítulo de mi historia.",
        "Eres mi hoy, mi mañana y mi eternidad.",
        "Amarte es el privilegio más grande de mi vida.",
        "Eres la prueba de que los ángeles caminan entre nosotros.",
        "Cada palabra tuya es un bálsamo para mi corazón.",
        "En tus brazos encontré mi paraíso personal.",
        "Eres mi amanecer favorito, lleno de esperanza y belleza.",
        "Gracias por ser la razón de mi felicidad infinita.",
        "Tu presencia en mi vida es el mayor regalo del universo.",
        "Eres la chispa que enciende la llama de mi alma.",
        "Tu amor es la brújula que me guía hacia la felicidad.",
        "Cada vez que pienso en ti, sonrío sin razón aparente.",
        "Eres la joya más preciosa de mi vida.",
        "Tu amor es mi refugio y mi fortaleza.",
        "Eres mi más hermosa casualidad.",
        "En cada foto contigo veo reflejada mi felicidad.",
        "Eres el viento que impulsa mis sueños más altos.",
        "Tu luz interior brilla más que cualquier estrella.",
        "Amarte es tan fácil como respirar.",
        "Eres la razón por la que mi vida tiene sentido.",
        "Cada día contigo es un nuevo comienzo lleno de amor.",
        "Tu presencia hace que mi mundo sea más brillante.",
        "Eres el motivo de mis más dulces pensamientos.",
        "Tu amor me da fuerzas para ser mejor cada día.",
        "Eres el regalo más hermoso que me ha dado la vida.",
        "No hay un rincón de mi corazón donde no estés.",
        "Eres la inspiración que mueve mi vida.",
        "El amor que compartimos es mi mayor tesoro.",
        "Eres mi motivo favorito para creer en la magia.",
        "Tu amor es la mejor decisión que tomé.",
        "Eres mi poema eterno en este libro llamado vida.",
        "Tu risa ilumina hasta el día más gris.",
        "Cada segundo contigo es una bendición.",
        "Eres el sueño del que nunca quiero despertar.",
        "Amarte es mi mayor logro.",
        "Tu corazón es el lugar donde siempre quiero estar.",
        "Eres el faro que guía mis pasos hacia la felicidad.",
        "Tu voz es la música que da vida a mi alma.",
        "Eres la reina de mi mundo.",
        "Tu amor es mi constante en un mundo lleno de cambios.",
        "Gracias por ser el mejor regalo que la vida me dio.",
        "Eres la razón por la que creo en los cuentos de hadas.",
        "Tu amor es el pincel que colorea mi mundo.",
        "Eres mi estrella fugaz, mi deseo cumplido.",
        "Cada sonrisa tuya es un recordatorio de lo afortunado que soy.",
        "Eres mi luz en la oscuridad, mi sol en la tormenta.",
        "Tu amor es mi mayor bendición.",
        "Eres el único idioma que mi corazón entiende.",
        "Tu amor es la melodía que alegra mis días.",
        "Contigo, el amor es una aventura infinita.",
        "Eres mi siempre, mi todo, mi vida."
    ];
    const phraseElement = document.getElementById("carouselPhrase"); // Elemento donde mostrar las frases
    let currentPhraseIndex = 0;

    function updatePhrase() {
        phraseElement.textContent = phrases[currentPhraseIndex];
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    carouselElement.addEventListener("slide.bs.carousel", updatePhrase); // Cambiar frase con la foto

    if (phraseElement) {
        carouselElement.addEventListener("slide.bs.carousel", updatePhrase);
    }


    // Reproducción de música de fondo
    const music = document.getElementById("backgroundMusic");
    const playPauseButton = document.getElementById("playPauseButton");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const repeatButton = document.getElementById("repeatButton");
    const shuffleButton = document.getElementById("shuffleButton");
    const volumeControl = document.getElementById("volumeControl");

    volumeControl.addEventListener("input", () => {
        music.volume = volumeControl.value; // Ajusta el volumen
    });

    // Lista de canciones
    const songs = [
        "audio/cancion1.mp3",
        "audio/cancion2.mp3",
        "audio/cancion3.mp3",
        "audio/cancion4.mp3",
        "audio/cancion5.mp3"
    ];

    let currentSongIndex = 0;
    let isPlaying = false;
    let isRepeating = false;
    let isShuffling = false;

    function playSong(index) {
        music.src = songs[index];
        music.play();
        songTitle.textContent = "Reproduciendo: Canción " + (index + 1); // Actualizar el título
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }

    function togglePlayPause() {
        if (isPlaying) {
            music.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            music.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    }

    function nextTrack() {
        if (isShuffling) {
            currentSongIndex = getRandomSongIndex();
        } else {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
        }
        playSong(currentSongIndex);
    }

    function prevTrack() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(currentSongIndex);
    }

    function toggleRepeat() {
        isRepeating = !isRepeating;
        repeatButton.classList.toggle("active", isRepeating);
        console.log("Repetición " + (isRepeating ? "activada" : "desactivada"));
    }

    function toggleShuffle() {
        isShuffling = !isShuffling;
        shuffleButton.classList.toggle("active", isShuffling);
        console.log("Aleatorio " + (isShuffling ? "activado" : "desactivada"));
    }

    function getRandomSongIndex() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        return randomIndex;
    }

    music.addEventListener("ended", () => {
        if (isRepeating) {
            playSong(currentSongIndex);
        } else if (isShuffling) {
            currentSongIndex = getRandomSongIndex();
            playSong(currentSongIndex);
        } else {
            nextTrack();
        }
    });

    playPauseButton.addEventListener("click", togglePlayPause);
    nextButton.addEventListener("click", nextTrack);
    prevButton.addEventListener("click", prevTrack);
    repeatButton.addEventListener("click", toggleRepeat);
    shuffleButton.addEventListener("click", toggleShuffle);

    // Agregar imágenes aleatorias al carrusel con atributos alt
    const carouselInner = document.querySelector("#photoCarousel .carousel-inner");
    const imageNumbers = Array.from({ length: 73 }, (_, i) => i + 1);


    function checkImageExists(url, callback) {
        const img = new Image();
        img.onload = () => callback(true);
        img.onerror = () => callback(false);
        img.src = url;
    }

    imageNumbers.forEach((imageIndex, i) => {
        const url = `img/photo${imageIndex}.jpg`; //AQUÍ TAMBIÉN PUEDO MODIFICAR CREO XD
        checkImageExists(url, (exists) => {
            if (exists) {
                // Lógica para agregar la imagen al carrusel
            }
        });
    });

    imageNumbers.forEach((imageIndex, i) => {
        const div = document.createElement("div");
        div.classList.add("carousel-item");

        if (i === 0) {
            div.classList.add("active"); // La primera imagen será la activa
        }

        const img = document.createElement("img");
        img.src = `./img/photo${imageIndex}.jpg`; // Ruta de las imágenes
        img.alt = `Imagen destacada ${imageIndex}`; // Descripción accesible
        img.loading = "lazy"; // Activar lazy loading
        img.classList.add("d-block", "w-100", "img-fluid");

        div.appendChild(img);
        carouselInner.appendChild(div);
    });

    // Actualizar la primera frase al cargar la página
    updatePhrase();


    // ----------------------------------------------
    //  Código para el botón "Ver Carta"
    // ----------------------------------------------

    const verCartaBtn = document.getElementById('verCartaBtn');
    const cartaContent = document.getElementById('cartaContent');

    verCartaBtn.addEventListener('click', () => {
        if (cartaContent.style.display === 'none' || cartaContent.style.display === '') {
            cartaContent.style.display = 'block'; // Muestra el contenido
            verCartaBtn.textContent = 'Ocultar Carta'; // Cambia el texto del botón
        } else {
            cartaContent.style.display = 'none'; // Oculta el contenido
            verCartaBtn.textContent = 'Ver Carta'; // Cambia el texto del botón
        }
    });
});
