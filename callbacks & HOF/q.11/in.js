function processProducts(products){
   let names = products.map(function(item){
      return item.name;
   })

   products.forEach(function(item){
      if(item.price>50){
         console.log(`${item.name} is above $50`)
      }
      else{
         console.log(`${item.name} is below $50`)
      }   
   });
        return names
}

processProducts([{ 
   name: "Laptop", price: 1000 }, 
   { name: "Mouse", price: 20 }
   ])

