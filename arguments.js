function sum(a, b, c) {
    console.log(arguments)
    const args = [...arguments];
    const total = a + b + c;
    return total;
}

const result = sum(23, 45, 34, 67, 43);
console.log(result);
console.log(sum.length)
