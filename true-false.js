/* 
truthy value:
1. true
2. any positive or negative number other than 0
3. any string other than empty string
4. {}
5. []

falsy value:
1. false
2. 0    
3. '' empty string
4. null 
5. undefined
*/
const x = [23, 23];
if (x) {
    console.log('truthy')
}
else {
    console.log('falsy')
}


// optional 
// check falsy use !
const y = undefined;
if (!y) {
    console.log("falsy value")
}

// check truthy
let z = 34;
if (!!z) {
    console.log('truth value')
}