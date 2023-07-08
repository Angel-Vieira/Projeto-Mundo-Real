const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
         this.userProfile.innerHTML =
          `<div class = "info">
                <img src="${user.avatarUrl}">
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado.'}</ h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada.'}<p>

                    <br>

                    <p>Seguidores: ${user.followers} Seguindo:${user.following}</p>
                </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach( function repo(element, index) {repositoriesItens += 
            `<li>
                <a href="${repo.html_url}" target ="_blank">
                    ${element.name}
                    <br>
                    <ul>
                        <li>🍴${user.forks[index]}</li>
                        <li>⭐${user.stars[index]}</li>
                        <li>👀${user.watchers[index]}</li>
                        <li>👅${user.language[index]}</li>
                    </ul>        
                </a>   
            </li>`});

        if (user.repositories.length > 0){
            this.userProfile.innerHTML += 
            
            `<div class= "repositories section"
                <h2>Repositórios</h2>
                <ul>
                    ${repositoriesItens}
                </ul>
            </div>`
        };
    },
    
    notFound(){
        this.userProfile.innerHTML += "<h3>Usuário não encontrado</h3>"
    },
        
    renderEvents(user){
        const eventArea = document.querySelector(".events")

        if(user.eventMessage == "Não tem evento algum"){
            eventArea.innerHTML = `<h2>Sem eventos</h2>`
            return
        }

        eventArea.innerHTML = "<h1>EVENTS</h1>"
            for(let i=0; i< user.eventLength; i++){
                if(i>=10){return}
                eventArea.innerHTML += `<h2>${user.event[i]} - ${user.eventMessage[i]} <br><br></h2>`
            }
        }
}
   
export {screen}