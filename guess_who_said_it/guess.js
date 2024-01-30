async function logUser(){
    const response = await fetch("https://jackb.dev/api/users")
    const people = await response.json()
    let index = Math.floor(Math.random()*(people.length - 1) + 1)
    let id = await people[index]['id']
    console.log(id)
    return  id
}

async function getQuotes(id_discord){
    let id = await id_discord
    let link = "https://jackb.dev/api/quotes/"
    let thing =  link.concat(id)
    console.log(thing)
    const response = await fetch(thing)
    console.log(response)
    const quotes = await response.json()
    let message_1 = quotes[Math.floor(Math.random()*(quotes.length))]['message']
    return message_1
}

async function delete_words(message){
    let new_message = await message
    console.log(new_message)
    let index = new_message.lastIndexOf("\"")
    console.log(index)
    if(index == -1){
        index = new_message.lastIndexOf("\”")
    }
    let final_quote = new_message.substring(0, index+1)
    var regex = new RegExp("\:(.*)\:")
    let actualFinal = final_quote.replace(regex, "")
    console.log(actualFinal)
    block = document.getElementById("quote")
    block.innerText = actualFinal
}

quote = delete_words(getQuotes(logUser()))