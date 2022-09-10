function ThemePink() {
    document.body.classList.remove('blue');
    document.body.classList.remove('dark-blue');
    document.body.classList.remove('dark-pink');
    document.body.classList.add('pink');
}

function ThemeDarkPink() {
    document.body.classList.remove('pink');
    document.body.classList.remove('blue');
    document.body.classList.remove('dark-blue');
    document.body.classList.add('dark-pink');
}

function ThemeBlue() {
    document.body.classList.remove('pink');
    document.body.classList.remove('dark-pink');
    document.body.classList.remove('dark-blue');
    document.body.classList.add('blue');
}

function ThemeDarkBlue() {
    document.body.classList.remove('pink');
    document.body.classList.remove('dark-pink');
    document.body.classList.remove('blue');
    document.body.classList.add('dark-blue');
}
