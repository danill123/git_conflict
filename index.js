const arithmetic = (value, number) => {
    return value + number;
}

let array = [1, 2, 3, 10, 5, 6];

for (let index = 0; index < array.length; index++) {
    console.log(arithmetic(index, index));
}

return;