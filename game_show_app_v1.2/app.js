const qwerty = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');
const button = document.getElementsByClassName('btn__reset')[0];
const ul = document.getElementById('phrase').querySelector('ul'); 
const listItem = ul.children; 

let missed = 0; 
const phrases = [
    'captain america', 
    'iron man', 
    'doctor atrange', 
    'acarlet witch', 
    'black widow', 
    'spider man', 
    'hulk', 
    'hawkeye', 
    'ant man'
    ]; 

// game starting function 
function startGame()  {
     
    const div = document.getElementById('overlay');
    button.addEventListener('click', () => {
        div.style.display = 'none'; 
    }); 
};   
startGame(); 

// random phrase generator - return an array of characters
function getRandomPhraseAsArray(arr) {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase.split(''); 
    
};

// split phrase into an array of charaters
function addPhraseToDisplay(arr) {
     
    for (let i = 0; i < arr.length; i++) {    
        const listItem = document.createElement('li');
        listItem.textContent = arr[i];
        ul.appendChild(listItem); 
        if (listItem.textContent == ' ') {
            listItem.className = 'space'; 
        } else {
            listItem.className = 'letter'; 
        }     
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

qwerty.addEventListener('click', (e) => {


    function checkLetter(arr) {
        const checkLetter = document.getElementsByClassName('letter'); 
        let match = null; 
        for (let i = 0; i < checkLetter.length; i++) {
            if(checkLetter[i] == e.target.textContent) {
                checkLetter.className = 'show'; 
                match = e.target.textContent; 
                return match; 
            } else {
                return null; 
            }
        }
        
    }
   
    if(e.target.tagName === "BUTTON" ) {
        e.target.className = 'chosen'; 
        e.target.setAttribute('disable', true);
        letterFound = checkLetter(e.target.textContent); 
    }


}) 



