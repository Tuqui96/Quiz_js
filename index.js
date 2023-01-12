let pregunta1 = {
    titulo: "🐼👊💥",
    respuesta1: "Panda en acción",
    respuesta2: "Kung-fu Panda",
    respuesta3: "Panda peleón",
    correcta: 2,
};

let pregunta2 = {
    titulo: "🔎🐠",
    respuesta1: "Pez loco",
    respuesta2: "Tiburón",
    respuesta3: "Buscando a Nemo",
    correcta: 3,
};

let pregunta3 = {
    titulo: "🚗",
    respuesta1: "Cars",
    respuesta2: "Fast and fast",
    respuesta3: "Mustang",
    correcta: 1,
};

let preguntas = [pregunta1, pregunta2, pregunta3]
let preguntaActual = 0;
let isBanderaRoja = false;

let puntuacion = 0;

document.getElementById("totales").innerHTML = "Pregunta " + (preguntaActual + 1) + " de " + preguntas.length

document.getElementById("titulo").innerHTML = preguntas[preguntaActual].titulo;

document.getElementById("btn1").innerHTML = preguntas[preguntaActual].respuesta1;
document.getElementById("btn2").innerHTML = preguntas[preguntaActual].respuesta2;
document.getElementById("btn3").innerHTML = preguntas[preguntaActual].respuesta3;



function checkRespuesta(respuestaNum) {
    if (isBanderaRoja == false) {
        // console.log("Ha pulsado la respuesta " + respuestaNum);
        /*console.log(
            "La respuesta correcta es: " + preguntas[preguntaActual].correcta
        );*/
        if (respuestaNum == preguntas[preguntaActual].correcta) {
            console.warn("La respuesta correcta");
            puntuacion = puntuacion + 1;
            let idBtn = "btn" + respuestaNum;
            document.getElementById(idBtn).className = "btn btn-success w-100 mb-2"
        } else {
            console.error("La respuesta es incorrecta");
            //No está mal pero se puede mejorar
            /*document.getElementById("btn1").style.background = "red";
            document.getElementById("btn3").style.background = "red";*/
            let idBtn = "btn" + respuestaNum;
            document.getElementById(idBtn).className = "btn btn-danger w-100 mb-2"
        }
        isBanderaRoja = true;
    }
}

function nextPregunta() {
    preguntaActual += 1;
    isBanderaRoja = false;
    //console.log(preguntaActual);

    if (preguntaActual >= 3) {
        console.log("He finalizado el Quiz");
        document.getElementById("cajaFin").className = "container"
        document.getElementById("cajaQuiz").className = "container d-none"

        document.getElementById("result").innerHTML = "Respuestas correctas: " + puntuacion;

    } else {
        // Poner la pregunta actual 1 de 3
        document.getElementById("totales").innerHTML = "Pregunta " + (preguntaActual + 1) + " de " + preguntas.length

        //Establecer contenido de la pregunta, título y botones.
        document.getElementById("titulo").innerHTML = preguntas[preguntaActual].titulo;
        document.getElementById("btn1").innerHTML = preguntas[preguntaActual].respuesta1;
        document.getElementById("btn2").innerHTML = preguntas[preguntaActual].respuesta2;
        document.getElementById("btn3").innerHTML = preguntas[preguntaActual].respuesta3;

        //Resetear color de botones.
        document.getElementById("btn1").className = "btn btn-light w-100 mb-2"
        document.getElementById("btn2").className = "btn btn-light w-100 mb-2"
        document.getElementById("btn3").className = "btn btn-light w-100 mb-2"
    }
}


