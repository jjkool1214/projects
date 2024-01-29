async function logQuotes(){
    const response = await fetch("https://jackb.dev/api/users")
    const people = response.json()
    console.log(people)
    let promiseB = response.then(something(result) {
        return result + 1
    });
    
    return response
}


console.log(newFunction())