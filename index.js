const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const moment = require('moment-timezone');
const figlet = require('figlet');
const emojic = require('emojic');

const SESSION_FILE_PATH = "./session.json";
const country_code = "52";
const bot_number = "4732301960";

// Importar el array de datos
const { xdata } = require('./xconfig');
const { ydata } = require('./yconfig');
const { zdata } = require('./zconfig');

// Inicialización del cliente de WhatsApp
const client = new Client();

// Función para mostrar el texto con estilo
function printStyledText(text, callback) {
    figlet(text, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}

// Función para imprimir mensajes con retraso
function printWithDelay(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Diseño de bienvenida
printStyledText(`${emojic.eyes} Kim Min-ji.IA`, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// Mostrar mensaje de bienvenida con retraso
printWithDelay(`${emojic.wave} Bienvenido al cliente de Kim Min-ji.IA. WhatsApp-Bot\n`, 500);

client.on('qr', qr => {
    // Mostrar mensaje de espera para escanear el código QR
    printWithDelay(`${emojic.hourglass} Esperando código QR para autenticación...\n`, 500)
        .then(() => {
            // Generar código QR con retraso
            setTimeout(() => {
                qrcode.generate(qr, { small: true });
                console.log(`${emojic.phone} Escanea el QR desde WhatsApp`);
            }, 2000);
        });
});

client.on('ready', () => {
    console.log(`${emojic.whiteCheckMark} Cliente autenticado y listo para usar`);
});

client.on('authenticated', session => {
    console.log(`${emojic.key} Autenticado correctamente`);
    if (session) {
        fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(session));
    } else {
        console.error('La sesión es undefined');
    }
});

client.on('auth_failure', msg => {
    console.error(`${emojic.x} Hubo un fallo en la autenticación:`, msg);
});

client.on('message', async msg => {
    try {
        if (!msg.from.includes(country_code + bot_number)) {
            let respuesta = await buscarRespuestaEnCodigo(msg.body.toLowerCase());
            const chatId = msg.from;
            if (respuesta) {
                await client.sendMessage(chatId, respuesta);
                console.log(`${emojic.outboxTray} Respuesta enviada:`, respuesta);
            }
        }
    } catch (error) {
        console.error(`${emojic.x} Error al procesar el mensaje:`, error.message);
    }
});

client.on('disconnected', (reason) => {
    console.log(`${emojic.x} El cliente se ha desconectado:`, reason);
    client.destroy();
    process.exit(); // Cerrar la aplicación al finalizar la sesión
});

// Función para buscar en la base de datos
function buscarEnBaseDatos(pregunta, datos) {
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].pregunta.includes(pregunta)) {
      return datos[i].respuesta;
    }
  }
  return null;
} 

// Buscar respuestas en las bases de datos
async function buscarRespuestaEnCodigo(pregunta) {
  if (buscarEnBaseDatos(pregunta, xdata)) {
    return buscarEnBaseDatos(pregunta, xdata);
  } else if (buscarEnBaseDatos(pregunta, ydata)) {
    return buscarEnBaseDatos(pregunta, ydata);
  } else if (buscarEnBaseDatos(pregunta, zdata)) {
    return buscarEnBaseDatos(pregunta, zdata);
  } else {
    return null;
  }
}

// Iniciar la sesión del cliente de WhatsApp
if (fs.existsSync(SESSION_FILE_PATH)) {
    const sessionData = require(SESSION_FILE_PATH);
    client.initialize(sessionData);
} else {
    client.initialize();
}

// Diseño de despedida
process.on('exit', () => {
    printStyledText(`${emojic.wave} ¡Hasta luego!`, function(err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
        }
    });
});
