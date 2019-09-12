function min () {
    const numbers = [...arguments];
    let minimum = numbers[0];

    numbers.forEach((a) => {
        if (a < minimum) {
            minimum = a;
        }
    });

    return minimum;
}

const minTwo = (numbers) => numbers.sort((a, b) => a - b)[0];

console.log(min(10,5,3,-5,6));
console.log(minTwo([10,5,3,-5,6, 100, -100, 6,53, '333']));
