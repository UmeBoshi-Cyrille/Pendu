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
var box_messages = document.getElementById("messages_box")
var messages_box = document.getElementById("messages")
var checkTitle = document.getElementById("checkTitle")
var checkedLetters = document.getElementById("checkedLetter")

var messages = {
    win: 'Enfin libre !',
    lose: 'Mordu !',
    guessed: 'Déjà tenté, ne te répète pas.',
    notValid: 'Attention à la nomenclature: A-Z.',
    start: 'Veuillez démarrer le jeu en appuyant sur le bouton "Start".'
}

// Variables
var counter;
var checkedList = []
var started = false;
var win = false;

window.onload = init();

function init() {
    counter = 9;
    word = words[randomWord()];
    words = [];
    console.log(word);
    let arrayWord = word.split("");
    console.log(arrayWord);
    letterInput.value = "";

    displayRandomWord(arrayWord);

    resetBtn.onclick = function () {
        reset();
    }

    startBtn.onclick = function () {
        messages_box.innerText = "";
        startGame(arrayWord)
        counterTxt.innerText = "Il vous reste " + counter + " tentatives."
    };

    submitBtn.onclick = function () {
        let letter_value = String(letterInput.value).toUpperCase();
        letterInput.value = "";
        console.log(letter_value);

        if (started === true) {
            if (checkLetter(letter_value)) {
                checkedList.push(letter_value);
                displayLetter(checkedList);
                guessLetter(letter_value, arrayWord)
            }
        } else {
            letter_value = "";
            messages_box.innerText = messages.start;
        }
    }

    if (started === true) {
        let spanLetter = document.querySelectorAll('span_letter');
        if (spanLetter.style.visibility = "visible")
            win = true;
        endGame()
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
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = word[i];
        span.className = "span_letter";
        span.style.visibility = 'hidden';
        li.style.visibility = 'hidden';
        li.className = 'li_letter';
        li.appendChild(span);
        word_list.appendChild(li);
    }
}

function guessLetter(letter, word) {
    let spanLetter = document.getElementsByClassName('span_letter');
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            spanLetter[i].style.visibility = 'visible';
        }
    }

    if (!word.includes(letter)) {
        counter--;
        counterTxt.innerText = "Il vous reste " + counter + " tentatives."
    }
}

function checkLetter(letter) {
    let regex = /[A-Z]/g;
    if (String(letter).match(regex) && String(letter).length === 1) {
        if (checkedList.includes(letter)) {
            messages_box.innerText = messages.guessed;
            return false
        } else {
            messages_box.innerText = ""
            return true
        }
    }
    messages_box.innerText = messages.notValid;
    return false
}

function displayLetter(letters) {
    letters.sort();
    checkTitle.innerText = "Vous avez déjà tenté :";
    checkedLetters.innerText = letters.join(" ");
}

function reset() {
    started = false;
    messages_box.innerText = "";
    counterTxt.innerText = "";
    checkTitle.innerText = "";
    checkedLetters.innerText = "";
    checkedList = [];
    counter = 9;
    let li = document.getElementsByClassName('li_letter');
    for (let i = 0; i < word.length; i++) {
        li[i].style.visibility = 'hidden';
    }
}

function endGame() {
    if (win === true) {
        box_messages.style.height = "500px";
        box_messages.style.fontSize = "120px";
        messages_box.innerText = messages.win;
    }
    else if (counter === 0) {
        box_messages.style.height = "500px";
        box_messages.style.fontSize = "120px";
        messages_box.innerText = messages.lose;
    }
}