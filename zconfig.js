const moment = require('moment-timezone');

//Contenido multimedia Hora y Fecha
const imagenes = {
    gato: 'https://ejemplo.com/gato.jpg',
    perro: 'https://ejemplo.com/perro.jpg',
    paisaje: 'https://ejemplo.com/paisaje.jpg',
    avatar: 'https://ejemplo.com/avatar.jpg'
};

const videos = {
    tutorial: 'https://ejemplo.com/tutorial.mp4',
    demo: 'https://ejemplo.com/demo.mp4',
    presentacion: 'https://ejemplo.com/presentacion.mp4'
};

const documentos = {
    pdf: 'https://ejemplo.com/documento.pdf',
    texto: 'https://ejemplo.com/texto.docx',
    presentacion: 'https://ejemplo.com/presentacion.pptx'
};

const gifs = {
    divertido: 'https://ejemplo.com/divertido.gif',
    gracioso: 'https://ejemplo.com/gracioso.gif',
    sorprendido: 'https://ejemplo.com/sorprendido.gif'
};

const audios = {
    cancion: 'https://ejemplo.com/cancion.mp3',
    efecto: 'https://ejemplo.com/efecto_sonido.mp3',
    mensaje: 'https://ejemplo.com/mensaje_audio.mp3'
};

const zdata = [
        //Fecha y Hora actual

        { pregunta: ["qué fecha es", "cuál es la fecha", "que fecha es", "cual es la fecha", "qué fecha es?", "que fecha es?", "cuál es la fecha?", "cual es la fecha?"],
        respuesta: obtenerFecha(),
        imagen: "",
        video: "",
        documento: "",
        gif: "",
        audio: "" },
   
       { pregunta: ["qué hora es", "que hora es", "qué hora es?", "que hora es?"],
        respuesta: obtenerHora(),
        imagen: "",
        video: "",
        documento: "",
        gif: "",
        audio: "" }
];

// Función para obtener la fecha actual
function obtenerFecha() {
    const fecha = moment().tz('America/Mexico_City').format('DD/MM/YYYY');
    return `¡Hoy es ${fecha}! 📅`;
}

// Función para obtener la hora actual en formato 12 horas con indicación de AM o PM y emojis de amanecer o anochecer
function obtenerHora() {
    const hora = moment().tz('America/Mexico_City').format('HH:mm:ss');
    const amanecerAnochecer = moment().tz('America/Mexico_City').format('A') === 'AM' ? '🌅' : '🌃';
    return `¡La hora actual es ${hora}${amanecerAnochecer}! ⏰`;
}

module.exports = { zdata, imagenes, videos, documentos, gifs, audios };