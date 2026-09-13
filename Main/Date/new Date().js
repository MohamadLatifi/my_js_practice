//Date(year , month , day , hour , minute , second)
console.log(new Date(2026, 11, 28,   18, 30, 40))
console.log(new Date()) //در حال حاظر

const date=new Date();
const year=date.getFullYear();
const month=date.getMonth();
const dayOfMonth=date.getDate();
// const day=date.getDay(); // روز هفته
const hour=date.getHours();
const minute=date.getMinutes();
const second=date.getSeconds();
console.log(`${year}/${month}/${dayOfMonth}`) ;
console.log(`${hour} : ${minute} : ${second} `) ;

const dateSet=new Date();
dateSet.setFullYear(2002)
dateSet.setMonth(11)
dateSet.setDate(28)

console.log('this is my berthday :'+dateSet)