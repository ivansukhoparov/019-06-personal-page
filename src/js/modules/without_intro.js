const cmdLine = document.querySelector('#cmd-line');
function loadPage() {
    document.querySelector('body').classList.add('page');
    document.querySelector('body').classList.remove('intro');
    cmdLine.classList.add('hidden');
    showPage();
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

loadPage();