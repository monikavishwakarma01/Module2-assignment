//////  1. (a)

console.log(`5+7= ${5+7}`)

////// 1. (b)

console.log(`
    string 1
    string2
    string3
 `)


///////// 1. (c)

const firstName = "John";
const  lastName = "Doe";

console.log(`fullName: ${firstName} ${lastName}`);

////////// 2. (a)
const square = (n) => n*n;
console.log(square(1));

///////  2. (b)



/////// 2. (c)


//////// 3. (a)
const product = { name: "Pen", price: 10 };
 console.log(product);

const details ={...product}
console.log(details);

/////// 3. (b)
 
const a = { x: 1 };
const b = { y: 2 };
 
console.log(...a, ...b);


////// 4. (a)

const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b);

////// 4. (b)

const laptop = { brand: "Dell", ram: "8GB" };
const {brand} = laptop;
console.log(brand)

////// 4. (c)
const info ={}
const {} = info;
console.log()



////// 5. (a)

for (var i = 0; i < 3; i++) {}
console.log(i);// 3


////// 5. (b)

for (let j = 0; j < 3; j++) {}
console.log(j);// j is not defind



///// 5. (c)

//Because const stops you from changing the variable itself.



////// 6. (a)

const speed = (kmph) => { 
const speed = (kmph>60) ? "Fast" : "Normal";
return speed;
}

console.log(speed(39));
console.log(speed(65));


////// 6. (b)
 const  result = age >= 18 ? "Adult" : "Minor"

 //// 7. (a)

 const nums = [1,2,3];
console.log(4,5 , ...nums)

////// 7. (b)
a = ["x","y"];
b = ["z"];


console.log(...a, ...b);


///// 8. (a)

const user = { id: 101, status: "active" };
const { id, status} = user;
console.log(id, status);

///// 8. (b)
const id = 101;
const role = "admin";
const user = {
  id,
  role,
};


/////// 9. (a)

console.log(new Date().toDateString())

///// 9. (b)
const name = "Mahi";
const score=76;
console.log(`Hello ${name}, your score is ${score}/100`)


//// 11. (a)

const arr =[1,2,3];
console.log(arr);
console.log(...arr);

///// 11. (b)
console.log(100, ...arr);


///// 12. (a)

const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user?.address?.city);


///// 12. (b)
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user?.job?.title)