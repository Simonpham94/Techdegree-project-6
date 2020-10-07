const qwerty = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');
const missed = 0; 
const phrases = [
    'Captain America', 
    'Iron Man', 
    'Doctor Strange', 
    'Scarlet Witch', 
    'Black Widow', 
    'Spider Man', 
    'Hulk', 
    'Hawkeye', 
    'Ant Man'
]

// game starting function 
function startGame ()  {
    const button = document.getElementsByClassName('btn__reset')[0]; 
    const div = document.getElementById('overlay');
    button.addEventListener('click', () => {
        div.style.display = 'none'; 
    }); 
};   
startGame(); 

// random phrase generator - return an array of characters
function getRandomPhraseArray () {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const splitPhrase = randomPhrase.split(); 
    return splitPhrase;    
};

getRandomPhraseArray ()

function addPhraseToDisplay () {
    
    for (let i = 0; i < splitPhrase.length; i++) {
        
        const listItem = document.createElement('li');
        splitPhrases[i].textContent = listItem.value; 
        const ul = document.getElementById('phrase').querySelector('ul'); 
        ul.appendChild(listItem);  
    };
};


