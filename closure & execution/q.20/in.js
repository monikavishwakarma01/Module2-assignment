
function createCounter(){
       
    let count=0;

    function increment() {
        count++
        console.log(`Current count: ${count}`)
    }

    function decrement() {
        count--
        console.log(`Current count: ${count}`)
    }

    return {increment, decrement}
}


const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
