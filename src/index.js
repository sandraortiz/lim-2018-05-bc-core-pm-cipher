const keyInput = document.getElementById('key');
const menssageencode = document.getElementById('menssage-encode');
const menssagedecode = document.getElementById('menssage-decode');
const buttonDecode = document.getElementById('button-decode');
const buttonEncode = document.getElementById('button-encode');
const encodeDecodemessage  = document.getElementById('encodedecode-message');

buttonEncode.addEventListener('click', ()=>{
    let Key = keyInput.value;
    let menssageEn = menssageencode.value;
    encodeDecodemessage.value = window.cipher.encode(Key,menssageEn); 

})

buttonDecode.addEventListener ("click" , ()=>{
    let Key = keyInput.value;
    let menssageDe = menssagedecode.value;
    encodeDecodemessage.value = window.cipher.decode(Key,menssageDe); 
})
