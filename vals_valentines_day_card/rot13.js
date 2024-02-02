document.addEventListener("keyup", (e) => {
    if("KeyA" <= e.code && e.code <= "KeyZ"){
        let input = document.getElementById("word-holder-input")
        input.innerText += e.code[3]
    }
})

function rotateLetter(letter, rotation){

}
