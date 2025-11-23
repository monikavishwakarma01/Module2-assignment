
 //////Q.8

let nums = [10, 3, 7, 20, 13, 2];

   let num2= nums.map( a= a*a).filter(a%2==0 ).reduce().sort()
  

   console.log(num2)




//////Q.9

 
 function displayCar(callbackFn){
   callbackFn()
 }
 function displayTruck(callbackFn){
   callbackFn()
 }
 function displayBike(callbackFn){
   callbackFn()
 }


  function  vehicleInfo( callbackFn) {
   callbackFn()
   displayBike()
   displayCar()
   displayTruck()
};



vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)



 