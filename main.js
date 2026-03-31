/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/ 


const email = "https://flynn.boolean.careers/exercises/api/random/mail" 
const emailList = []

const mailList = document.getElementById("mail-list")
    

for (let i = 0; i < 10; i++) {
    fetch(email)
    .then (response => response.json())
    .then (data => {
        console.log(data.response);
    emailList.push(data.response)
const li = document.createElement("li")
    li.innerHTML = data.response
    mailList.appendChild(li)
})
}

console.log(emailList);


    
    
