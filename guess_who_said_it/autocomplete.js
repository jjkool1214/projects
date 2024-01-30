var guess = ""

document.addEventListener("keyup", (e) => {
    if(e.code >= "KeyA" && e.code <= "KeyZ"){
        input = document.getElementById("actual-text")
        if(input.innerText.length <= 15){
            input.innerText = input.innerText + e.code[3]
        }
    }

    if(e.code == "Backspace"){
        input = document.getElementById("actual-text")
        input.innerText = input.innerText.substring(0, input.innerText.length-1)
    }

    if(e.code == "Enter"){
        input = document.getElementById("actual-text")

    }

}) 