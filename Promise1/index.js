var MyPromise = require('./Promise').MyPromise;



var myp = new MyPromise(function(resolve,reject){  
	setTimeout(()=>{console.log(111);resolve(222)},1000)
}).then((data)=>{console.log(data)})

