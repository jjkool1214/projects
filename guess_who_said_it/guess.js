async function logUsers(){
    const response = await fetch("https://jackb.dev/api/users")
    const people = await response.json()
    let index = Math.floor(Math.random()*(words.length-1) + 1)
    return people[index]['id']
}



logUsers()