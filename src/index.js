const keyInput = document.getElementById('key');
const menssageencode = document.getElementById('menssage-encode');
const menssagedecode = document.getElementById('menssage-decode');
const buttonDecode = document.getElementById('button-decode');
const buttonEncode = document.getElementById('button-encode');


const empezarCifrado = () => {
    let respuesta = cipher.encode(keyInput, menssageencode);
    document.getElementById("encodedecodemessage").innerHTML= respuesta;
}

buttonEncode.addEventListener('click', empezarCifrado);


const empezarDescifrado = () => {
    let respuesta1 = cipher.decode(keyInput,menssagedecode);
    document.getElementById("encodedecodemessage").innerHTML= respuesta1;
}
buttonDecode.addEventListener('click' , empezarDescifrado);

//buttonDecode.addEventListener('click',() => cipher.decode(keyInput, menssagedecode));

// buttonEncode.addEventListener('click', ev => {
//     cipher.encode(keyInput, menssageencode);
// });

//buttonEncode.addEventListener('click', () => cipher.encode(keyInput, menssageencode));
