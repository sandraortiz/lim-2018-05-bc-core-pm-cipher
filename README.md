# My secret 

## Preámbulo

Al momento de organizar una fiesta sorpresa por alguna extraña razon el cumpleañero(a) siempre la descubre al menos a mi me ha pasado , por eso decide crear My secret una aplicacion  donde podras esconder los mensajes , solo podran leerlos el que organiza la fiesta y los invitados .

## Cifrado cesar

La aplicacion funciona bajo el metodo de cifrado cesar que es un cifrado por sustitucion https://en.wikipedia.org/wiki/Caesar_cipher .

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

#Funcionamiento de My Secret

1. Como aclaramos antes para que empieze a cifrar tu mensaje debemos poner un numero segun lo que deseamos desplazar.
En este caso yo puse 2 .

![codificar](https://user-images.githubusercontent.com/34012605/40936790-1bf1a846-6802-11e8-8028-1ae0b51866b1.gif)

2. Aqui escribiremos el mensaje a cifrar y daremos click .
En este caso el mensaje que yo escribe es SANDRA que desplazando de 2 nos muestra UCPFTC.


![2](https://user-images.githubusercontent.com/34012605/40564750-84f0c078-602f-11e8-81ca-c47a24368750.PNG)


3. Aqui descifraremos el mensaje que nos ha enviado .
Algo muy importante es recordar el numero el cual fue desplazo que en este caso  fue 2.
Poniendo el mensaje cifrado UCPFTC nos regresa el mensaje original que fue SANDRA.

![3](https://user-images.githubusercontent.com/34012605/40564890-180a6d1e-6030-11e8-8497-d5f876a3112b.PNG)
