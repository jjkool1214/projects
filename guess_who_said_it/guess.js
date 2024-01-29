async function logQuotes(){
    const response = await fetch("https://jackb.dev/api/users")
    const quotes = response.json()
    console.log(quotes)
}

logQuotes()