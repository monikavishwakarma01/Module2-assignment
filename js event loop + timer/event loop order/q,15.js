console.log("Begin");
 setTimeout(() => { console.log("Timeout Task"); }, 0); 
 Promise.resolve().then(() => { console.log("Promise Task"); }); 
 console.log("End");

 /* output order follow this squence order because
  line no 1 and 4 are the synchronous code so its print fist then 
  line no 3 is print afer synchronous code because this is microtask queue and 
  the last print line no 2 because this is macrotask queue.*/