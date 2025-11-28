function displayMessage(name) {
    console.log(`Hello, ${name}!`);
    
}

function getUserInput(callback){
    setTimeout(()=> {
        const u="Alice";
        callback(u)
    }, 1000)
}

getUserInput(displayMessage)