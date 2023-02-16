var words = ["CAROTTE", "PATATE", "FROMAGE", "ROBLOCHON", "ORDINATEUR",
    "GUITARE", "CLARINETTE", "SAXOPHONE", "LINUX", "UNIX", "WINDOWS", "APPLE",
    "PYTHON", "POTIRON", "PENDU", "CUCURBITACEES", "COUSCOUS", "COURGETTE",
    "PATATE", "VERRE", "LETTRE", "ECONOMIE", "ALGORITHMIQUE", "MICRO"]

var word;

// INPUTS
var startBtn = document.getElementById("startBtn")
var resetBtn = document.getElementById("resetBtn")
var submitBtn = document.getElementById("submitBtn")
var letterInput = document.getElementById("letterInput")

// DISPLAY
var counterTxt = document.getElementById("counterTxt")
var word_list = document.getElementById("word_list")
var messages_box = document.getElementById("messages")
var checkTitle = document.getElementById("checkTitle")
var checkedLetter = document.getElementById("checkedLetter")

var messages = {
    win: 'Enfin libre !',
    lose: 'Mordu !',
    guessed: 'Déjà tenté, ne te répète pas.',
    notValid: 'Attention à la nomenclature: A-Z.',
    start: 'Veuillez démarrer le jeu en appuyant sur le bouton "Start".'
}

// Variables
var counter = 9;
var checkedList = []
var started = false;



window.onload = init();

function init() {
    word = words[randomWord()];
    words = [];
    console.log(word);
    let arrayWord = word.split("");
    console.log(arrayWord);

    displayRandomWord(arrayWord);

    startBtn.onclick = startGame(arrayWord);

    if (started == true) {
        if (checkLetter())
    } else {

    }
}

function startGame(word) {
    started = true;
    let li = document.getElementsByClassName('li_letter');
    for (let i = 0; i < word.length; i++) {
        li[i].style.visibility = 'visible';
    }
}

function randomWord() {
    return Math.floor(Math.random() * (words.length))
}

function displayRandomWord(word) {
    for (let i = 0; i < word.length; i++) {
        let li = document.createElement('li')
        let span = document.createElement('span')
        span.innerHTML = word[i]
        span.style.visibility = 'hidden'
        li.style.visibility = 'hidden'
        li.className = 'li_letter'
        li.appendChild(span)
        word_list.appendChild(li)
    }
}

function guess() {

}

function checkLetter(letter) {
    let regex = /[A-Z]/g;
    if (String(letter).match(regex) && String(letter).length === 1) {
        if (checkedList.includes(letter)) {
            messages_box.innerHTML = messages.guessed;
            return false
        } else {
            messages_box.innerHTML = ""
            return true
        }
    }
    messages_box.innerHTML = messages.notValid;
    return false
}

function displayLetter() {

}