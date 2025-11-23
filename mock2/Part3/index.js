////// Q.10

function counter() {
   
    return c()
    
}
const counter2 = c;
const c = counter();
c(); // 1
c(); // 2
c(); // 3




///// Q.11
 

function createWallet( addMoney, callbackFn, amount){
   
    let amount =0;

    function addMoney(amount, callbackFn){
     amount += amount
        callbackFn()
    }
     function checkBalance(amount, callbackFn)
    {
         amount
    callbackFn()
    }

    return 
       addMoney(amount)
       checkBalance();
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700
