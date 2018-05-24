

const mensajeInput = document.getElementById('mensaje');
const buttonEncriptar = document.getElementById('button-encriptar');
const claveInput = document.getElementById("clave");


const encriptar = () => {
  const clavesita= parseInt(claveInput.value);
  const mensajito = mensajeInput.value.toUpperCase();
    let final = "";
  for(let i = 0; i < mensajito.length; i++){
      const c = (mensajito.charCodeAt(i)-65+clavesita)%26+65;
       final += String.fromCharCode(c);
      
}
  document.getElementById("final").innerHTML= final;
}  

buttonEncriptar.addEventListener('click', encriptar);

