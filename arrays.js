const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
// console.log(months[0]);
// console.log(months[2]);
// console.log(months[10]);
// console.log(months[11]);
// console.log(months.length);
// console.log(months[months.lenght]);
// console.log(months[months.lenght-1]);

for (let index = 0; index < months.length; index++) {
    if (index % 2 === 0) {
    const month = months[index];
    console.log(month);
    }
}