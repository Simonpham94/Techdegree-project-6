const qwerty = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');
const buttonStartGame = document.getElementsByClassName('btn__reset')[0];
const ul = document.getElementById('phrase').querySelector('ul'); 
const ol = document.getElementById('scoreboard').querySelector('ol');
let liveHeart = document.querySelectorAll('IMG');
let triesImg = Array.from(document.querySelectorAll('.tries img'));
const overlay = document.getElementById('overlay');

let missed = 0; 
const listItem = ul.children; 
 
 
const phrases = [
    'captain america', 
    'iron man', 
    'doctor strange', 
    'scarlet witch', 
    'black widow', 
    'spider man', 
    'the hulk', 
    'hawkeye', 
    'ant man', 
    'thor', 
    'captain marvel', 
    'quicksilver', 
    'black panther', 
    'ghost rider', 
    'deadpool', 
    'wolverine', 
    ]; 



// game starting function 
function startGame()  {
     
    const div = document.getElementById('overlay');
    buttonStartGame.addEventListener('click', () => {

        div.style.display = 'none'; 
    }); 
};   
startGame(); 

// random phrase generator - return an array of characters


function getRandomPhraseAsArray(arr) {
    
    return phrases[Math.floor(Math.random() * phrases.length)].split('');    
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

let phraseArray = getRandomPhraseAsArray(); 
addPhraseToDisplay(phraseArray); 


// compare the letter and the clicked button and display the match 
qwerty.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON' ) {
        function checkLetter(arr) {
            e.target.classList.add('chosen'); 
            const checkLetter = document.getElementsByClassName('letter'); 
            let match = null; 
            for (let i = 0; i < checkLetter.length; i++) {
                if(checkLetter[i].textContent == arr) {             
                    // checkLetter[i].className += ' show'; 
                    checkLetter[i].classList.add('show');
                    match = arr;         
                } 
            }  
            return match;   
        }
    }   
    const letterFound = checkLetter(e.target.textContent);
    // if(e.target.tagName == 'BUTTON' ) {
    //     // e.target.className = 'chosen';   
        
    // }

    if(e.target.className == 'chosen' ) {
        e.target.disabled = true;
    }


    if (letterFound == null) {
        liveHeart[missed].setAttribute("src", "images/lostHeart.png");
        missed +=1;         
    }
    checkWin(); 
}) 

// Game resetting function 

    function gameResetting(button) {
        var btnResetGame = document.createElement('BUTTON'); 
        btnResetGame.textContent = 'Play Again'; 
        btnResetGame.className = 'reset'; 
        overlay.appendChild(btnResetGame); 

        btnResetGame.addEventListener('click', (e) => {
            
            overlay.style.display = 'none'; 
            btnResetGame.style.display = 'none'; 
            //clear the phrase display
            ul.innerHTML = ''; 

            // remove the 'chosen' class
            function removeChosen() {
                const removeChosen = document.querySelectorAll('.chosen'); 
                for (let i = 0; i < removeChosen.length; i ++) {   
                  removeChosen[i].classList.remove('chosen');               
                  removeChosen[i].disabled = false;
                }
            }
            removeChosen(); 
            // bring back the live hearts
            const tries = document.querySelectorAll('.tries'); 
            for (let j = 0; j < liveHeart.length; j ++) {
                liveHeart[j].className = 'tries';
                triesImg[j].src = 'images/liveHeart.png'; 
            }
            missed = 0; 
            //reset all the main functions
            phraseArray = getRandomPhraseAsArray(phrases); 
            addPhraseToDisplay(phraseArray); 
            
            //remove the added span
            overlay.querySelector('SPAN').remove();     
        })
    }
// Superhero revealing function
function RevealTheSuperHeroWin() {
    let textWin = document.createElement('span'); 
    textWin.textContent = `Yes, it was ${phraseArray.join('').toUpperCase()}`;
    textWin.className = 'finalText';  
    overlay.appendChild(textWin);
}

function RevealTheSuperHeroLose() {
    let textLose = document.createElement('span'); 
    textLose.textContent = `Sorry, it was ${phraseArray.join('').toUpperCase()}`;
    textLose.className = 'finalText';  
    overlay.appendChild(textLose);  
}

// checkWin function 
function checkWin(arr) {
    let liLetter = document.getElementsByClassName('letter'); 
    let liShow = document.getElementsByClassName('show'); 

    // win display
    if (liLetter.length == liShow.length) {
        overlay.style.display = 'flex'; 
        overlay.className = 'win';   
        document.querySelector("h2").innerHTML = "Congratulations, You Win!"; 

        RevealTheSuperHeroWin(); 

        buttonStartGame.style.display = 'none'; 

        gameResetting(); 
        
    // lose display
    } else if (missed > 4) {
        overlay.style.display = 'flex'; 
        overlay.className = 'lose'; 
        document.querySelector("h2").innerHTML = "Good Luck Next Time!";

        RevealTheSuperHeroLose(); 

        buttonStartGame.style.display = 'none';

        gameResetting(); 
            
    }
}



