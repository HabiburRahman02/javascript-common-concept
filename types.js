//  primitive type
// number string boolean null undefined

// non-primitive
// array object

let a = 6;
let b = 3;
console.log(a, b)
b = 10
console.log(a, b)

let user1 = { position: 'developer' }
let user2 = user1
user2.position = 'kamla' // partial change
user2 = {position: 'engineer'} //reassign
console.log(user1, user2)

