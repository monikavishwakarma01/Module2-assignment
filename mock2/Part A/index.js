///////     Q.1

  let arr1 =[10, 20, 30]
  let arr2 =[40, 50]

   let finalArr = [...arr1, ...arr2]
   console.log(finalArr);



   /////// Q.2

let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };

let profile ={...person, ...extra}
console.log(profile)



////////// Q.3



/////Q.4

let numbers = [10, 20, 30, 40, 50];

let {a}= numbers
console.log(numbers)



////// Q.5


let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};

let {city,lat, lng} = user
console.log(user);



////// Q.6

 const multiply = (a,b) =>(a*b);
 console.log(multiply);


//////// Q.7 
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

console.log(emp?.details?.profile?.role);


