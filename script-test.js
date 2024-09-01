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

// Adding special html
function feedback(questionNumber, correctIncorrect) {
    if (correctIncorrect === "correct") {
        switch (questionNumber) {
            case '1':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>MUY BIEN PRINCESITA (en realidad ño che bien que hora exacta pero mas o menos por las 10:30 :3)</b>"
                break;
            case '2':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>CHIIII :3 en realidad el persona 5 y el botw valen porque no me he dechidido tampoco</b>"
                break;
            case '3':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>imagina ser furry 💀</b>"
                break;
            case '4':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>yeyyyyyy echto lo hablé hache tiempo que el final del tears of the kingdom ech muy epico y me encanta :3</b>"
                break;
            case '5':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor rechpeta en 2020 y 2021 estaba muy vichiado</b>"
                break;
            case '6':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>YEYYYY amor en verdad japonés también sé algunas cosas pero nunca llegué a ponerme a aprender bien :3</b>"
                break;
            case '7':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>AMOR TE ACUERDAS TE ACUERDAS TE ACUERDAS :333 amor igual es algo un poco espechifico achi que echta bien cielo :3</b>"
                break;
            case '8':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor chi te conté que tenia un email llamado kpopfansvalidationdenier 😭</b>"
                break;
            case '9':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>MUY BIEN PRINCESITA :3 glaceon me gusta mucho porque es de hielo y es mono y quirky :3 sylveon también es mi favorito pello glaceon de hace más tiempo :3</b>"
                break;
            case '10':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>Amor esto no es mi cosa mas orgullosa pero es que estaba aburrido y me lo descargué vichte (30/07/2019)</b>"
                break;
            case '11':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>CHIIIIIIIIIII CHI ERES AMOR :33333333333333 MUY BIENNNNNNNN</b>"
                break;
            default:
                alert("CHIIIII muy bien :33");
        }
    } else if (correctIncorrect === "incorrect") {
        switch (questionNumber) {
            case '1':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>Ayuda amor no pacha nada porque cho en realidad tampoco che muy bien</b>"
                break;
            case '2':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>Amor echto es un poquito crimen pello achepto porque chon parecidos</b>"
                break;
            case '3':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor aunque no lo parechca chi he visto todos echos menos beastars (excepto las ultimas temporadas de kaguya sama pello echo no cuenta)</b>"
                break;
            case '4':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>Amor con respeto el final del botw es un poco toto tipo si completas el juego el boss final te lo ponen a la mitad de la vida viste :3 te amo preciosa</b>"
                break;
            case '5':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor echta no te culpo porque era un vichiado al minecraft 😭 dale princesita :33</b>"
                break;
            case '6':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor echta era medio confusa pello chi le che un poco a catalán, alemán y coreano (mach catalán)</b>"
                break;
            case '7':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor esta si que es muy difichil 😭 te lo dije hache muchos meses preciosa, dale princesita :333333</b>"
                break;
            case '8':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor si es incorrecta es que le has dado a la de kpopfansvalidationdenier y eso si que es real aunque ño parechca achuda, echo era lo único que se me ocurrió</b>"
                break;
            case '9':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor echta bien preciosa porque echos también me gustan :3</b>"
                break;
            case '10':
                document.getElementById("Q" + questionNumber).innerHTML = "<b>amor esta era difícil achuda, dale princhecha solo te queda una :3</b>"
                break;
            default:
                alert("chi vech echto ech que algo ha pachado con el código 😭");
        }
    }
}

const numOfQuestions = 11;

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
