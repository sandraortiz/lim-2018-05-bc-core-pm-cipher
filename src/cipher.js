window.cipher = { 
encode: (offset,string) => {

  const Keys= parseInt(offset.value);
  const messageE = string.value.toUpperCase();
    let messageEncode = "";
  for(let i = 0; i < messageE.length; i++){
      const chartForm = (messageE.charCodeAt(i)-65+Keys)%26+65;
      messageEncode += String.fromCharCode(chartForm);
      
  }
  
  //document.getElementById("encodedecodemessage").innerHTML= messageEncode;
  return messageEncode;
}  
,
 decode : (offset,string) => {
  const Keys= parseInt(offset.value);
  const messageD = string.value.toUpperCase();
  let messageDecode = "";
  for(let i = 0; i < messageD.length; i++){
      const chartForm = (messageD.charCodeAt(i)-65-Keys+26)%26+65;
      messageDecode += String.fromCharCode(chartForm);
      
  }
  return messageDecode;
  //.getElementById("encodedecodemessage").innerHTML= messageDecode;
}  

} 




