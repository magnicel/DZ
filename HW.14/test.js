import { TheLargestNumber } from './index.js';

const result = TheLargestNumber(1, '2', '3');
const areEqual = result === "The 3rd number is largest and equal: 3";
console.log(areEqual);

const result1 = TheLargestNumber(8, '8', '8');
const areEqual1 = result1 === "All three numbers are equal. And equal: 8";
console.log(areEqual1);

const result2 = TheLargestNumber(4, '4', '3');
const areEqual2 = result2 === "The 1st and 2nd numbers are largest and equal: 4";
console.log(areEqual2);

const result3 = TheLargestNumber('4', '8', '8', );
const areEqual3 = result3 === "The 2st and 3nd numbers are largest and equal: 8";
console.log(areEqual3);

const result4 = TheLargestNumber('4', '4', '4', );
const areEqual4= result4 === "All three numbers are equal. And equal: 4";
console.log(areEqual4);

const result5 = TheLargestNumber('6', '8', '8', );
const areEqual5= result5 === "The 2st and 3nd numbers are largest and equal: 8";
console.log(areEqual5);

const result6 = TheLargestNumber('7', '8', '7', );
const areEqual6= result6 === "The 2nd number is largest and equal: 8";
console.log(areEqual6);

const result7 = TheLargestNumber('6', '8.7', '8', );
const areEqual7= result7 === "The 3rd number is largest and equal: 7.7";
console.log(areEqual7);