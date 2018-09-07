# Promise实现

关于Promise的使用讲解已经有很多资料，但对其实现原理却大多语焉不详，为了彻底理解Promise，我决定从头来过，逐步通过自己的理解来实现一个Promise，主要分为如下几个过程来学习：

## 1. 根据Q的作者的设计思路，对其实现思想进行精读和理解 --- [The design of Promise by Q](https://github.com/wfatec/Promise/tree/master/Promise0) 

## 2. 通过ES6的Class方法自己实现一个基础的Promise类 --- [MyPromise-Basic](https://github.com/wfatec/Promise/tree/master/Promise1)

## 3. 实现链式调用 --- [MyPromise-Chain](https://github.com/wfatec/Promise/tree/master/Promise2)

## 4. 提高稳定性 --- [MyPromise-Robust](https://github.com/wfatec/Promise/tree/master/Promise3)

## 5. 传递Promise --- [MyPromise-Promise_transfer](https://github.com/wfatec/Promise/tree/master/Promise4)