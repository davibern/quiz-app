// Las preguntas están en el fichero quizData.js

// Variables que obtiene datos del DOM
const quiz = document.getElementById('quiz');
const quizImg = document.getElementById('quiz-image');
const progressEl = document.getElementById('progress-bar');
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const authorEl = document.getElementById('quiz-footer');
const submitBtn = document.getElementById('submit');

// Variables
let currentQuiz = 0;
let score = 0;

loadQuiz();

// Función cargar preguntas
function loadQuiz() {
   
    // Se deselecciona la respuesta para que aparezcan todas en blanco
    deselectedAnswers();

    // Variables que se cargan
    const currentQuizData = quizData[currentQuiz];
    let progress = ((currentQuiz + 1) / quizData.length) * 100;
    
    // Valores del array de preguntas
    quizImg.style.backgroundImage = `url("${currentQuizData.img}")`;
    progressEl.style.width = progress + '%';
    //progressEl.innerHTML = `${currentQuiz + 1}/${quizData.length}`;
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    authorEl.innerHTML = `Pregunta de: ${currentQuizData.author}`;

}

// Función para tomar la opción seleccionada de la pregunta
function getSelected() {
    
    // Variables
    let answer = undefined;

    // Si se selecciona la opción se guarda en answer el id
    // de la respuesta, si no es undefined
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer =  answerEl.id;
        }
    });

    return answer;

}

// Función que deselecciona una respuesta
function deselectedAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// Evento del botón
submitBtn.addEventListener('click', ()=> {

    // Se comprueba la respuesta
    const answer = getSelected();

    if (answer) {

        // Si la opción guardada coincide con la correcta se suma un punto
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        // Cambiamos la posición de quizData para mostrar el siguiente
        currentQuiz++;

        // Si no hemos llegado al final cargamos siguiente, si no
        // mostramos aviso de que hemos terminado
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Tus respuestas correctas son ${score}/${quizData.length}</h2>

                <p>
                    0-1: Cuñao<br/>
                    2-3: Clodomiro<br/>
                    4-5: Plumilla<br/>
                    6-7: Bubillo<br/>
                    8-9: Feriante<br/>
                    +10: Genio de las calles
                </p>

                <button onclick="location.reload()">Reiniciar</button>
                `;
        }

    }
    
})