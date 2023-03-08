// Pide la edad y si es mayor de 18 años indica que ya puede conducir.

const miEdad = 18;
const mayorDeEdad = 18;

if(miEdad >= mayorDeEdad) {
    console.log( "Es mayor de 18 y ya puede conducir" );
}else{
    console.log( "Es menor de edad" );
}

// Pide una nota (número). Muestra la calificación según la nota:
//   0-2: Muy deficiente
//   3-4: Insuficiente
//   5: Suficiente
//   6: Bien
//   7-8: Notable
//   9-10: Sobresaliente

const nota = 6;
switch (nota){
    case 0:
    case 1:
    case 2:
    console.log('Muy Deficiente');
    break;
    case 3:
    case 4:
    console.log('Insuficiente');
    break;
    case 5:
    console.log('Suficiente');
    break;
    case 6:
    console.log('Bien');
    break;
    case 7:
    case 8:
    console.log('Notable');
    break;
    case 9:
    case 10:
    console.log('Sobresaliente');
}

// Completa las condiciones de los if, del siguiente script para que los mensajes se muetren siempre de forma correcta

const numero1 = 5;
const numero2 = 8;
 
if(numero1<numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 >0) {
console.log("numero2 es positivo");
}
if(numero1 <0 || numero1!= 0) {
console.log("numero1 es negativo o distinto de cero");
}
if ((numero1 + 1) <= numero2) {
console.log('Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2');
}

// Dardos:
// Escribir un script que simule el juego de los lanzamiento de tres dardos.
// Hacer uso de la de la diana para obtener números aleatorios entre 1 y 20
// (como es una diana) para cada uno de los lanzamientos de los dardos.
// Una vez obtenidos los números de los dardos, sumar, multiplicar según
// sea el caso. Y obtener el resultado final de la partida.Escribir un script que simule el juego de los lanzamiento de tres dardos.
// Hacer uso de la de la diana para obtener números aleatorios entre 1 y 20
// (como es una diana) para cada uno de los lanzamientos de los dardos.
// Una vez obtenidos los números de los dardos, sumar, multiplicar según
// sea el caso. Y obtener el resultado final de la partida.

const valMin = 1, valMax = 20;
const doble = (dartOne*2); (dartTwo*2); (dartThree*2);
const triple = (dartOne*3); (dartTwo*3); (dartThree*3);
const dianaSimple = (dartOne = 25); (dartTwo = 25); (dartThree = 25);
const dianaDoble = (dartOne = 50); (dartTwo = 50); (dartThree = 50);

let dartOne, dartTwo, dartThree;

if (dartOne = Math.floor((Math.random() * valMax) + valMin){
    console.log(dartOne);

} else if (dartTwo = Math.floor(Math.random() * valMax) + valMin){
    console.log(dartTwo);

} else if (dartThree = Math.floor(Math.random() * valMax) + valMin){
    console.log(dartThree);  
}

console.log(dartOne + dartTwo + dartThree);
