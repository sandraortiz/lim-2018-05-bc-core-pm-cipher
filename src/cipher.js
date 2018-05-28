
const menssageencode = document.getElementById('menssage-encode');
const menssagedecode = document.getElementById('menssage-decode');
const buttonEncode = document.getElementById('button-encode');
const buttonDecode= document.getElementById('button-decode');
const keyInput = document.getElementById("key");

const encode = () => {
  const Keys= parseInt(keyInput.value);
  const messageE = menssageencode.value.toUpperCase();
    let messageEncode = "";
  for(let i = 0; i < messageE.length; i++){
      const chartForm = (messageE.charCodeAt(i)-65+Keys)%26+65;
      messageEncode += String.fromCharCode(chartForm);
      
}
  document.getElementById("encodedecodemessage").innerHTML= messageEncode;
}  

buttonEncode.addEventListener('click', encode);



const decode = () => {
  const Keys= parseInt(keyInput.value);
  const messageD = menssagedecode.value.toUpperCase();
  let messageDecode = "";
  for(let i = 0; i < messageD.length; i++){
      const chartForm = (messageD.charCodeAt(i)-65-Keys+26)%26+65;
      messageDecode += String.fromCharCode(chartForm);
      
}
  document.getElementById("encodedecodemessage").innerHTML= messageDecode;
}  

buttonDecode.addEventListener('click', decode);
