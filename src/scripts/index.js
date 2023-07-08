import { getUser } from './services/getUser.js'
import { getRepositories } from './services/repositories.js'
import {user} from './objects/user.js'
import { screen } from './objects/screen.js'
import {event} from './services/getEvent.js'

document.getElementById('btn-search').addEventListener('click', ()=>{
   const userName = document.querySelector('#input-search').value
   if (validadeInput(userName)) return
   getUserData(userName)
})

function validadeInput(userName){
   if (userName.length === 0){
   alert('Preencha o campo para buscar')
   return true
  }
}

document.getElementById('input-search').addEventListener('keyup', (e)=>{
   const userName = e.target.value
   const key = e.which || e.keyCode
   // sera igual a chave se a chave for igual a 13
   const isEnterKeyPressed = key === 13

   if(isEnterKeyPressed){
      if (validadeInput(userName)){return}
      getUserData(userName)
   }
})

async function getUserData (userName){
   const userResponse = await getUser(userName)
   console.log(userResponse)
   console.log("USER:",user)

   console.log(await event(userName))
   const eventResponse = await event(userName)

   if (userResponse.message === "Not Found") {screen.notFound()
      return
   }

   const repositoriesResponse = await getRepositories(userName)
   console.log(repositoriesResponse)

   user.setEvent(eventResponse)
   user.setRepositories(repositoriesResponse)
   user.setInfo(userResponse)
   screen.renderUser(user)
   screen.renderEvents(user)
}







