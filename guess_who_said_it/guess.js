let answer = ""

const id_match = {
    "214028075103551488":"jack",
    "395686692306157581":"mary ann", 
    "170700476797550593":"max",
    "526203167277318144":"sam",
    "897988508948500503":"amy",
    "698766259243974716":"kiera",
    "454722441780920330":"jaysen",
    "1124053366620823732":"dr. penis",
    "441708884378517514":"dante",
    "563795184584884225":"jared",
    "703278178944417853":"owen",
    "426074685340647424":"gio",
    "731634573317767275":"parker",
    "326871348787937280":"osiris",
    "674027373271973930":"yoav",
    "103645714340388864":"evan"
}

async function logUser(){
    const response = await fetch("https://jackb.dev/api/users")
    const people = await response.json()
    let index = Math.floor(Math.random()*(people.length - 1) + 1)
    const id = await people[index]['id'];
    let id_val = id
    console.log(id)
    console.log(id_match[id_val])
    answer = id_match[id_val]
    return id
}

async function getQuotes(id_discord){
    let id = await id_discord
    let link = "https://jackb.dev/api/quotes/"
    let thing =  link.concat(id)
    console.log(thing)
    const response = await fetch(thing)
    console.log(response)
    const quotes = await response.json()
    return quotes[Math.floor(Math.random()*(quotes.length))]['message']
}

async function delete_words(message){
    let new_message = await message
    console.log(new_message)
    let index = new_message.lastIndexOf("@")
    console.log(index)
    let final_quote = new_message.substring(0, index-2)
    var regex = new RegExp("\:(.*)\:")
    let actualFinal = final_quote.replace(regex, "")
    console.log(actualFinal)
    block = document.getElementById("quote")
    block.innerText = actualFinal
}

quote = delete_words(getQuotes(logUser()))

function check_guess(guess, answer){
    return guess == answer
}

check_guess()

async function getAnswer(){
    let id = await logUser();
    answer = id_match[id]
    return answer
}

function checkInValues(input){
    for(let i = 0; i <= Object.values(id_match).length; i++){
        if(input == Object.values(id_match)[i]){
            return true;
        }
    }
    return false;
}

function game(validWord){
    if(validWord){
        if(validWord == answer){
            
        }
    } else {
        document.getElementById("game-message").innerText = "Thats not a person here, fucko"
    }
}

document.addEventListener("keyup", (e) => {
    if(e.code == "Enter"){
        console.log(document.getElementById("answer").value)
        console.log(Object.values(id_match))
        console.log(checkInValues(document.getElementById("answer").value))
    }
})