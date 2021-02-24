var wordInput = document.getElementById('wordInput');
var startButton = document.getElementById('startButton');
var gameImage = document.getElementById('gameImage');
var wordOutput = document.getElementById('wordOutput');
var alphabetButtons = document.getElementById('alphabetButtons');
var restartGame = document.getElementById('restartGame');
var word;
var loosingCount = 0;
var winningLeterCount = 0;
restartGame.style.visibility = 'hidden';

startButton.addEventListener('click', function(){
    word = wordInput.value.toUpperCase();
    if(word.length > 0) {
        wordInput.value = '';
        wordInput.disabled = true;
        startButton.disabled = true;
        for(var i = 0; i < 26; ++i) {
            alphabetButtons.innerHTML += `<button type="button" class="btn btn-info m-1" onclick="checkLetterInWord(this)">`+ String.fromCharCode(i+65) +`</button>`;
        }
        for(var i = 0; i < word.length; ++i) {
            wordOutput.innerHTML += `<div class="block-char"></div>`;
        }
    }else {
        alert("first you need to enter a word");
    }
})

function checkLetterInWord(letterId) {
    var letter = letterId.innerHTML;
    letterId.disabled = true;
    if(word.includes(letter)){
        for(var i = 0; i < word.length; ++i){
            if(letter === word.charAt(i)){
                wordOutput.childNodes[i].innerHTML = letter;
                ++winningLeterCount;
            }
        }
    }else {
        ++loosingCount; 
        gameImage.src = `img/Save-`+ loosingCount + `.png`;
    }
    if(loosingCount === 6 || winningLeterCount === word.length){
        restartGame.style.visibility = 'visible';
        for(var i = 0; i < 26; ++i){
            alphabetButtons.childNodes[i].disabled = true;
        }
        if(winningLeterCount === word.length) {
            alert('congratulations you know how your friend thinks, you are a good friend')
        }
    }       
}










