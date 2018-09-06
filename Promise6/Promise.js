/**
 * Promise内部仅包含三种状态：PENDING/FULFILLED/REJECTED，
 * 且状态只能由PENDING转为FULFILLED或者PENDING转为REJECTED
 */
var PENDING = 0,
FULFILLED = 1,
REJECTED = 2;

class MyPromise {
    constructor(onFulfilled){
        this.status = PENDING;
        this.pending = [];
        this.value = null;
        this.resolve = this.resolve.bind(this);
        this.then = this.then.bind(this);
        this.reject = this.reject.bind(this);
        onFulfilled&&onFulfilled(this.resolve,this.reject);      
    }

    resolve(value){
        if (this.status === PENDING) {
            this.value = value;
            for (var index = 0,length = this.pending; index < this.pending.length; index++) {
                var callback = this.pending[index][0];
                /**
                 * 延时执行,确保then函数注册成功
                 */
                setTimeout(function(){
                    callback(this.value);
                },1)                     
            }
            this.status = FULFILLED;
        }      
    }
    /**
     * 实现then的链式调用
     * @param {func} _callback 
     * @param {func} _errback 
     */
    then(_callback,_errback){
        var _callback = _callback||function(){return this.value};
        var newPromise = new MyPromise();
        var callback = function(value){
            newPromise.resolve(_callback(value))
        }
        if (this.status === PENDING) {
            this.pending.push([callback,_errback])          
        }else{
            callback(this.value)
        }
        return newPromise;
    }

    reject(message){
        if (this.status === PENDING) {
            for (var index = 0,length = this.pending; index < this.pending.length; index++) {
                var errback = this.pending[index][1];
                errback(message);                 
            }
            this.status = REJECTED;
        }
    }
}

exports.MyPromise = MyPromise;