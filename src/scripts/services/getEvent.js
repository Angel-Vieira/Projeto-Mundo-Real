async function event(username){
  const  eventResponse = await fetch(`https://api.github.com/users/${username}/events`)
return eventResponse.json()
}
export{event}