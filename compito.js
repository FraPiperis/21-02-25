const LinkUtile = "https://jsonplaceholder.typicode.com/users"

let Totale = []

const Utenti = async() => {
    try {
        const response = await fetch(LinkUtile); 
        const PrendiUtenti = await response.json(); 
        renderUsers(PrendiUtenti); 
        Totale = PrendiUtenti; 
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

    Risultato.append(...tabella); 
}

function NuovaRiga({name, username, email}){
    const RigaUtente = document.createElement("tr", "table-light")

     const NameUs = document.createElement("td","table-light")
     NameUs.innerText= name;
     RigaUtente.appendChild(NameUs); 

     const UsernameUs = document.createElement("td", "table-light")
     UsernameUs.innerText= username;
     RigaUtente.appendChild(UsernameUs); 

     const MailUs = document.createElement("td", "table-light")
     MailUs.innerText= email; 
     RigaUtente.appendChild(MailUs); 

     return RigaUtente;
}



function cerca() {
  const select = document.getElementById("select")
  const input = document.getElementById("input")

  const selectValue = select.value
  const inputValue = input.value.toLowerCase()

  const userFilter = Totale.filter( user => {
     return user[selectValue].toLowerCase().includes(inputValue)

  })
  renderUsers(userFilter)
}

//user.name oppure user["name"] > primo caso non è dinamico, secondo caso dinamico


Utenti(); 