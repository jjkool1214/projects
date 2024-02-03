function rotateLetter(rotation){
    let input = document.getElementById("actual-input-text-area").value
    console.log(input)
    const results = []
    console.log(results)
    for(let i = 0; i < input.length; i++){
        let currentCharVal = input.charCodeAt(i)
        let charVal = ((rotation-1) + currentCharVal) + 1
        if(charVal + rotation > 90 && charVal < 91){
            charVal -= 26
            results[i] = charVal
        } else {
            results[i] = charVal
        }
    }
    console.log(results)
    let showOutput = document.getElementById("results-print")
    showOutput.innerText = String.fromCharCode(results)
}


document.addEventListener("click", (e) => {
    let currentVal = 1;
    if(e.target.value != currentVal){
        currentVal = e.target.value
        console.log(currentVal)
        rotateLetter(currentVal)
    }
})

