// function doubleIt(num)  {
//     return num*2;
    
// }
// const doubleIt = function myFun(num) {
//     return num*2;
    
// }
const doubleIt = num => num*2;
const add = (num1 , num2) => (num1*num2);
const giveme5 = () => 5;
const dd = giveme5();
console.log(dd);
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = (sum*diff);
    return result;
}
const result3 = doMath(8,6);
console.log(result3);

const result = add(1000,5);
console.log(result);