
const textInEl = document.getElementById('text-in');
const base64El = document.getElementById('base64-out');
const rot13El = document.getElementById('rot13-out');
const hexEl = document.getElementById('hex-out');

function rot13(str) {
    let firstLetters = 'ABCDEFGHIJKLMabcdefghijklm'.split('');
    let llastLetters = 'NOPQRSTUVWXYZnopqrstuvwxyz'.split('');

    let decoded = '';

    for (let char = 0; char < str.length; char ++) {
        if (firstLetters.includes(str[char])) {
            decoded = decoded + llastLetters[firstLetters.indexOf(str[char])];
        } else if (llastLetters.includes(str[char])) {
            decoded = decoded + firstLetters[llastLetters.indexOf(str[char])];
        } else {
            decoded = decoded + str[char];
        }
    }

    return decoded;
}

function decodeHexToText(str) {
    let hexNumbers = str.split(' ');
    let text = "";
    for (const hex of hexNumbers) {
        text += String.fromCharCode(parseInt(hex, 16));
    }
    return text;
}

function updateOuts() {
    rot13El.innerHTML = rot13(textInEl.value);
    base64El.innerHTML = atob(textInEl.value);
    hexEl.innerHTML = decodeHexToText(textInEl.value);
}

textInEl.addEventListener('change', updateOuts);
