## 写出5种css隐藏元素的办法
1.opacity: 0;
2.visibility: hidden;
3.display: none;
4.position: absolute;
top: -9999px;
left: -9999px;
5.clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);

## 函数防抖与节流
函数防抖: 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
函数节流: 指定时间间隔内只会执行一次任务；

## http http请求头有哪些属性
Cookie Cache-Control Accept Accept-Encoding If-Modified-Since If-None-Match Referer User-Agent


## flex

## call apply bind 区别

obj=[{id:1,parent:null,child:2},{id:12,parent:1,child:3},{id:13,parent:2,child:null}] 采用递归转化成
let obj2 = {obj:{
    id:1,
    parent:null,
    child:{
        id:2,
        parent:1,
        child:{
            id:3,
            parent:2,
            child:null
        }
    }
}}

找出数组中的重复元素并输出
深拷贝与浅拷贝各是什么？如何实现一个深拷贝？
如何合并两个数组？
编写一个输出日志的函数，并在并在输入内容前加（app）前缀，eg：log("hello World) => (app)Hello World log("hello,World) => (app)Hello World
设计模式
柯里化
JS中出现内存泄漏的原因。
1. 闭包
2. 没有切断Dom节点上的事件
3. 对象的相互引用
4. 过大的数组，无节制的循环

flex常见的属性
vue里面的虚拟dom是怎么回事
vue的mixin方法
实现一个事件发布订阅类，其实就是eventEmitter
