const LinkUtile = "https://jsonplaceholder.typicode.com/users"

const Utenti = async() => {
    try {
        const response = await fetch(LinkUtile); 
        const PrendiUtenti = await response.json(); 
        
        console.log(PrendiUtenti); 
      }
      catch (err) {
        console.log(err)
    }; 
  }
  Utenti(); 

  function renderUsers(PrendiUtenti) {
    let Risultato = document.getElementById("riga"); 
    Risultato.innerHTML=""; 

    const tabella = PrendiUtenti.map((user)=> NuovaRiga(user)); 

    renderUsers.append(...tabella); 
}

function NuovaRiga({name, username, email}){
    const RigaUtente = document.createElement("tr")

     const NameUs = document.createElement("td")
     NameUs.innerText= name;
     RigaUtente.appendChild(NameUs); 

     const UsernameUs = document.createElement("td")
     UsernameUs.innerText= username;
     RigaUtente.appendChild(UsernameUs); 

     const MailUs = document.createElement("td")
     MailUs.innerText= email; 
     RigaUtente.appendChild(MailUs); 

     return RigaUtente;
}

Utenti(); 