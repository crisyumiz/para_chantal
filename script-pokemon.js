// Only one button clicked
function selectButton(selectedButton, questionNumber) {
    const buttons = document.querySelectorAll('div.buttons-q' + questionNumber +  ' > button');

// Disable all buttons except the clicked one
    buttons.forEach(button => {
        button.disabled = true;
    });
    // Adding feedback
    if (selectedButton.classList.contains("correct")) {
        feedback(questionNumber, "correct");
    } else {
        feedback(questionNumber, "incorrect");
    }

}

function feedback(questionNumber, correctIncorrect) {
    if (correctIncorrect === "correct") {
        switch (questionNumber) {
            case '1':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>AMOR CHIIIII ES CHIKORITA EL DE HOJA HELICOPTERO</b>"
                break;
            case '2':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>MUY BIEN CHIELO :3 ahora che vienen las difichiles :3</b>"
                break;
            case '3':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>AMOR MUY BIENNNNN CHI ECH AMOONGUSS :3 en chu tiempo hachian meme con echo vichte</b>"
                break;
            case '4':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>AMOR ATEEEEEE CHI ECH HAERIN MODO GATITO :3 princhecha que le guchta cool with you :3</b>"
                break;
            case '5':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>Amor el nombre hydreigonrayquaza me parecía muy gracioso 😭 dale princesita :3</b>"
                break;
            case '6':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>ATEEEE MUY BIEN AMOR :3 chi choy cho piplup amor :3</b>"
                break;
            case '7':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>DEAR PRIEST NANANA ISSEO NANANANAN TEARS</b>"
                break;
            case '8':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>AMOR ECH EL DEL MEME ECH EL DEL MEMEEEEE LO ADIVINACHTE AMOR</b>"
                break;
            case '9':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>MUY BIEN CHI ECH EL PAIS COMUNISTA DE CHALTY AMORRR</b>"
                break;
            default:
                alert("CHIIIII muy bien :33");
        }
    } else if (correctIncorrect === "incorrect") {
        switch (questionNumber) {
            case '1':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor que bebita, no che acordaba del pokemon que le daba grachia</b>"
                break;
            case '2':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor ñooooooo ech sylveon cielito</b>"
                break;
            case '3':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor 😭😭 echta era difichil chielo dale princesita :3</b>"
                break;
            case '4':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>Amor te verías tan preciosa dandole mal a las cosas amor :3 ech haerin princhecha</b>"
                break;
            case '5':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor espero que no haya sido hydreigonrayquaza 😭 igual rechpetable princhecha</b>"
                break;
            case '6':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor ñooooo chon todos nombres de hombres y agresivos amor era piplup pingüino princhecha</b>"
                break;
            case '7':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor que tontita :3 dale princhecha linda</b>"
                break;
            case '8':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>AMOR ERA EL DEL MEME BEBITA LA TORTUGA ECHA ACHUL DE AGUA DALE PRINCHECHA</b>"
                break;
            case '9':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor ñooooooo eche el paich de chalty milla los colores :3</b>"
                break;
            default:
                alert("chi vech echto ech que algo ha pachado con el código 😭");
        }
    }
}

const numOfQuestions = 9;

document.addEventListener("DOMContentLoaded", function() {
    console.log("Content loaded successfully.")

    // Keeping count of correct answers
    let corCounter = 0;
    // Adding functionality to correct buttons
    const correctAnswers = document.querySelectorAll(".correct");
    for (corAnswer of correctAnswers) {
        corAnswer.addEventListener("click", function() {
            corCounter++;
            this.classList.remove('btn-outline-dark');
            this.classList.add('btn-success');
            console.log("test correct")
            console.log(corCounter)
        })
    }

    // Adding functionality to incorrect buttons
    const incorrectAnswers = document.querySelectorAll(".incorrect");
    for (incorAnswer of incorrectAnswers) {
        incorAnswer.addEventListener("click", function() {
            this.classList.remove('btn-outline-dark');
            this.classList.add('btn-danger');
            console.log("test incorrect");
        })
    }

    // End of quiz
    let totalCount = 0;
    const buttonsPressed = document.querySelectorAll("div > button");
    buttonsPressed.forEach(button => {
        button.addEventListener("click", function() {
            totalCount++
            if (totalCount === numOfQuestions) {
                console.log("quiz finished")
                document.getElementById("final-result").innerHTML = "<h3> " + corCounter + "/" + numOfQuestions + "</h3>"
            }
        })
    })
})

