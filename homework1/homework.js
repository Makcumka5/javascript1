// 'use strict';

// //1
// var a = 1,
//     b = 1,
//     c, d;
// c = ++a;
// console.log(c); // 2   префиксная форма
// d = b++;
// console.log(d); // 1   значение переменной до увеличения, постфиксная
// c = (2 + ++a);
// console.log(c); // 5   2 + (2 + 1)
// d = (2 + b++);
// console.log(d); // 4   2 + (2 (+1 не учитывается))
// console.log(a); // 3   два раза ++а
// console.log(b); // 3   два раза b++ (теперь видно значение)

// //2
// var a = 2;
// var x = 1 + (a *= 2);
// console.log(x); // 5  *= это сокращенный оператор, полностью он будет выглядеть x = 1 + (a = a * 2 )

// //3
// let a = 75,
//     b = -53,
//     x;
// if (a > 0 && b > 0) {
//     x = a - b;
//     console.log(x);
// } else if (a < 0 && b < 0) {
//     x = a * b;
//     console.log(x);
// } else if (a > 0 && b < 0 || a < 0 && b > 0) {
//     x = a + b;
//     console.log(x);
// }

// //4
// function recursion(x) {
//     if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое число больше 0';
//     if (x === 1) return '1';
//     return recursion(x - 1) + ' ' + x;
// }
// var a = +prompt("Enter nomber from 1 to 15");
// switch (a) {
//     case 1:
//         console.log(a++);
// }
// console.log(recursion(15));

// //5
// var a = 5;
// var b = 6;

// function plus(a, b) {
//     return a + b;
// }

// function minus(a, b) {
//     return a - b;
// }

// function div(a, b) {
//     return a / b;
// }

// function mult(a, b) {
//     return a + b;
// }

// //6
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case 'сложение':
//             return arg1 + arg2;
//             break;
//         case 'вычитание':
//             return arg1 - arg2;
//             break;
//         case 'деление':
//             return arg1 / arg2;
//             break;
//         case 'умножение':
//             return arg1 * arg2;
//             break;
//     }
// }