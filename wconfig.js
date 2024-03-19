//Contenido multimedia Chat de Musica

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

//Chat Normalito de Musica

const wdata = [
    { pregunta: ["/h 22", "!h 22", "Badi Game Ova", "badi game ova"],
     respuesta: "https://www.youtube.com/watch?v=Bi6w8gmDXYM&ab_channel=AstromussMusic",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 23", "!h 23", "Badi Prioridades", "badi prioriedades"],
     respuesta: "https://www.youtube.com/watch?v=bRPCBtVaQO0&ab_channel=AstromussMusic",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h music", "!h music"],
     respuesta: "¡Kim Min-ji.IA, Menu de Musica! 🎶 \n \n" +
     "1> Badi Prioridades 🎶 \n \n" +
     "" +
     "2> Badi Game Ova 🎶 \n \n" +
     "" +
    "[Nota] No tienes que poner los emojis, es opcional",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },
     
];

module.exports = { wdata, imagenes, videos, documentos, gifs, audios };