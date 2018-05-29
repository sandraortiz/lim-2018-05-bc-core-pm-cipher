window.cipher = { 
 encode: () => {
  const Keys= parseInt(keyInput.value);
  const messageE = menssageencode.value.toUpperCase();
    let messageEncode = "";
  for(let i = 0; i < messageE.length; i++){
      const chartForm = (messageE.charCodeAt(i)-65+Keys)%26+65;
      messageEncode += String.fromCharCode(chartForm);
      
}
  document.getElementById("encodedecodemessage").innerHTML= messageEncode;
}  
,
 decode : () => {
  const Keys= parseInt(keyInput.value);
  const messageD = menssagedecode.value.toUpperCase();
  let messageDecode = "";
  for(let i = 0; i < messageD.length; i++){
      const chartForm = (messageD.charCodeAt(i)-65-Keys+26)%26+65;
      messageDecode += String.fromCharCode(chartForm);
      
}
  document.getElementById("encodedecodemessage").innerHTML= messageDecode;
}  



}
const keyInput = document.getElementById("key");
const menssageencode = document.getElementById('menssage-encode');
const buttonEncode = document.getElementById('button-encode');

buttonEncode.addEventListener('click', cipher.encode);


const menssagedecode = document.getElementById('menssage-decode');
const buttonDecode= document.getElementById('button-decode');
buttonDecode.addEventListener('click', cipher.decode);









