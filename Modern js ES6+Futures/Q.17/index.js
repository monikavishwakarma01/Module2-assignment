//////  (a)

const arr1=[1, 2, 3];
const arr2=[4, 5];

const finalArr=[...arr1, ...arr2]
console.log(finalArr);


////// (b)

function sum(...nums) {
    console.log(nums)
}
console.log(sum(1,2,3))