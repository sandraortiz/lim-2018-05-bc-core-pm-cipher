
const menssage1Input = document.getElementById('menssage1');
const menssage2Input = document.getElementById('menssage2');
const buttonEncode = document.getElementById('button-encode');
const buttonDecode= document.getElementById('button-decode');
const keyInput = document.getElementById("key");

const encode = () => {
  const Keys= parseInt(keyInput.value);
  const messageE = menssage1Input.value.toUpperCase();
    let messageEncode = "";
  for(let i = 0; i < messageE.length; i++){
      const c = (messageE.charCodeAt(i)-65+Keys)%26+65;
      messageEncode += String.fromCharCode(c);
      
}
  document.getElementById("encodemessage").innerHTML= messageEncode;
}  

buttonEncode.addEventListener('click', encode);



const decode = () => {
  const Keys= parseInt(keyInput.value);
  const messageD = menssage2Input.value.toUpperCase();
  let messageDecode = "";
  for(let i = 0; i < messageD.length; i++){
      const b = (messageD.charCodeAt(i)-65-Keys+26)%26+65;
      messageDecode += String.fromCharCode(b);
      
}
  document.getElementById("decodemessage").innerHTML= messageDecode;
}  

buttonDecode.addEventListener('click', decode);
