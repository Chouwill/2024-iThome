// 加減乘除

let a1 = 1 + 1;
let a2 = 2 - 1;
let a3 = 2 * 6;
let a4 = 6 / 2;

console.log("加", a1);
console.log("減", a2);
console.log("乘", a3);
console.log("除", a4);

//  特殊運算子轉型
let b1 = 1 + "2";
console.log(b1); //  輸出: 12

let b2 = "4" + 2;
console.log(b2); //  輸出: 42

let b3 = 6 - "2";
console.log(b3); //  輸出: 4

let b4 = "7" - 4;
console.log(b4); //  輸出: 3

let c1 = "50" - 0;
console.log(typeof c1, c1); //  輸出: number 50
