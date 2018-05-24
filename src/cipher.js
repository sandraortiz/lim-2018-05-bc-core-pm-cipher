<<<<<<< HEAD
 //window.cipher = {
  // ... 
//encode : 
const mensajeInput = document.getElementById('mensaje');
const buttonEncriptar = document.getElementById('button-encriptar');
const claveInput = document.getElementById("clave");
const encriptar = () => {
  const clavesita= parseInt(claveInput.value);
  const mensajito = mensajeInput.value;
  var final = "";
  for(let i = 0; i < mensajito.length; i++){
      var c = (mensajito.charCodeAt(i)-65+clavesita)%26+65;
       final += String.fromCharCode(c);
      
}
  document.getElementById("final").innerHTML= final;
}  
=======
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


>>>>>>> 646a21fbd88f49e1c03d1a3069518245fc6fe990

buttonEncriptar.addEventListener('click', encriptar);


