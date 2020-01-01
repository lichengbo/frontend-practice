## 拼多多C端 一面 电话面试（50分钟）
- Vue 双向绑定原理
- Vue 全家桶简单介绍
- 哪些页面使用了Nuxt 出于什么原因使用，使用后性能优化了多少？
- Vue router 实现原理
- ES6 Babel 怎么转ES5的
- Webpack 简单介绍
- 继承的实现
- 说说作用域
- 性能优化
- 缓存
- 了解 HTTP2.0吗
- HTTP 常见的状态码
- 有没有遇到过内存泄露的场景
  意外的全局变量引起的内存泄漏
  闭包引起的内存泄漏
  被遗忘的定时器或者回调
- 垃圾回收器
- 垂直居中的几种方法
- flex
- 重绘和回流
- BFC
- PC 和移动端开发的区别

 代码题
 1. 将 192.168.1.200 256进制转为10进制
 2. 'aabcsdf' 字符串去重

 ## 个推 电面 40分钟
 - 双向绑定及proxy
 - CSS 选择器权重
 - Web 语义化
 - HTTP 常见状态码
 - Vue 定义变量用computed 和method的区别
  computed是响应式的，methods并非响应式。
  调用方式不一样，computed定义的成员像属性一样访问，methods定义的成员必须以函数形式调用。
  computed是带缓存的，只有其引用的响应式属性发生改变时才会重新计算，而methods里的函数在每次调用时都要执行。
  computed中的成员可以只定义一个函数作为只读属性，也可以定义get/set变成可读写属性，这点是methods中的成员做不到的
 - HTML 和CSS 文件怎么传输的，GIZP 原理
 - Vue css scoped 怎么定义子组件的样式
    使用 >>> 穿透scoped
 - webpack 修改了哪些配置
 - call apply bind 区别
 - 常用的Linux 命令
 - 有用过map 吗
 - 找数组最大值
 - 找两个数组的相同值

## 拼多多A 端 电话面试 37分钟
- Vuex 的使用
- ES6 的新特性
- Promise 实现原理
- 三个promise 怎么在都结束时操作 使用Promise.all
- 如何用单页做成多页应用
- webpack 打包的过程
- webpack怎么指定某个组件单独打包出来 // 使用require.ensure 引用组件
- webpack 打包速度过慢怎么办
- Nuxt SSR 的原理
- gojs 做了哪些 了解gojs 怎么实现绘图的吗
- Sentry 做了哪些，引用CDN js 报错怎样捕获
- Docker 哪些常用命令
- node 中间件了解吗

## 头条一面
- vue-router 原理
- flex flex:1 与 flex-basis
- promise setTimeout 执行顺序、setTimeout 与requestAnimationFrame的区别
- promise then 链式怎么实现的
- promise.all 怎么实现 怎么判断所有promise已经返回了
- ES6 module 和commonJS 的区别
- es5 对象和class 有什么区别
- class static 的作用
- 从头开始配置webpack
- bable怎么编译的，webpack 怎么把文件打到一个且可以区分作用域的
- vue diff
- 设计模式发布订阅
- vue 和 react 的异同点
- new 的过程
- 原生js 发送ajax 请求
- 常见的状态码 304 缓存策略 cache-control 取值及含义
- 页面性能优化

代码：
1. 数组拉平


// 事件的订阅发布模式 Event 类， on 绑定事件， off 解绑事件， trigger 触发事件
class Event {
    constructor() {

    }
    on(eventName, callback) {

    }
    off(eventName, callback) {

    }
    trigger(eventName) {

    }
}

const myEvent = new Event();

myEvent.on('update', () => {
    console.log('update event');
});

myEvent.trigger('update');

myEvent.off('update');

myEvent.trigger('update');

## 淘宝业务部
- nodejs arrayBuffer 了解吗、流怎么理解
- mmpeg 内存泄露了解吗
- webpack publicPath 如何动态配置
- PNG JPEG 和位图的区别，1080P 位图文件大小
- 怎么获取图片的色系
- 快排算法、如何取一堆数中的最大的5个数
- 什么是300ms 延迟
- meta 的viewport 有哪些值
- js 对象和继承怎么实现
- 三列布局 左侧固定100px 右边两列平分怎么实现
- 浏览器的缓存由哪些字段控制
- 跨域
- redux 有什么特点
