var MyPromise = require('./Promise').MyPromise;



var myp = new MyPromise((resolve,reject)=>{  
	setTimeout(()=>{reject(222)},1000)
}).then((value)=>{console.log('value: ',value)},(err)=>{console.log('err: ',err)});

