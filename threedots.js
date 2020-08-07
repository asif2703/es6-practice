const num =[20,45,87,45];
const num2 = [50,60,720,80];
const num3 = [12,17,45,22];
const allNum = num.concat(num2).concat([10]).concat(num3);
const allNum2 = [num,num2,5,num3];
const allNum3 = [...num,...num2,5,...num3];
console.log(allNum3);
console.log(allNum2);
console.log(allNum);

const minister = 450;
const business =500;
const chor =400;
const takaPoixsa = [450,800,78,235,7896,40];
const maximum = Math.max(minister,business,chor);
const maximum2 = Math.max(...takaPoixsa);
console.log(maximum2);
