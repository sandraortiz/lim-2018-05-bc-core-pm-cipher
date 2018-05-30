window.cipher = { 
encode: (offset,string) => {
  const Keys= parseInt(offset);
  let messageEncode = "";
  for(let i = 0; i < string.length; i++) {
      const chart = string.charCodeAt(i);
      if (chart >=65 && chart <= 90)  {
       const chartForm = (chart-65+Keys)%26+65;
        messageEncode += String.fromCharCode(chartForm);
       } 
      else if(chart >= 97 && chart <=122)   {
             const charForm = (chart-97+Keys)%26+97;
             messageEncode += String.fromCharCode(charForm);
       }  
      else {
    messageEncode += string[i]; 
    }
  }
       return messageEncode;
}  
,
 decode : (offset,string) => {
  const Keys= parseInt(offset);
 let messageDecode = "";
for(let i = 0; i < string.length; i++){
    const chart = string.charCodeAt(i);
  if (chart >=65 && chart <= 90) { 
           const chartForm = (chart-65-Keys+26*2)%26+65;
            messageDecode += String.fromCharCode(chartForm);
   } 
     else if(chart >= 97 && chart <=122)   {
           const charForm = (chart-97-Keys+26*2)%26+97;
           messageDecode += String.fromCharCode(charForm);
   }  
   else {
     messageDecode += string[i]
   }
  }
     return messageDecode;
    
}  

} 




