// pass by value when primitive
const value1 = 5;
const value2 = 8;
function multiply(num1, num2) {
    num2 = 20;
    const multi = num1 * num2;
    return multi
}

// console.log('num2:', value2)
// const result = multiply(value1, value2);
// console.log(result)
// console.log('num2:', value2)


// non-primitive then pass by reference
const partner1 = {name: 'starc', wife: 'lopes'}
const partner2 = {name: 'Zampa', wife: 'konika'}

function lifePartner(couple1,couple2){
 couple1.wife = 'andres raw'
}

console.log(partner1)
lifePartner(partner1,partner2);
console.log(partner1)
