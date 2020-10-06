const qwerty = document.getElementById('qwerty'); 
const phrase = document.getElementById('phrase');
const missed = 0; 

function startGame ()  {
    const button = document.getElementsByClassName('btn__reset'); 
    const div = document.getElementById('overlay');
    button.addEventListener('click', () => {
        div.style.display = 'none'; 
    }); 
}   