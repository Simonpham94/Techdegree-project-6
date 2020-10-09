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
function getRandomPhraseAsArray () {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase.split(''); 
    
};



// split phrase into an array of charaters
function addPhraseToDisplay (arr) {
     
    for (let i = 0; i < arr.length; i++) {
        
        const listItem = document.createElement('li');
        arr[i].textContent = listItem;
        const ul = document.getElementById('phrase').querySelector('ul'); 
        ul.appendChild(listItem);  
        if (listItem.value !== ' ') {
            listItem.className = 'letter'; 
        }; 
    };
};

const phraseArray = getRandomPhraseAsArray (phrases);
addPhraseToDisplay (phraseArray); 

 
document.addEventListener('click', (e)=>{
    if (event.target.tagName == 'BUTTON') { 
        event.target.className = 'chosen'; 
        event.target.setAttribute('disable', true);
        
    }
   
    // check if the buttons clicked match with the letters
    function checkLetter (button) {
        const letters = document.getElementsByClassName('letter');
        for (let i = 0; i < letters.length; i++) {
            const buttons = document.getElementsByClassName('keyrow');

            for (let j = 0; j < buttons.length; j++){
                if(letters[i] = buttons[j].textContent) {
                    letters[i].className = 'show'; 
                    let match = 0; 
                    let match = letters[i]; 
                    return match; 
                } else {
                    return null; 
                }
            }
         }
    }
    

});
    


