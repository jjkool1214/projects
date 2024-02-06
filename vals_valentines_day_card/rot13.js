const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

function rotateLetter(rotation=0){
    let input = document.getElementById("actual-input-text-area").value
    let index = 0
    let result = ''
    for(let i = 0; i < input.length; i++){
        let char = input[i].toLowerCase()
        if(char == " "){
            result += char
            continue
        }
        if(char.match(/[a-z]/)){
            index = parseInt(alphabet.indexOf(char))
            console.log(index)
            index += parseInt(rotation)
            console.log(index)
            if(char == input[i]){
                result += alphabet[index]
            } else {
                result += alphabet[index].toUpperCase()
            }
        }
    }
    console.log(result)
    document.getElementById("output").innerText = result
}

let rotateButton = 

document.addEventListener("click", (e) => {
    if(e.target = document.getElementById("rotate-go")){
        let currentValue = document.getElementById("rotation-number").value
        rotateLetter(currentValue)
    }
})




