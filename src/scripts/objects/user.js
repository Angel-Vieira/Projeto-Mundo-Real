const user ={
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    event: [],
    eventMessage: [],
    eventLength: [],
    forks: [],
    stars: [],
    watchers: [],
    language: [],

    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio  = githubUser.bio
        this.userName = githubUser.login
        this.followers = githubUser.followers
        this.following = githubUser.following
    },

    setEvent(eventReceive){
        user.event = []
        user.eventMessage = []

        const eventQuantity = eventReceive.length
        console.log(eventQuantity)

        user.eventLength = eventReceive.length

        if(eventReceive.length == 0){
            user.eventMessage = "Não tem evento algum"
            return
        }else{
            for(let i=0; i<eventQuantity; i++){
                user.event[i] = eventReceive[i].repo.name
                if("commits" in eventReceive[i].payload){
                    user.eventMessage[i] = eventReceive[i].payload.commits[0].message
                }else{user.eventMessage[i] = "Não tem descrição"}
            }
        }
    },

    setRepositories(repositories){
       const repositoriesQuantity =  repositories.length
        this.repositories = repositories
        
        for(let i=0; i<repositoriesQuantity; i++){
            this.forks[i] = repositories[i].forks
            this.stars[i] = repositories[i].stargazers_count
            this.watchers[i] = repositories[i].watchers
            this.language[i] = repositories[i].language
        }
    }
}
export{user}