/* Optionality for sliders (disabling sliders) */

function buttonSelected(selectedButton, questionNumber) {
    let slider = document.querySelector("#customRange" + questionNumber);
    console.log(slider);
    slider.disabled = "true"
    selectedButton.classList.add("disabled");

    console.log(slider.value);
    feedback(questionNumber, slider.value);
}

function feedback(questionNumber, valueOfSlider) {
    switch (questionNumber) {
        case '1':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR BIENNNNN RESPUESTA CORRECTA :333 (sabe a pasta de dientes)</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>mmm chochpechoso :3 deberia cher menos para la pasta de dientes</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor esto es traición achuda</b>"
            }
            break;
        case '2':
            if (valueOfSlider < 60) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor echo impochible me dijichte que te guchtaba mucho </b>"
            } else if (valueOfSlider < 80) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>mmm comida solida apta para picky eater aunque no lo mejor :3 </b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>BIENNNN CHO CHABIA QUE TE GUCHTABA :3 princesita que le gustan las cosas a la plancha</b>"
            }
            break;
        case '3':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor como ech pochible chi ech muy comida de picky eater y me lo señalaste chielito</b>"
            } else if (valueOfSlider < 60) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor le daba calificachion de meh a pollo campero que bebita</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR CHIIII :333 tengo muchas muchas ganas de ir a comer echo contigo cielito <333</b>"
            }
            break;
        case '4':
            if (valueOfSlider < 20) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor chabia que no te fueche a guchtar pello tan poco achuda, igual achi me gustas y me casaré contigo</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor :333 me chirve porque che que las ensaladas tampoco te guchtan tanto cielo</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor echto ño me lo creo cielito 😭 con rechpeto aunque quicha chi</b>"
            }
            break;
        case '5':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor waaa respeta a tu noviecito garfield amor :3 (mach palla mí :3)</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor seguro te ves tan bebita rankeando :3 echo lo admito porque cha me dijichte que ño te guchtaba mucho</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR CHIIIII :333 amor quicha fue misclick que le dichte pello igual ech curiocho penchar que a lo mejor chi te guchta (ño)</b>"
            }
            break;
        case '6':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>Amor echo ech impochible chi me dijichte que te guchtaba junto a la gelatina amor 😡 trampas ño</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor me lo echperaba mach alto pello igual te achepto princesita :333</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>OWWW PRINCHECHA :333 tan bonita :3 amor tomemos juntos princesita :33 (me gusta el de vainilla)</b>"
            }
            break;
        case '7':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>Amor ni de broma le has votado tan poco pero esto es ahora tiempo para pensar que la gelatina se parece a la portada del minialbum de bibi amor</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor mmmmmm le habras votado mach al flan o a la gelatina amor :3</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR CHI TE GUCHTA MUCHOOOO :3333 amor choy bebito con sueñito achuda son las 5 am te amo princesita</b>"
            }
            break;
        case '8':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor echto impochible porque era tu top 1 chielito achi que momento para dechirte de que tenia penchado poner tiramisu pello al final no lo puche</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor echto tambien impochible porque te guchtaba mucho AMOR CHE PUCHO COLTEMONIKHA (te amo más que a nadie)</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR LA UNICA RESPUESTA CORRECTA :3333 tan bebita con su japchae :3 te quello dar echo de comer :3</b>"
            }
            break;
        case '9':
            if (valueOfSlider < 30) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor ñoooooo que pacho que cha no te guchtan los peches como chalty amor waaaa </b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>owwww tan bebita :3 princhecha chiendo critica experta de comida poniendo nota media a boquerones :3</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR CHIIIIIII cuando hablaste de que te gustaban mucho te pusiste muy feliz y se notó mucho que te guchta mucho mucho bebita <333</b>"
            }
            break;
        case '10':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>amor chi ech lo que chiempre te pides princesita, echo ech falcho (bésame hasta que me duerma por favor)</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>owwwww amor :3 lo echperaba mach alto pello que cheas tan picky eater es de mis cosas favoritas de ti, sabías? <3</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR CHIIIII :333 te quello comprar tantos boba oreo amor :3 me encantas tanto <3333 dale princesita solo queda la última :3</b>"
            }
            break;
        case '11':
            if (valueOfSlider < 40) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>princhecha waaaa echto tambien impochible :3 achi que chi echtas aquí quello darte el dato curioso de que tengo 21 pestañas abiertas vichte</b>"
            } else if (valueOfSlider < 70) {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR TE AMO :3 que bebita poniendo nota media <3 te adoro princesita</b>"
            } else {
                document.getElementById("F" + questionNumber).innerHTML = "<b>AMOR CHIIIII ME DIJICHTE QUE TE GUCHTABA MUCHO MUCHO LA SOPITA DE LETRAS AMOR :33333 (echpello que cho también te guchte como la sopa de letras :3)</b>"
            }
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let sliders = document.querySelectorAll(".custom-slider");
    let hearts = document.querySelectorAll(".fa-heart");

    console.log(sliders[0]);
    console.log(hearts[0]);

    const numOfSliders = sliders.length

    for (let i = 0; i < numOfSliders; i++) {
        hearts[i].style.backgroundPosition = "0 "+"-"+sliders[i].value+"px";
        console.log("heart doing something");
        sliders[i].oninput = function(){
            hearts[i].style.backgroundPosition = "0 "+"-"+sliders[i].value+"px";
            console.log("input doing something");
        }
    }
    console.log(sliders[0]);
    console.log(hearts[0]);
})


