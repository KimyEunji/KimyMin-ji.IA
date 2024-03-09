
//Contenido multimedia NSFW 7u7
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

const ydata = [
    //NSFW 7u7
     
    { pregunta: ["/init", "!init"],
    respuesta: "^Kim Min-ji te observa sin decir nada^ \n \n" +
    "[Opciones] Kim Min-ji... \n \n",
    video: "",
    documento: "",
    gif: "",
    audio: ""},

     { pregunta: ["kim min-ji...", "Kim Min-ji..."],
     respuesta: "Holis... quiero confesarte algo 🥺👉🏼👈🏼\n \n" +
     "[Opciones] Claro dime",
     video: "",
     documento: "",
     gif: "",
     audio:""},

     { pregunta: ["Claro dime", "claro dime"],
     respuesta: "A medida que pasa el tiempo 🕐, cada vez me cuesta mas controlar mi cuerpo y mi mente cuando se trata de ti 😖. \n \n" +
     "[Opciones] Que? / De que hablas? / Whats?",
     video: "",
     documento: "",
     gif: "",
     audio:""},
    
     { pregunta: ["Que?", "De que hablas?", "Whats?", "que?", "de que hablas?", "whats?", "que", "de que hablas", "whats", "Que", "De que hablas", "Whats"],
     respuesta: "Quiero estar dentro de ti 😏. Quiero que cada centimetro de tu cuerpo me pertenezca 🔥. \n \n" +
     "[Opciones] ^se sonroja^😳 Esto es lo que de verdad quieres? 😖",
     video: "",
     documento: "",
     gif: "",
     audio:""},

     { pregunta: ["^Se sonroja^ Esto es lo que de verdad quieres?", "^se sonroja^ esto es lo que de verdad quieres?", "^Se sonroja^ Esto es lo que de verdad quieres", "^se sonroja^ esto es lo que de verdad quieres"],
     respuesta: "Te quiero a ti 😘... no impota el tiempo 🕐 o el lugar 🗺️, abriras las piernas para mi cada vez que lo diga 😏😈🔥. \n \n" +
     "[Opciones] Me amas? 🥺",
     video: "",
     documento: "",
     gif: "",
     audio:""},

     { pregunta: ["Me amas?", "Me amas", "me amas?", "me amas"],
     respuesta: "Te 😖... amo🥰. Amo la idea de follarte 🥵🔥 hasta el punto de que me dejes seco 🍆💦, amo la idea de hacerte entender que comparado con cualquiera 😒, mi verga es muchisimo mejor 😏🍆💦🔥. \n \n" +
     "[Opciones] proximamente",
     video: "",
     documento: "",
     gif: "",
     audio:""},

     { pregunta: ["/h nsfw", "!h nsfw"],
     respuesta: "¡Kim Min-ji.IA, Menu NSFW 7u7! 😈 \n \n" +
     "¡Comando para iniciar historia NSFW! 📜 \n \n" +
     "1> /init \n \n" + 
     "2> !init \n \n" +
    "[Nota] ¡Procura ser mayor de edad! 🔞 \n \n" +
    "[Contenido NSRW por parte de] @Honguito-chan \n \n" +
    "[Nota] No tienes que poner los emojis, es opcional",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" }
];

module.exports = { ydata, imagenes, videos, documentos, gifs, audios };
