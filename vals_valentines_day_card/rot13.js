function rotateLetter(rotation){
    let input = document.getElementById("actual-input-text-area").innerText
    let results = new Array(input.length)
    for(let i = 0; i < input.length; i++){
        let charVal = input.charCodeAt(i) + rotation
        if(charVal + rotation > 90 && charVal < 91){
            charVal -= 26
            results.push(charVal)
        } else {
            results.push(charVal)
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
    }w
})