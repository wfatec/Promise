
/**
 * 延时函数，保证callback在下一个循环执行
 * @param {func} callback 回调函数
 */
var enqueue = function (callback) {
    //process.nextTick(callback); // NodeJS
    setTimeout(callback, 1); // Naïve browser solution
};

/**
 * Promise内部仅包含三种状态：PENDING/FULFILLED/REJECTED，
 * 且状态只能由PENDING转为FULFILLED或者PENDING转为REJECTED
 */
var PENDING = 0,
    FULFILLED = 1,
    REJECTED = 2

/**
 * MyPromise构造函数
 * @param {func} callback 
 * @param {func} errback 
 */
var MyPromise = function (fulfillFunc) {
    this.value=null;
    this.status = PENDING;
    this.pending = [];
    if (typeof fulfillFunc === 'function') {
        fulfillFunc.bind(this,this.resolve,this.reject)
    } else {
        this.reject('The input is not function!')
    }
    
};

MyPromise.prototype.resolve = function (_value) {
    console.log('resolve1: ',_value)
    if (this.status === PENDING) {
        this.value = ref(_value);
        for (var i = 0, ii = this.pending.length; i < ii; i++) {
            // XXX
            enqueue(function () {
                this.value.then.apply(this.value, this.pending[i]);
            });
        }
        this.status = FULFILLED;
    }
}

MyPromise.prototype.then = function (_callback, _errback) {
    var newPromise = new MyPromise(function(){});
    _callback = _callback || function (value) {
        return value;
    };
    _errback = _errback || function (reason) {
        return reject(reason);
    };
    var callback = function (value) {
        newPromise.resolve(_callback(value));
    };
    var errback = function (reason) {
        newPromise.resolve(_errback(reason));
    };
    if (this.status === PENDING) {
        this.pending.push([callback, errback]);
    } else {
        // XXX
        enqueue(function () {
            value.then(callback, errback);
        });
    }
    return newPromise;
}

MyPromise.prototype.reject = function (reason) {
    if (this.status === PENDING) {
        this.value = ref(_value);
        for (var i = 0, ii = this.pending.length; i < ii; i++) {
            // XXX
            enqueue(function () {
                this.pending[i][1](reason);
            });
        }
        this.status = REJECTED;
    }
};

MyPromise.prototype.constructor = MyPromise;

MyPromise.resolve = function(_value){
    return new MyPromise(function(resolve,reject){
        resolve(_value)
    })
}

/**
 * 将任意类型的值封装为promise对象
 * @param {*} value 
 */
var ref = function (value) {
    if (value && value.then)
        return value;
    return {
        then: function (callback) {
            var result = new MyPromise(function(){});
            // XXX
            enqueue(function () {
                result.resolve(callback(value));
            });
            return result;
        }
    };
};

exports={
    MyPromise
};