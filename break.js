// for (let i = 0; i <= 100; i++) {
//     if (i > 5) {
//         break;
//     }
//     console.log(i);
// }

let count = 0;
while (count < 10) {
    if(count > 4){
        console.log('tor sathe break up')
        break;
    }
    console.log('value of count', count);
    count++;
}

console.log('Life masti after break up') 