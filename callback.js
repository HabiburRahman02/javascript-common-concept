function greetings(greetingHandler, name) {
    greetingHandler(name);
}

function greetingHandler(name) {
    console.log('Good morning', name)
}

function greetNight(name){
    console.log('Good Night', name)
}
greetings(greetingHandler, 'Harry page');
greetings(greetingHandler, 'Harry Brook');
greetings(greetNight, 'tom braddy')
