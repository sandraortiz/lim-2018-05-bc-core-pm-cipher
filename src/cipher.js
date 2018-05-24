//window.cipher = {

  const mensajeInput = document.getElementById('mensaje');
const buttonEncriptar = document.getElementById('button-encriptar');
const claveInput = document.getElementById("clave");

const encriptar = () => {
  const clavesita= parseInt(claveInput.value);
 const mensajito = mensajeInput.value;
  
for(let i = 0; i < mensajito.length; i++){
  var c = mensajito.charCodeAt(i);
 var final = "";
    var e = c + clavesita;
  final += String.fromCharCode(e);
  console.log(final);

document.getElementById("final").innerHTML = final;
}
}



buttonEncriptar.addEventListener('click', encriptar);


