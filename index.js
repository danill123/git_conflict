const arithmetic = (value, number) => {
    return Math.random(value) + Math.random(number + Math.random());
}

let array = [1, 2, 3, 10, 5, 6];

for (let index = 0; index < array.length; index++) {
    console.log(arithmetic(index, index));
}

return;