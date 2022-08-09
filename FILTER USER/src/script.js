const search  = document.querySelector(".search")
const displayuser = document.querySelector(".displayUser")


const url = "https://jsonplaceholder.typicode.com/users";

 const users = []


fetch(url)
.then(res => res.json())
.then(data => users.push(...data))
.catch(err => console.log(err))

function findUser(matchUser) {
    return users.filter(person =>{

    const regex = new RegExp(matchUser) 
    return person.name.match(regex) || person.username.match(regex)
 });
}

function displayMatches(){
    const matchUser = findUser(this.value, users)
    const html = matchUser.map(names =>{
        return   `<li>${names.name}</li>`
        
    }).join('');

    displayuser.innerHTML = html;
}


search.addEventListener("keyup", displayMatches);

