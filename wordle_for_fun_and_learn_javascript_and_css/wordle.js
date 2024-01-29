

const height = 6;  //guesses
const width = 5; //word

var row = 0;
var col = 0;

var gameOver = false;
var word = words[Math.floor(Math.random()*(words.length-1) + 1)].toUpperCase()

var QWERTY = 'QWERTYUIOPASDFGHJKLZXCVBNM'


window.onload = function(){
    initialize_board();
    initialize_keyboard()
}

function initialize_keyboard(){
    for(let char of QWERTY) {
        let key = document.createElement("div")
        key.classList.add("key")
        key.id = char
        key.innerText = char

        key.addEventListener('click', () => add_letter(key.innerText));

        document.getElementById("keyboard").appendChild(key)
    }
}

function add_letter(key) {
    if(col < width){
        let currentTile = document.getElementById(row.toString() + "-" + col.toString());
        if (currentTile.innerText == "") {
            currentTile.innerText = key;
            col += 1;
        }
    }
}

function initialize_board() {


    for(let r = 0; r < height; r++){
        for(let c = 0; c < width; c++){
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }


    //Listen for key press
}

document.addEventListener("keyup", (e) => {
    if(gameOver){
        return;
    }

    //alert(e.code)
    if (e.code == "Space") {
        console.log("blah")
        if(gameOver == true){
            alert("click space to play again")
            reset()
        }
        alert("Invalid input")
        return;
    } else if("KeyA" <= e.code && e.code <= "KeyZ" ){
        add_letter(e.key.toUpperCase());
    }
    else if(e.code == "Backspace"){
        if(col > 0 && col <= width){
            col -= 1;
        }
        let currentTile = document.getElementById(row.toString() + "-" + col.toString());
        currentTile.innerText = "";
    }

    else if (e.code = "Enter"){
        if(check_word()){
            let restarted = update();
                if(restarted){
                    return
                } else {
                    row += 1;
                    col = 0; 
                }

        } else {
            for(let c = 0; c < width; c++){
                let currentTile = document.getElementById(row.toString() + "-" + c.toString())
                if(currentTile.innerText == ""){
                    alert("Fill the line please!")
                    return
                }
            }
            alert("Put a valid word!")
        }
    }

    if (!gameOver && row == height){
        console.log("end game") 
        if(prompt("Aw, nice try! the answer was" + word + " put 'r' to try again") == 'r'){
            reset()
        }
    }
})

function update() {
    let correct = 0;
    for(let c = 0; c < width; c++){
        let currentTile = document.getElementById(row.toString() + "-" + c.toString());     
        let letter = currentTile.innerText;
        
        if(word[c] == letter) {
            currentTile.classList.add("correct");
            document.getElementById(letter).classList.add("correct")
            correct += 1;
        } else if (word.includes(letter)) {
            currentTile.classList.add("present");
            document.getElementById(letter).classList.add("present")
        } else {
            currentTile.classList.add("absent");
            document.getElementById(letter).classList.add("absent")
        }

        if(correct == width){
            gameOver = true;
            alert("Congrats, You won!")
            if(prompt("Would you like to restart? type r") == 'r'){
                reset()
                return true;
            }
        }
    }
}

function check_word() {
    worder = ""
    for(let c = 0; c < width; c++){
        let currentTile = document.getElementById(row.toString() + "-" + c.toString()); 
        worder = worder + currentTile.innerText
        if(currentTile.innerText == ""){
            return false;
        }   
    }
    if(check_for_real_word(worder)){
        return true
    }
    return false
}

function check_for_real_word(word){
    for(wordle of words){
        if(word == wordle.toUpperCase()){
            return true
        }
    }
    return false
}

function reset(){
    console.log("work you dumb whore")
    const myNode1 = document.getElementById("keyboard")
    const myNode2 = document.getElementById("board")
    myNode1.innerHTML = ''
    myNode2.innerHTML = ''
    row = 0
    col = 0


    initialize_board()
    initialize_keyboard()
    gameOver = false
    word = words[Math.floor(Math.random()*(words.length-1) + 1)].toUpperCase()
}


