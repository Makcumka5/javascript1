//1
let n = 100;

nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        console.log(i);
    }

//2
const cart = [
    ['T-Shirt', 150, 4],
    ['Bag', 700, 1],
    ['Jacket', 1200, 7],
    ['Jeans', 900, 3],
];

let sum = 0;
for (const sum of cart) {
    console.log(sum);


}

//3
for (i = 0; i <= 9; console.log(i++)) { // здесь пусто};
}

//4

for (var x = 0; x < 20; x++) {
    var letter = "";
    for (var y = 0; y <= x; y++) {
        letter += "x";
    }
    console.log(letter);
}