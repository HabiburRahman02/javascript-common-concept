// many ways to get undefined

// variable er man set na korle
let myName;
// console.log(myName)


// function theke return na korle
const second = (a, b) => {
    const total = a + b;
}
const result = second(2, 3);
// console.log(result)


// parameter na pass korle;
const third = (a, b, c, d) => {
    const add = a + b + c + d;
    console.log(a, b, c, d)
}
// third(3,7)


// return er somoy specific vabe kicu na bole dile
const fourth = (a, b) => {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const total2 = fourth(-2, 5);
// console.log(total2)


// kuno akta propery khujtesi jeta object a nai
const user = { name: 'habib', age: 78 }
// console.log(user.name, user.age, user.salary)

// index range er vaire khujle seta undefined dibe
const fifth = [34, 56, 23, 12];
console.log(fifth[0], fifth[1], fifth[6]);

// kuno akta upadan ke delete korle
delete fifth[0]
console.log(fifth[0], fifth[1], fifth[6]);


// undefined er typeof undefined
// null er typeof object

