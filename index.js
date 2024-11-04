// Ex 1 Nearest and Farthest to 100 
function Find() {
const num1 = parseInt(prompt("enter number 1"));
const num2 = parseInt(prompt("enter number 2"));
const num3 = parseInt(prompt("enter number 3"));

const numbers = [num1, num2, num3];

const closeTo = numbers.reduce((a,b) => (100 - a) * (100 - a) < (100 - b) * (100 - b) ? a : b);
const farthTo = numbers.reduce((a,b) => (100 - a) * (100 - a) > (100 - b) * (100 - b) ? a : b);

document.getElementById("result").innerHTML = `The nearest is: ${closeTo} and The Farhest is: ${farthTo}`;
}

// Ex 2 Alphabetical order
function ChangeOrder() {
    const str = document.getElementById("input").value;
    const sorted = str.split(' ').map(word => word.split('').sort().join('')).join(' ');

    document.getElementById("sorted").innerHTML = `The result is: ${sorted}`;
}

// Ex 3 Not Repeated character
function FindFirstNotRepeated() {
    const str = document.getElementById("inputText").value;
    const text = str.split('');
    const res = text.find(letter => text.filter(item => item === letter).length === 1);

    document.getElementById("res").innerHTML = `The result is: ${res}`;
}

// Ex 4 Replace character following alphabet
function FollowingAlphabet() {
    const str = document.getElementById("string").value;

    const following = str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    alert(`The result is: ${following}`);
}

// Ex 5 Longest and Shortest String
function FindLongShort() {
    const str1 = prompt("enter the first word");
    const str2 = prompt("enter the second word");
    const str3 = prompt("enter the third word");

    const words = [str1, str2, str3];

    const Long = words.reduce((a,b) => a.length >= b.length ? a : b);
    const Short = words.reduce((a,b) => a.length <= b.length ? a : b);;

    document.getElementById("finded").innerHTML = `The Longest Word is: ${Long} and The Shortest Word is: ${Short}`;
}

// Ex 11 Volume Sphere
function VolSphere() {
    const radius = parseInt(document.getElementById("radius").value);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    document.getElementById("volume").value = volume.toFixed(0);
}

// Ex 12 Volume Cylinder
function VolCylinder() {
    const h = parseInt(document.getElementById("h").value);
    const r = parseInt(document.getElementById("r").value);

    const vol = Math.PI * Math.pow(r, 2) * h;
    document.getElementById("vol").value = vol.toFixed(0);
}

// Ex 13 Volume Cone
function VolCone() {
    const radi = parseInt(document.getElementById("radi").value);
    const hei = parseInt(document.getElementById("hei").value);

    const V = (1/3) * hei * Math.PI * Math.pow(radi, 2);
    document.getElementById("V").value = V.toFixed(0);
}

// Ex 14 Volume Prism
function VolPrism() {
    const length = parseInt(document.getElementById("len").value);
    const width = parseInt(document.getElementById("wid").value);
    const height = parseInt(document.getElementById("height").value);

    const volu = (length * width) * height;
    document.getElementById("volu").value = volu.toFixed(0);
}

// Ex 15 Area Triangle
function AreaTri() {
    const base = parseInt(document.getElementById("base").value);
    const H = parseInt(document.getElementById("H").value);

    const Area = (1/2) * base * H;
    document.getElementById("area").value = Area.toFixed(0);
}

// Ex 6 Highlight Words 
function highlight() {
    const par = document.querySelector('#par');
    const words = par.innerText.split(' '); 

    const highlightedText = words.map(word => {
        if (word.length > 7) {
            return `<span style="background-color: blue">${word}</span>`;
        } else if (word.length < 3) {
            return `<strong>${word}</strong>`;
        } else {
            return word;
        }
    }).join(' '); 
    par.innerHTML = highlightedText; 
}

// Ex 7 Replace Symbols
function replaceSymbols() {
    const para = document.querySelector('#para');
    const texti = para.innerText;
    texti = texti.replace(/\?/g, '*').replace(/!/g, '@');
    para.innerText = texti;
}

// Ex 8 Split Sentences
function splitSentences() {
    const parag = document.querySelector('#parag'); 
    let textt = parag.innerText;
    textt = textt.replace(/([.!?])\s*/g, '$1\n'); 
    parag.innerText = textt;
}
// Ex 9 Words Counter
function wordCnt() {
    const paragr = document.querySelector('#paragr'); 
    const wordcnt = paragr.innerText.split(' ').length; 
    alert(`There are ${wordcnt} words in the paragraph.`);
}

// Ex 10 Lorem
function highlightWords() {
    const paragraph = document.querySelector('#te'); 
    const words = paragraph.innerText.split(' '); 

    const highlightedText = words.map(word => { 
        if (word.toLowerCase().startsWith('a')) {
            return `<em>${word}</em>`;
        } else if (word.toLowerCase().endsWith('y')) {
            return `<u>${word}</u>`;
        } else {
            return word;
        }
    }).join(' ');
    paragraph.innerHTML = highlightedText;
}
