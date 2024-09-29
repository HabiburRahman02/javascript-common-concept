print80();
print10()
print20();
for (var i = 0; i < 5; i++) {
    console.log(i)
}
// console.log('outside',i) 

function print20() {
    console.log('inside print:', 20);
}

const print10 = () => {
    console.log("print 10 in arrow func", 10)
}

const print80 = function () {
    console.log('print', 80)
}

