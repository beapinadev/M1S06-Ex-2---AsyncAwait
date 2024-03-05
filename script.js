function getUserInfo() {
    return new Promise ((resolve, reject)=>{
        let user;
        setTimeout (()=>{
            user = {
                nome: 'Beatriz',
                idade: 25,
                email: 'beatrizdfpina@gmail.com'
            };
            resolve(user);
        }, 3000)
    })
}
async function playGetUser(){
     let retorno = await getUserInfo();
     console.log(retorno);
}

console.log(playGetUser());