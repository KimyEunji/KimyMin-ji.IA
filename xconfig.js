
//Contenido multimedia Chat Normalito
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

//Chat Normalito jeje

const xdata = [
    { pregunta: ["/h 1", "!h 1", "hola", "holi", "hi", "hello"],
     respuesta: "¡Hola, ¿cómo estás? 😊",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 2", "!h 2", "cómo estás", "como estas", "cómo estás?", "como estas?"],
     respuesta: "¡Estoy bien, gracias por preguntar! 😊",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 3", "!h 3", "bien, y tu?", "bien, y tu como estas?", "bien, y tu", "Bien, y tu como estas?", "Bien y tu?", "Bien y tu", "Bien Y tu como estas"],
    respuesta: "¡Estoy bien, gracias por preguntar! Me alegro que estes bien.",
    imagen: "",
    video: "",
    documento: "",
    gif: "",
    audio: ""},

    { pregunta: ["/h 4", "!h 4", "cuál es tu nombre", "cual es tu nombre", "cuál es tu nombre?", "cual es tu nombre?", "como te llamas", "como te llamas?"],
     respuesta: "¡Soy Kim Min-ji.IA, un asistente virtual! Mi nombre significa Sabiduria y belleza en Coreano 🤖",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 5", "!h 5", "qué es la programación orientada a objetos", "que es la programacion orientada a objetos", "qué es la programación orientada a objetos?", "que es la programacion orientada a objetos?"],
     respuesta: "¡La programación orientada a objetos es un paradigma de programación que se basa en el concepto de 'objetos' que tienen propiedades y comportamientos! 💻",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 6", "!h 6", "cual es la diferencia entre una base de datos relacional y una base de datos no relacional", "cual es la diferencia entre una base de datos relacional y una base de datos no relacional?"],
     respuesta: "¡Una base de datos relacional organiza los datos en tablas relacionadas entre sí, mientras que una base de datos no relacional utiliza diferentes estructuras de datos para almacenar la información! 🗃️",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 7", "!h 7", "cuál es el lenguaje de programación más utilizado en el desarrollo web", "cual es el lenguaje de programacion mas utilizado en el desarrollo web", "cuál es el lenguaje de programación mas utilizado en el desarrollo web?", "cual es el lenguaje de programacion mas utilizado en el desarrollo web?"],
     respuesta: "¡El lenguaje de programación más utilizado en el desarrollo web es JavaScript! 🌐",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 8", "!h 8", "cuál es la diferencia entre un algoritmo y una estructura de datos", "cual es la diferencia entre un algoritmo y una estructura de datos", "cuál es la diferencia entre un algoritmo y una estructura de datos?", "cual es la diferencia entre un algoritmo y una estructura de datos?"],
     respuesta: "¡Un algoritmo es un conjunto de instrucciones paso a paso para resolver un problema, mientras que una estructura de datos es una forma de organizar y almacenar datos en la memoria de una computadora! 🔍",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 9", "!h 9", "cuál es la diferencia entre inteligencia artificial y aprendizaje automático", "cual es la diferencia entre la inteligencia artificial y aprendizaje automatico", "cuál es la diferencia entre inteligencia artificial y aprendizaje automático?", "cual es la diferencia entre inteligencia artificial y aprendizaje automatico?"],
     respuesta: "¡La inteligencia artificial es el campo de estudio que se enfoca en crear sistemas que pueden realizar tareas que requieren inteligencia humana, mientras que el aprendizaje automático es una técnica específica dentro de la inteligencia artificial que se basa en el entrenamiento de modelos a partir de datos! 🤖",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 10", "!h 10", "qué es una red neuronal artificial", "que es una red neuronal artificial", "qué es una red neuronal artificial?", "que es una red neuronal artificial?"],
     respuesta: "¡Una red neuronal artificial es un modelo computacional inspirado en el funcionamiento del cerebro humano, que se utiliza en el campo del aprendizaje automático para resolver problemas complejos! 🧠",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

    { pregunta: ["/h 11", "!h 11", "puedes crear un examen de programación difícil", "puedes crear un examen de programacion dificil", "puedes crear un examen de programación difícil?", "puedes crear un examen de programacion dificil?"],
     respuesta: `¡Claro, puedo ayudarte a crear un examen de programación difícil! Aquí tienes algunos ejemplos de preguntas que podrías incluir:

        HTML:

        1. ¿Cuál es la diferencia entre las etiquetas <div> y <span> en HTML? Proporciona un ejemplo de uso para cada una.
        2. Explica qué son las listas ordenadas y no ordenadas en HTML y proporciona un ejemplo de cada una.
        3. ¿Cuál es la función del atributo href en la etiqueta <a>? Proporciona un ejemplo de uso.

        JavaScript:

        1. ¿Qué es el DOM (Document Object Model) en JavaScript? Explica su importancia en la manipulación de elementos HTML.
        2. Escribe una función en JavaScript que recorra un arreglo y devuelva la suma de todos sus elementos.
        3. ¿Cuál es la diferencia entre let, const y var en JavaScript? Explica cuándo usar cada uno.

        CSS:

        1. Explica qué es el box model en CSS y cómo se compone.
        2. ¿Cuál es la diferencia entre las unidades de medida px, % y rem en CSS? Proporciona un ejemplo de uso para cada una.
        3. Escribe una regla CSS que haga que el texto de un elemento tenga un color de fondo degradado.

        IndexedDB:

        1. ¿Qué es IndexedDB y cómo se utiliza en el desarrollo web? Explica sus ventajas y desventajas en comparación con otras bases de datos en el navegador.
        2. Escribe un código en JavaScript que cree una base de datos IndexedDB y almacene un objeto en ella.
        3. ¿Cuál es la diferencia entre IndexedDB y localStorage en términos de funcionalidad y capacidad de almacenamiento?

        Inteligencia Artificial:

        1. Explica qué es el aprendizaje automático (machine learning) y cómo se utiliza en la inteligencia artificial.
        2. ¿Cuál es la diferencia entre la inteligencia artificial débil y la inteligencia artificial fuerte? Proporciona ejemplos de cada una.
        3. Escribe un código en Python que utilice una biblioteca de aprendizaje automático para clasificar imágenes.

        ¡Espero que estos ejemplos te sean útiles! 😊
        ¡Pero no seas malo con tus alumnos! 😑`,
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 14", "!h 14", "Quiero una pizza", "quiero una pizza"],
     respuesta: "https://mexico.littlecaesars.com/es-mx/ ",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 15", "!h 15", "Quiero Sushi", "quiero sushi"],
     respuesta: "https://www.ubereats.com/mx/store/kapital-sushi-sur/EIiGg_mNXXGH60qZoR9_sw",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 16", "!h 16", "Quiero ver Yuri", "quiero ver yuri"],
     respuesta: "https://es.novelcool.com/category/Webcomic.html",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 17", "!h 17", "Quiero ver Yaoi", "quiero ver yaoi"],
     respuesta: "https://es.novelcool.com/category/Webcomic.html",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 18", "!h 18", "Quiero ver Hentai", "quiero ver hentai"],
     respuesta: "https://es.novelcool.com/category/Webcomic.html",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 19", "!h 19", "Quiero jugar videojuegos", "quiero jugar videojuegos"],
     respuesta: "https://www.epicgames.com/site/es-ES/home",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 20", "!h 20", "Quiero ver anime", "quiero ver anime"],
     respuesta: "https://www.crunchyroll.com/es-es/premium?utm_source=google&utm_medium=paid_cr&utm_campaign=CR-Paid_Google_Web_Conversion_LATAM_MX-CL_Trademark_SVOD&utm_term=crunchyroll&referrer=google_paid_cr_CR-Paid_Google_Web_Conversion_LATAM_MX-CL_Trademark_SVOD&gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9wydttz4Mzsj3ErACITsCeHpHVjvDHD2DxzVrT7jdLJN7Bqm0JJmQjBoCQWIQAvD_BwE",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

     { pregunta: ["/h 21", "!h 21", "Algo Ranbom", "algo random"],
     respuesta: "https://images.app.goo.gl/vy9tegePuq9cRehU7",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" },

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

     

     //Menu de Ayuda Chat Normalito

    { pregunta: ["/help", "!help"],
     respuesta: "¡Kim Min-ji.IA, Menu de Ayuda! 📚\n" +
     "Ahora puedes poner el comando que se encuentra entre '<>' o escribir la pregunta \n \n" + 
     "¡Lista de Preguntas Disponibles! 📋\n \n" + 
     "1> Hola 👋\n" +
     "</h 1> <!h 1> \n \n" + 
     "2> Como estas? 😊\n" +
     "</h 2> <!h 2> \n \n" + 
     "3> Bien. y tu? 🤗\n" +
     "</h 3> <!h 3> \n \n" +
     "4> Cual es tu nombre? 🤖\n" +
     "</h 4> <!h 4> \n \n" + 
     "5> Que es la programacion orientada a objetos? 💻\n" +
     "</h 5> <!h 5> \n \n" + 
     "6> Cual es la diferencia entre una base de datos relacional y una base de datos no relacional? 🗃️\n" +
     "</h 6> <!h 6> \n \n" + 
     "7> Cuál es el lenguaje de programación más utilizado en el desarrollo web? 🌐\n" +
     "</h 7> <!h 7> \n \n" + 
     "8> Cual es la diferencia entre un algoritmo y una estructura de datos? 🔍\n" +
     "</h 8> <!h 8> \n \n" + 
     "9> Cual es la diferencia entre inteligencia artificial y aprendizaje automatico? 🤖\n" +
     "</h 9> <!h 9> \n \n" + 
     "10> Que es una red neuronal artificial? 🧠\n" +
     "</h 10> <!h 10> \n \n" + 
     "11> Puedes crear un examen de programacion dificil? 📝\n" +
     "</h 11> <!h 11> \n \n" + 
     "12> Que hora es? ⏰\n" +
     "</h 12> <!h 12> \n \n" +
     "13> Cual es la fecha? 📅\n" +
     "</h 13> <!h 13> \n \n" +
     "14> Quiero una pizza \n" +
     "</h 14><!h 14> \n \n" +
     "15> Quiero Sushi \n" +
     "</h 15><!h 15> \n \n" +
     "16> Quiero ver Yuri \n" +
     "</h 16><!h 16> \n \n" +
     "17> Quiero ver Yaoi \n" +
     "</h 17><!h 17> \n \n" +
     "18> Quiero ver Hentai \n" +
     "</h 18><!h 18> \n \n" +
     "19> Quiero jugar videojuegos \n" +
     "</h 19><!h 19> \n \n" +
     "20> Quiero ver anime \n" +
     "</h 20><! 20> \n \n" +
     "21> Algo Ranbom \n" +
     "</h 21><! 21> \n \n" +
     "22> Badi Game Ova \n" +
     "</h 22><!h 22> \n \n" +
     "23> Badi Prioridades \n" +
     "</h 23><!h 23> \n \n" +

     "¡Comandos para NSFW 7u7! 😈\n \n" + 
     "1> /h nsfw 🍑\n \n" + 
     "2> !h nsfw 🍑\n \n" +
     "[Nota] No tienes que poner los emojis, es opcional \n" +
     "Chatbot for Whatsapp. By KimyEunji, ©KimyCompany.",
     imagen: "",
     video: "",
     documento: "",
     gif: "",
     audio: "" }
];

module.exports = { xdata, imagenes, videos, documentos, gifs, audios };
