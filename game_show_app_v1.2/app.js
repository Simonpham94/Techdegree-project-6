const qwerty = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');
let missed = 0; 
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
function startGame()  {
    const button = document.getElementsByClassName('btn__reset')[0]; 
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
        const ul = document.getElementById('phrase').querySelector('ul'); 
        ul.appendChild(listItem); 
        if (listItem.textContent == ' ') {
            listItem.className = 'space'; 
        } else {
            listItem.className = 'letter'; 
        };
        
    };
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

qwerty.addEventListener('click', (e)=>{
    if (event.target.tagName == 'BUTTON') { 
        event.target.className = 'chosen'; 
        event.target.setAttribute('disable', true);
        
    }

    // check if the buttons clicked match with the letters
    function checkLetter (button) {
        const letters = document.getElementsByClassName('letter');
        const buttons = document.getElementsByClassName('chosen');
        for (let i = 0; i < letters.length; i++) {
            for (let j = 0; j < buttons.length; j++){
                if(letters[i].textContent = buttons[j].textContent) {
                    letters[i].className = 'show'; 
                    let match = buttons[j].textContent; 
                    return match; 
                } else {
                    return null; 

                }
            }
            
        }
    checkLetter(BUTTON);
    const letterFound = match.textContent; 
    
}
}); 


    



