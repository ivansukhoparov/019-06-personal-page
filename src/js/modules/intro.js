const PHRASE = 'Hello, world!';
const LOAD = '\\|/–'
const TYPING_DELAY = 80;

const intro = document.querySelector('.intro__wrapper');
const cmdLine = document.querySelector('#cmd-line');
let charIndex = -1;
let delay = TYPING_DELAY;
let count = 0;
let loadProgress = ' ';

function typing() {
    if (charIndex === -1) {
        delay = TYPING_DELAY * 20;
        charIndex = 0
        setTimeout(typing, delay)
    }
    else if (charIndex < PHRASE.length) {
        delay = TYPING_DELAY;
        let char = PHRASE.charAt(charIndex);
        cmdLine.textContent += char;
        charIndex++;
        if ("," === PHRASE.charAt(charIndex)) {
            delay = TYPING_DELAY * 10;
        }
        if (char === PHRASE.charAt(charIndex)) {
            delay = TYPING_DELAY / 1.5;
        }
        if (" " === PHRASE.charAt(charIndex)) {
            delay = TYPING_DELAY / 1.5;
        }
        if (" " === char) {
            delay = TYPING_DELAY * 5;
        }
        if (("l" === PHRASE.charAt(charIndex)) && char != PHRASE.charAt(charIndex)) {
            delay = TYPING_DELAY * 2;
        }
        setTimeout(typing, delay)
    } else if (charIndex === PHRASE.length) {
        delay = TYPING_DELAY * 30;
        setTimeout(erace, delay)
    }
}

function erace() {
    delay = TYPING_DELAY / 1.5;
    if (charIndex != 0) {
        charIndex--;
        cmdLine.textContent = PHRASE.substring(0, charIndex);
        setTimeout(erace, delay);
    }
    if (charIndex === 0) {
        setTimeout(loadPage, 1000);
    }
}

function load() {

    charIndex++;
    if (charIndex === LOAD.length) {
        charIndex = 0;
        count++;
        loadProgress += '.';
    }
    let char = LOAD.charAt(charIndex);
    cmdLine.textContent = char + loadProgress;

    if (count < 9) {
        setTimeout(load, 100);
    } else {
        setTimeout(() => {
            cmdLine.textContent = '';
            typing();
        }, 1000);
    }
}

function loadPage() {
    document.querySelector('body').classList.add('page');
    document.querySelector('body').classList.remove('intro');
    cmdLine.classList.add('hidden');
    setTimeout(() => {
        intro.remove();
        showPage()
    }, 2000)
}

function showPage(params) {
    const sections = document.querySelectorAll('section');
    const menu = document.querySelector('.nav');
    const social = document.querySelector('.social');
    const email = document.querySelector('.page__email');

    email.classList.remove('hidden');
    social.classList.remove('hidden');
    menu.classList.remove('hidden');
    sections.forEach(element => {
        element.classList.remove('hidden');
    });
}

load()