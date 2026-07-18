// 1, 2, 3, 4, 5
// sum = 15

// step-1: show 1 to 10 numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
//     console.log(i, sum);
// }


let sum = 0
for (let i = 0; i <= 10; i++) {

    console.log(i + '+' + sum + '=' + (sum + i))
    sum = sum + i
}