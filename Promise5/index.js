var MyPromise = require('./Promise').MyPromise;



var myp = new MyPromise((resolve,reject)=>{  
	setTimeout(()=>{resolve(222)},1000)
}).then((value)=>{console.log('va: ',value); return value+111},(err)=>{console.log('err: ',err)}).then((value)=>{console.log('vava: ',value)});

