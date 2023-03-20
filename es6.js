// ES6문제 1,2번
// let name="noona's fruit store"
// let fruits = ["banana","apple","mango"]
// let address="Seoul"

// let store = {name, fruits, address}
// console.log(store)
// console.log(`제 가게 이름은 ${name}입니다. 위치는 ${address}에 있습니다`)

// ES6 3번
// function calculate(obj){
//   let a,b,c = {obj}
//     return a+b+c
// }

// calculate({a:1,b:2,c:3})

// ES6 4번
// let name="noona store"
// let fruits = ["banana","apple","mango"]
// let address={
//     country:"Korea",
//     city:"Seoul"
// }

// function findStore(obj){
//     return name="noona store" && address.city == "Seoul"
// }
// console.log(findStore({name,fruits,address}))

// ES6 5번
// function getNumber(){
//     let array = [1,2,3,4,5,6]
//     let[first,,third,forth] = [1,2,3,4,5,6]
//     return {first,third,forth}
// }
// console.log(getNumber()) //  결과값 { first: 1, third: 3, forth: 4 }

// ES6 6번
// function getCalendar(first, ...rest) {
//   return (
//     first === "January" &&
//     rest[0] === "Febuary" &&
//     rest[1] === "March" &&
//     rest[2] === undefined
//   );
// }
// console.log(getCalendar("January","Febuary","March"));

// ES6 7번
// function getMinimum(){
//     let a= [45,23,78]
//     let b = [54,11,9]
//     return Math.min(...a,...b)
// }
// console.log(getMinimum())

// ES6 8번
// function sumNumber() {
//   const sum =  (a, b)=> a+b
//   return sum(40, 10);
// }

// ES6 9번
// function sumNumber() {

//  let addNumber=(a)=>(b)=> (c)=> a + b + c;
//  return addNumber(1)(2)(3);

// }

// console.log(sumNumber())

// let names = [
//     "Steven Paul Jobs",
//     "Bill Gates",
//     "Mark Elliot Zuckerberg",
//     "Elon Musk",
//     "Jeff Bezos",
//     "Warren Edward Buffett",
//     "Larry Page",
//     "Larry Ellison",
//     "Tim Cook",
//     "Lloyd Blankfein",
//   ];

//   let firstNames = names.map((item)=>item.split(' ')[0])
//   console.log(firstNames)

//   let someData = names.some((item)=>names.length>=20)
//   console.log(someData)

//   let someData2 = names.some((item)=>names.includes('p'))
//   console.log(someData2)

//   let everyData = names.every((item)=>names.length>=20)
//   console.log(everyData)

//   let everyData2 = names.every((item)=>names.includes())
//   console.log(everyData2)
