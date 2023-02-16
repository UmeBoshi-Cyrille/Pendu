var words = ["CAROTTE", "PATATE", "FROMAGE", "ROBLOCHON", "ORDINATEUR",
    "GUITARE", "CLARINETTE", "SAXOPHONE", "LINUX", "UNIX", "WINDOWS", "APPLE",
    "PYTHON", "POTIRON", "PENDU", "CUCURBITACEES", "COUSCOUS", "COURGETTE",
    "PATATE", "VERRE", "LETTRE", "ECONOMIE", "ALGORITHMIQUE", "MICRO"]

// INPUTS
var startBtn = document.getElementById("startBtn")
var resetBtn = document.getElementById("resetBtn")
var submitBtn = document.getElementById("submitBtn")
var letterInput = document.getElementById("letterInput")

// DISPLAY
var counterTxt = document.getElementById("counterTxt")
var word_list = document.getElementById("word_list")
var messages = document.getElementById("messages")
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
var splitWord = []
var started = false;

let regex = /[A-Z]/g;



function init() {
    let word = words[randomWord()]
    words = []
    console.log(word)
    splitword = word.split("");
    console.log(splitWord)
    displayRandomWord(word)

    startBtn.onclick = function() { startGame(word) }

    if (started == true) {

    } else {

    }
}

window.onload = init()

function startGame(word) {
    started = true;
    for (let i = 0; i < word.length; i++) {
        document.getElementsByClassName('li_letter')[i].style.visibility = 'visible';
    }
}

function randomWord() {
    return Math.floor(Math.random() * (words.length))
}

function displayRandomWord(word) {
    word.split()
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

}
