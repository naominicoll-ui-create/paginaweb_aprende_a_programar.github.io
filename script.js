function verificarRespuestas() {
    let puntaje = 0;

    // Pregunta 1
    let respuesta1 = document.querySelector('input[name="q1"]:checked');
    if (respuesta1 && respuesta1.value === "while") {
        puntaje++;
    }

    // Pregunta 2
    let respuesta2 = document.querySelector('input[name="q2"]:checked');
    if (respuesta2 && respuesta2.value === "function") {
        puntaje++;
    }

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Obtuviste " + puntaje + " de 2 respuestas correctas.";
}

