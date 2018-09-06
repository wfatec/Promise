
在之前的学习中我们跟着Q的作者走了一遍其实现Promise的思路历程，不经收获满满。但由于这只是一个实现思路，因此在实际使用时我们更希望最后的Promise是一个构造函数方法，以new的方式实现调用，也更符合我们的变成习惯。接下来我们就以ES6的class来实现我们自己的Promise类

# Promise基础实现

首先实现一个Promise的class结构：
```js
/**
 * Promise内部仅包含三种状态：PENDING/FULFILLED/REJECTED，
 * 且状态只能由PENDING转为FULFILLED或者PENDING转为REJECTED
 */
var PENDING = 0,
FULFILLED = 1,
REJECTED = 2;

/**
 * 实现Promise基本功能
 */
class MyPromise {
    constructor(onFulfilled){
        this.status = PENDING;
        this.pending = [];
        this.value = null;
        this.resolve = this.resolve.bind(this);
        this.then = this.then.bind(this);
        this.reject = this.reject.bind(this);
        onFulfilled();
    }

    resolve(){}

    then(){}

    reject(){}
}
```