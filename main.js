console.log('HOLA')
console.info('HOLA')
console.warn('HOLA')
console.error('HOLA')

// DATA TYPES
// const userName = 'Paulo'; // string
// const age = 39; // number
// const isTeacher = true; // boolean (true o false)

// let userName = 'Pablo'; // string
// let age = 39; // number
// let isTeacher = true; // boolean (true o false)

// console.log(' Mi nombre es ' + userName + ' tengo ' + age + ' años y vivo en Gandia ' + isTeacher);

// const phrase = ' Mi nombre es ' + userName + ' tengo ' + age + ' años y vivo en Gandia ' + isTeacher;
// console.log(phrase);

// const deporte = 'baloncesto';
// console.log(deporte)

// let userName; //undefined = declarada, pero no definida
// userName = 'Paulo'; // string = definida (LOGIN)
// userName = null; // null = vacio pero definida (LOGOUT)

//***** NUMERIC OPERATORS *****/
// console.log('3 + 2 = ' + (3 + 2));
// console.log('3 - 2 = ' + (3 - 2));
// console.log('3 * 2 = ' + (3 * 2));
// console.log('3 / 2 = ' + (3 / 2));
// console.log('3 ** 2 = ' + (3 ** 2));
// console.log('3 % 2 = ' + (3 % 2));

// let index = 0;
// console.log(--index); // index = index - 1 & log (index -1, log = -1)
// console.log(index--); // log & index = index - 1 (log = -1, index -2)
// console.log(++index); // index = index + 1 & log (index -1, log = -1)
// console.log(index++); // log & index = index + 1 (log = -1, index 0)
// console.log(index); // index 0

// //*****CONDITIONALS *****/
// const color = 'blue';
// if (color === 'blue') {
// console.log('El color es azul');
// } else {
// console.log('El color no es azul);
// }

// **** NOTAS DE CONDICIONALES*****
// if = si se cumple habro corchetes
// else = si nos habro corchetes
// else if = si nos si ....
// colocar === comparación extricta
// colocar !== confirmar al reves

// const color = 'blue';
// switch (color) {
//     case 'blue':

//         console.log('El  color es azul');
//         break;

//         default: 
//         console.log(El color no es azul);
//         break;
// }

// **** LOOPS *****

// **** FOR

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 20; i <= 40; i++) {
//   console.log(i);
// }

// ****WHILE

// let i =1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 5;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// **** DO WHILE

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// for (let i = 1; i < 10; i++) {
//   if (i % 2 !== 0) {
//     console.log('impar', i);
//   }
// }


const maxLaps = 20;
for (let numberToAnalize = 0;numberToAnalize < maxLaps; numberToAnalize++) {
  let isPrime = true;
  for (let divisor = 2; divisor < numberToAnalize; divisor++) {
    const rest = numberToAnalize % divisor;
    const isDivisible = rest === 0;
    if (isDivisible) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log('__isPrime', numberToAnalize);
  }
}


// let fibonacciOne = 0;
// let fibonacciTwo = 1;
// // let fibonacciThree = fibonacciOne + fibonacciTwo;
// // let fibonacciFour = fibonacciTwo + fibonacciThree;
// console.log(fibonacciOne)
// console.log(fibonacciTwo)
// let result = fibonacciOne + fibonacciTwo;
// console.log(result);
// fibonacciOne = fibonacciTwo;
// fibonacciTwo = result;
// result = fibonacciOne + fibonacciTwo;
// for (let i= 0; i<= fibonacciMaxLaps;);























































