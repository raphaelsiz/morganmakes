var pgp;
getPgp()
const email = 'morganmakes@morgan.art'
async function getPgp() {
  let res = await fetch('/public-key.asc')
  pgp = await res.text()
  
  let copyPgp = document.getElementById("copy-pgp")
  copyPgp.addEventListener('click',e=>navigator.clipboard.writeText(pgp))
  let buttonPgp = document.createElement("button")
  buttonPgp.textContent = "Copy key"
  copyPgp.append(buttonPgp)

  let copyEmail = document.getElementById("copy-email")
  copyEmail.addEventListener('click',e=>navigator.clipboard.writeText(email))
  let buttonEmail = document.createElement("button")
  buttonEmail.textContent = "Copy email"
  copyEmail.append(buttonEmail)
}

