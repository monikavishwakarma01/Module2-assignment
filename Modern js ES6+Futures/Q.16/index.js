/////// (a)

const isEven = (n) => n%2 === 0;
console.log(isEven)
console.log(isEven(10))
console.log(isEven(5))



//////  (b)
 
const checkResult = (marks) => { 
  const result=(marks>=35)? "Pass" : "Fail";
return result;
}

console.log(checkResult(39));
console.log(checkResult(15));



////// (c)

const greet = (name) => {
    console.log(`Hello, ${name ? name : "Guest"}`);
};

greet();
greet("mahi")