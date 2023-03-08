const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado'];
const diasMes = 31;
const dia1Mes =2;

for (let dia = 1; dia <= diasMes; dia++) {
const diaSemana = (dia + dia1Mes) % dias.length;
console.log(' Dia ' + dia + ' => ' + dias[diaSemana]);
}