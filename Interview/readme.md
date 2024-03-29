# 复习知识点

# CSS

## 什么是 Web 语义化

Web 语义化是指使用恰当语义的 html 标签、class 类名等内容，让页面具有良好的结构与含义，从而让人和机器都能快速理解网页内容。语义化的 web 页面一方面可以让机器在更少的人类干预情况下收集并研究网页的信息，从而可以读懂网页的内容，然后将收集汇总的信息进行分析，结果为人类所用；另一方面它可以让开发人员读懂结构和用户以及屏幕阅读器（如果访客有视障）能够读懂内容。 简单来说就是利于 SEO，便于阅读维护理解。

总结起来就是：

- 正确的标签做正确的事情
- 页面内容结构化
- 无 CSS 样子时也容易阅读，便于阅读维护和理解
- 便于浏览器、搜索引擎解析。 利于爬虫标记、利于 SEO

## HTML5 新增了哪些新特性

1. 语意特性,添加 header、nav 等标签
2. 多媒体， 用于媒介播放的 video 和 audio 元素
3. 图像效果，用于绘画的 canvas 元素，svg 元素等
4. 离线 & 存储,对本地离线存储的更好的支持,localStore,Cookies 等
5. 设备兼容特性 ，HTML5 提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，

## CSS3 新增了哪些属性

CSS3 中新添加了很多选择器，解决了很多之前需要用 javascript 才能解决的布局问题。
新增了 transition、transform 和 animation 动画相关的特性
边框新增分别是 border-radius、box-shadow 和 border-image。
CSS3 新增了几个关于背景的属性，分别是 background-clip、background-origin、background-size 和 background-break。

## 清除浮动

清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。
父级使用 overflow: auto
浮动元素后加一个元素：.clear{clear:both; height: 0; line-height: 0; font-size: 0}
.outer :after {clear:both;content:'.'}

## BFC

Block Formatting Context 是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个 BFC 中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。
满足下列条件之一就可触发 BFC

1. 根元素，即 HTML 元素
2. float 的值不为 none
3. overflow 的值不为 visible
4. display 的值为 inline-block、table-cell、table-caption
5. position 的值为 absolute 或 fixed

自适应两栏布局
可以阻止元素被浮动元素覆盖
可以包含浮动元素——清除内部浮动
解决 margin 重叠

## display:inline-block 什么时候会显示间隙

display inline-block 标签之间存在空格或换行会造成间隙
解决方法：给父元素加上 font-size: 0;

## rem 和 em 的区别:

rem 是相对于根元素（html）的字体大小，而 em 是相对于其父元素的字体大小
em 最多取到小数点的后三位

## 垂直居中的方法

## CSS moudle

CSS 没有作用域，相同的会覆盖，css moudle 它将为 css 提供默认的局部作用域

## 重绘（Repaint）和回流（Reflow）

重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
回流是布局或者几何属性需要改变就称为回流。
回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

CSS

- 避免使用 table 布局。
- 尽可能在 DOM 树的最末端改变 class。
- 避免设置多层内联样式。
- 将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。
- 避免使用 CSS 表达式（例如：calc()）。

JavaScript

- 避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。
- 避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。
- 也可以先为元素设置 display: none，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发重绘和回流。
- 避免频繁读取会引发回流/重绘的属性(offsetLeft)，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。
- 使用 CSS3 的 transition 也可以获得不错的性能。

## js 延迟加载

- async 和 defer 都是使 script 异步加载的意思，当都没有设置这个属性的时候，html 的加载会被阻塞等着 script 加载完成和执行完成后再渲染页面。
- 当设置了 async 时，异步加载，一旦加载完成则阻塞 html 渲染，进行执行，而且如果有多个 script 标签则谁先加载完，谁先执行。
- 当设置了 defer 时，异步加载，不会阻塞 html，待 html 渲染完毕后 DOMContentLoaded 之前再进行 script 执行。

### js

## 变量基本类型

JS 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象（Object）。
null undefined boolean string number symbol object

typeof 只能区分值类型，对引用类型无能为力，只能区分函数 function
NaN 表示特殊的非数字值，null 是空指针，并没有指向任何一个地址
typeof 能区分的五种基本类型：string、boolean、number、undefined、symbol 和函数 function

typeof [] => object
typeof {} => object
typeof null => object
typeof undefined => undefined

使用 Object.prototype.toString.call 判断是否是数组、对象、null
Object.prototype.toString.call([]) => [object Array]
Object.prototype.toString.call({}) => [object Object]
Object.prototype.toString.call(null) => [object Null]

## javascript 作用域

[作用域](https://segmentfault.com/a/1190000014980841)
作用域产生于程序源代码中定义变量的区域，在程序编码阶段就确定了。javascript 中分为全局作用域(Global context： window/global )和局部作用域（Local Scope , 又称为函数作用域 Function context）。简单讲作用域就是当前函数的生成环境或者上下文，包含了当前函数内定义的变量以及对外层作用域的引用。

作用域：
window/global Scope 全局作用域
function Scope 函数作用域
Block Scope 块作用域（ES6）
eval Scope eval 作用域

## this

this，函数执行的上下文，可以通过 apply，call，bind 改变 this 的指向。对于匿名函数或者直接调用的函数来说，this 指向全局上下文（浏览器为 window，nodejs 为 global），剩下的函数调用，那就是谁调用它，this 就指向谁。es6 的箭头函数，箭头函数的指向取决于该箭头函数声明的位置，在哪里声明，this 就指向哪里。

## 闭包

函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

```
function A() {
  let a = 1
  function B() {
    console.log(a)
  }
  return B
}
```

使用闭包的优点

- 能使一个变量长期驻留在内存中
- 避免全局变量的污染
- 可以构造私有成员

使用闭包的注意事项

- 注意内存泄漏，特别是在 IE 浏览器中。在函数末尾应将没用的变量清除
- 闭包会在父函数外部，改变父函数内部变量的值。

## new

调用 new 做下面四种操作

1. 新生成了一个对象
2. 链接到原型
3. 绑定 this
4. 返回新对象

```
var a = new A();

// 1. 首先创建一个空对象
var o = new Object();
// 2. 将空对象的原型赋值为构造器函数的原型
o.__proto__ = A.prototype;
// 3. 更改构造器函数内部this，将其指向新创建的空对象
A.call(o);

function create() {
  let obj = new Object()
  // 获得构造函数
  let Con = [].shift.call(arguments)
  // 链接到原型
  obj.__proto__ = Con.prototype
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}
```

## 原型和原型链

https://github.com/mqyqingfeng/Blog/issues/2
http://es6.ruanyifeng.com/#docs/class-extends
原型链: JavaScript 规定，所有对象都有自己的原型对象（prototype）。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：对象到原型，再到原型的原型……
如果一层层地上溯，所有对象的原型最终都可以上溯到 Object.prototype，即 Object 构造函数的 prototype 属性。也就是说，所有对象都继承了 Object.prototype 的属性。这就是所有对象都有 valueOf 和 toString 方法的原因，因为这是从 Object.prototype 继承的。
那么，Object.prototype 对象有没有它的原型呢？回答是 Object.prototype 的原型是 null。null 没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是 null。

## **proto** 和 prototype 的区别

prototype 是一个显式的原型属性，只有函数才拥有该属性。
所有通过函数 new 出来的对象，这个对象都有一个 \_\_proto\_\_ 指向这个函数的 prototype。
当你想要使用一个对象（或者一个数组）的某个功能时：如果该对象本身具有这个功能，则直接使用；如果该对象本身没有这个功能，则去 \_\_proto\_\_ 中找。
显式原型：用来实现基于原型的继承与属性的共享。
隐式原型：构成原型链，同样用于实现基于原型的继承。
实例的 \_\_proto\_\_ 属性等于其构造函数的 prototype 属性。

```
function GirlFriend () {
  this.name = "Alice";
}
//现在我设置GirlFriend()这个函数的prototype属性
//一般来说直接用匿名的对象就行，我这里是为了方便理解，
//先定义一个hand对象再把hand赋值给GirlFriend()的prototype
var hand = {
  whichOne: "right hand",
  someFunction: function(){
    console.log("not safe for work.");
  }
};
GirlFriend.prototype = hand;

//这个时候，我们可以用GirlFriend()作为构造函数，构造出myObject对象
var myObject = new GirlFriend();
console.log(myObject.__proto__ === GirlFriend.prototype) //true
```

## es5 继承

1. 原型链法

```
function Parent() {}
function Child() {}
Child.prototype = new Parent();
```

优点
继承了父类的模板，又继承了父类的原型对象

问题：

- 当原型中存在引用类型值时，实例可以修改其值。
- 在创建 Child 的实例时，不能向 Parent 传参

2. 借用构造函数(经典继承)

```
function Parent(){}
function Child(){
  Parent.call(this);
}
```

Parent.prototype.getName = function () {
return this.name;
}
console.log(child.getName()); // 会报错。不能继承原型属性或者方法

优点：

- 避免了引用类型的属性被所有实例共享
- 可以在 Child 中向 Parent 传参

缺点：

- 只能继承父类的实例属性和方法，不能继承原型属性或者方法
- 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

3. 组合继承

```
function Parent() {}
function Child() {
  Parent.call(this)
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
```

方式一和方式二的问题都解决了，但是从上面代码我们也可以看到 Parent 执行了两次，造成了多构造一次的性能开销

4. 原型式继承 借助 Object.create 方法实现普通对象的继承

```
let parent4 = {
  name: "parent4",
  friends: ["p1", "p2", "p3"],
  getName: function() {
    return this.name;
  }
};
let child4 = Object.create(parent4);
```

因为 Object.create 方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能

5. 寄生式继承: 寄生式继承在上面继承基础上进行优化，利用这个浅拷贝的能力再进行增强，添加一些方法

```
let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function() {
        return this.name;
    }
};

function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
        return this.friends;
    };
    return clone;
}

let person5 = clone(parent5);
```

6. 寄生组合式继承

```
function clone (parent, child) {
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

```

## es6 继承

```
class Parent {
}

class Child extends Parent {
  constructor() {
    super()
  }
}
```

## for of 和 for in 的区别

1. 推荐在循环对象属性的时候，使用 for...in,在遍历数组的时候的时候使用 for...of。
2. for...in 循环出的是 key，for...of 循环出的是 value
3. 注意，for...of 是 ES6 新引入的特性。修复了 ES5 引入的 for...in 的不足
4. for...of 不能循环普通的对象，需要通过和 Object.keys()搭配使用

## 事件 Dom

事件冒泡:
事件捕获:
addEventListener 第三个参数 useCapture boolean 值决定了是捕获事件还是冒泡事件
事件代理: 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上。优点：节省内存，不需要给子节点注销事件
事件委托(事件委托): 事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

## Ajax 跨域

浏览器的同源策略，当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”
[JavaScript 九种跨域方式实现原理](https://juejin.cn/post/6844903767226351623)

- jsonp
- cors (服务端设置 Access-Control-Allow-Origin)
- nginx 反向代理
- postMessage
- websocket
- window.name + iframe

## HTTP 协议

- HTTP1.0 定义了三种请求方法： GET、POST 和 HEAD
- HTTP1.1 新增了五种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 、CONNECT

1. 已接受需继续处理
   100 Continue

2 开头 （请求成功）表示成功处理了请求的状态代码。

- 200 （成功） 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。

3 开头 （请求被重定向）表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向。

- 301 （永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
- 302 （临时移动） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。
- 304 （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。
- 307 临时重定向 与 302 相反，当重新发出原始请求时，不允许更改请求方法。
- 308 永久重定向

4 开头 （请求错误）这些状态代码表示请求可能出错，妨碍了服务器的处理。

- 401 （未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
- 403 （禁止） 服务器拒绝请求。
- 404 （未找到） 服务器找不到请求的网页。

5 开头（服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错。

- 500 （服务器内部错误） 服务器遇到错误，无法完成请求。
- 503 （服务不可用） 服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。

## GET 与 POST 的区别

Get 请求能缓存，Post 不能
Post 相对 Get 安全一点点，因为 Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。
Post 可以通过 request body 来传输比 Get 更多的数据，Get 没有这个技术
URL 有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
Post 支持更多的编码类型且不对数据类型限制

五层网络模型

- 物理层：主要定义物理设备如何传输数据，硬件设备
- 数据链路层：在通信的实体间简历数据链路链接
- 网络层：为数据在节点之间传输创建逻辑链路
- 传输层：像用户提供可靠的端到端(End-to-End)服务传输层向高层屏蔽了下层数据通信的细节
- 应用层:为应用软件提供了很多服务 构建于 TCP 协议之上 屏蔽了网络传输相关细节

TCP（Transmisson Control Protocol）
TCP 是面向连接的（需要先建立连接）；
每一条 TCP 连接只能有两个端点，每一条 TCP 连接只能是一对一；
TCP 提供可靠交付的服务。通过 TCP 连接传送的数据，无差错、不丢失、不重复、并且按序到达；
TCP 提供全双工通信。TCP 允许通信双方的应用进程在任何时候都能发送数据。TCP 连接的两端都设有发送缓存和接收缓存，用来临时存放双方通信的数据；
面向字节流。TCP 中的“流”（Stream）指的是流入进程或从进程流出的字节序列。

UDP（User Datagram Protocol）
UDP 是无连接的；
UDP 是尽最大努力交付，即不保证可靠交付，因此主机不需要维持复杂的链接状态；
UDP 是面向报文的；
UDP 没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如直播，实时视频会议等）；
UDP 支持一对一、一对多、多对一和多对多的交互通信；
UDP 的首部开销小，只有 8 个字节，比 TCP 的 20 个字节的首部要短。

对称加密与非对称加密
对称密钥加密是指加密和解密使用同一个密钥的方式，这种方式存在的最大问题就是密钥发送问题，即如何安全地将密钥发给对方；
而非对称加密是指使用一对非对称密钥，即公钥和私钥，公钥可以随意发布，但私钥只有自己知道。发送密文的一方使用对方的公钥进行加密处理，对方接收到加密信息后，使用自己的私钥进行解密。
由于非对称加密的方式不需要发送用来解密的私钥，所以可以保证安全性；但是和对称加密比起来，非常的慢.
综上：我们还是用对称加密来传送消息，但对称加密所使用的密钥我们可以通过非对称加密的方式发送出去。

## 缓存

[浏览器缓存机制](https://juejin.cn/post/6947936223126093861)
cache-control：
![cache-control 取值](https://user-gold-cdn.xitu.io/2019/2/26/169278ea8f67956f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

缓存验证
last-modified 配合 if-modified-since
etag 配合 if-none-match

强制缓存优先于协商缓存进行，若强制缓存(Expires 和 Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since 和 Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回 304，继续使用缓存，主要过程如下：
![缓存](https://user-gold-cdn.xitu.io/2018/4/19/162db635ed5f6d26?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

Etag 的出现主要是为了解决 Last-Modified  存在的问题：
Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内被修改多次的话，它将不能准确标注文件的最后修改时间；
如果本地打开缓存文件，即使没有对文件进行修改，但 Last-Modified 却改变了，导致文件没法使用缓存；

## 什么是三次握手

https://github.com/jawil/blog/issues/14
![三次握手](https://user-gold-cdn.xitu.io/2019/2/20/1690b50f3f373982?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
第一次握手：
建立连接时，向服务器发出连接请求报文，这是报文首部中的同部位 SYN = 1，同时选择一个初始序列号 seq = x ，客户端进程进入了 SYN-SENT （同步已发送状态）状态,等待服务器确认；
第二次握手：
服务器收到 SYN 包后，如果同意连接，则发出确认报文; 确认报文 ACK = 1，SYN = 1，确认号是 ack = x + 1，同时也要为自己初始化一个序列号 seq = y，此时服务器进程进入了 SYN-RCVD（同步收到）状态；
第三次握手：
客户端收到服务器的 SYN+ACK 包，要向服务器给出确认。确认报文的 ACK = 1，ack = y + 1，自己的序列号 seq = x + 1，此时，TCP 连接建立，客户端进入 ESTABLISHED （已建立连接）状态。
完成三次握手，客户端与服务器开始传送数据。

注：
seq:"sequance" 序列号；
ack:"acknowledge" 确认号；
SYN:"synchronize" 请求同步标志；
ACK:"acknowledge" 确认标志；
FIN:"Finally" 结束标志。
三次握手防止了服务器端的一直等待而浪费资源。
HTTPS 链接的创建过程，以及为什么 HTTPS 就是安全的 https://wetest.qq.com/lab/view/110.html

## 从输入 URL 到页面加载发生了什么

1. DNS 解析
2. TCP 连接
3. 发送 HTTP 请求
4. 服务器处理请求并返回 HTTP 报文
5. 浏览器解析渲染页面
6. 连接结束

渲染过程：
根据 HTML 结构生成 DOM 树
根据 CSS 生成 CSSOM
将 DOM 和 CSSOM 整合形成 RenderTree
根据 RenderTree 开始渲染和展示
遇到 script 标签时，会执行并阻塞渲染

https://segmentfault.com/a/1190000006879700

## cookie localStorage sessionStorage indexDB

生命周期：
cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效
localStorage：除非被手动清除，否则将会永久保存。
sessionStorage：仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。
cookie 读写
document.cookie = 'token=123; expires= Fri, 31 Dec 9999 23:59:59 GMT; path=/'

存放数据大小：
cookie：4KB 左右
客户端 Cookie 数量最多为 300 个，每个不能超过 4kb, 每个 web 站点设置的 cookie 数量不能超过 20 个。
localStorage 和 sessionStorage：可以保存 5MB 的信息。LocalStorage 2.5MB 到 10MB 之间（各家浏览器不同）

http 请求：
cookie：每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题
localStorage 和 sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信

易用性：
cookie：需要程序员自己封装，源生的 Cookie 接口不友好
localStorage 和 sessionStorage：源生接口可以接受，亦可再次封装来对 Object 和 Array 有更好的支持

IndexedDB 就是浏览器提供的本地数据库，它可以被网页脚本创建和操作。IndexedDB 允许储存大量数据，提供查找接口，还能建立索引。这些都是 LocalStorage 所不具备的。就数据库类型而言，IndexedDB 不属于关系型数据库（不支持 SQL 查询语句），更接近 NoSQL 数据库。

优点
储存量理论上没有上限
所有操作都是异步的，相比 LocalStorage 同步操作性能更高，尤其是数据量较大时
原生支持储存 JS 的对象
是个正经的数据库，意味着数据库能干的事它都能干

特点

- 键值对储存：IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。
- 异步：IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。
- 支持事务：IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。
- 同源限制： IndexedDB 受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。
- 储存空间大：IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。
- 支持二进制储存：IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。

## 排序

![排序对比](https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 事件循环

宏任务(Macrotasks)和微任务(Microtasks) 都属于上述的异步任务中的一种，他们分别有如下 API：
macrotasks: setTimeout, setInterval, setImmediate, I/O, UI rendering
microtasks: process.nextTick, Promise, MutationObserver
任务队列中，在每一次事件循环中，macrotask 只会提取一个执行，而 microtask 会一直提取，直到 microtask 队列为空为止。也就是说如果某个 microtask 任务被推入到执行中，那么当主线程任务执行完成后，会循环调用该队列任务中的下一个任务来执行，直到该任务队列到最后一个任务为止。而事件循环每次只会入栈一个 macrotask,主线程执行完成该任务后又会检查 microtasks 队列并完成里面的所有任务后再执行 macrotask 的任务。

## 前端模块化

避免命名冲突(减少命名空间污染)
更好的分离, 按需加载
更高复用性
高可维护性

CommonJS 规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了 AMD CMD 解决方案。
AMD 规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。不过，AMD 规范开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅。
CMD 规范与 AMD 规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在 Node.js 中运行。不过，依赖 SPM 打包，模块的加载逻辑偏重
ES6 模块化 ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

import，export，export default 属于 ES6 规范
import 是在编译过程中执行
import 命令具有提升效果，会提升到整个模块的头部，首先执行。（是在编译阶段执行的）
import 是静态执行的

require，exports，module.exports 是 AMD 规范
require 是运行时调用，所以 require 理论上可以运用在代码的任何地方

ES6 模块与 CommonJS 模块的差异

1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

- CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
- ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的 import 有点像 Unix 系统的“符号连接”，原始值变了，import 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

- 运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
- 编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import 时采用静态命令的形式。即在 import 时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。

3. CommonJS 具有缓存。在第一次被加载时，会完整运行整个文件并输出一个对象，拷贝（浅拷贝）在内存中。下次加载文件时，直接从内存中取值

## ES6 增加了哪些新特性

- 块级作用域的 let 和 const
  ES5 中只有全局作用域和函数作用域，存在变量提升；内层变量覆盖外层变量；变量泄露，成为全局变量；循环体中的变量问题

- 数组扩展
  Array.from() : 将伪数组对象或可遍历对象转换为真数组。如函数的 arguments 对象，以及大多数 DOM 元素集，还有字符串。

Array.of(v1, v2, v3) : 将一系列值转换成数组。解决 new Array(2), new Array(1, 2) 参数不一致生成的数组不一致问题。

数组实例的 find() 和 findIndex()
eg: [1, 4, -5, 10].find((n) => n < 0)

数组实例的 includes() eg:[1, 2, 3].includes(2) // true

数组实例的 entries()，keys() 和 values()

- 箭头函数 =>
  缩减代码、改变 this 指向
  使用时注意：
  函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
  不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。
  可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
  不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

- rest 参数
  引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用 arguments 对象了。
  const numbers = (...nums) => nums;
  numbers(1, 2, 3, 4, 5)// [1,2,3,4,5]

- 展开运算符
  let values = [25,50,75, 100]
  console.log(Math.max(...values));

var defaultColors = ["red","greed"];
var favoriteColors = ["orange","yellow"];
var fallColors = ["fire red","fall orange"];
console.log(["blue","green",...fallColors,...defaultColors,...favoriteColors]

- 解析构值
  let node = {type:"Identifier", name:"foo"},
  type = "Literal",name = 5; // es5 赋值
  ({type,name} = node);// 使用解构来分配不同的值

const names = ["Henry","Bucky","Emily"];
const [name1,name2,name3] = names;

- 模版表达式
  它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
  模板字符串中嵌入变量和函数，需要将变量名写在${}之中。

- class extends
- Promise
- Iterator 和 for...of 循环
- ES6 模块化

[ES6 核心特性](https://github.com/ljianshu/Blog/issues/10)

## 箭头函数的优点或特点

箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 this，arguments，super 或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。

- 更简短的函数并且不绑定 this
- 不绑定 arguments
- 箭头函数没有 prototype 属性，不能使用 new 操作符、不能使用 prototype 属性

## Promise

Promise 简单说就是一个容器，里面保存着某个未来才会结束的事件的结果
特点：1. promise 的状态不受外部影响；2. promise 的状态一旦改变，就不会再变了。

### 操作系统

## 进程和线程

进程是 cpu 资源分配的最小单位（是能拥有资源和独立运行的最小单位）
线程是 cpu 调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

## 堆、栈、队列的区别

堆
堆中主要存放用 new 构造的对象和数组
优势：可以动态的分配内存的大小，生存期也不必事先告诉编译器，因为它是在运行时动态分配内存的。
缺点：由于要在运行时动态分配内存，存取速度比较慢。
栈
栈中主要存放一些基本类型的变量和对象引用类型。
优势：存取速度比较快，仅次于寄存器，栈数据可以共享。
缺点：栈中的数据大小和生存周期必须是确定的，缺乏灵活性。
队列
是设计程序中常用的一种数据结构，采用“先进先出”的存储结构，类似于队列。数据元素只能从队尾进入，从队首取出。在此队列中，数据元素可以随意增减，但是数据元素的次序不会更改。每次都是取出队首的元素，后面的元素会整体向前移动一位。队列便利数据的速度要快的多

# 安全

## XSS 攻击

XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。
防御：
最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义

## CSRF 攻击

CSRF 就是利用用户的登录态发起恶意请求。
防御：
Get 请求不对数据进行修改
不让第三方网站访问到用户 Cookie
阻止第三方网站请求接口
请求时附带验证信息，比如验证码或者 token

# 框架

## MVVM

MVVM 由以下三个内容组成

- Model：数据模型 也可以在 Model 中定义数据修改和操作的业务逻辑
- View：界面，它负责将数据模型转化成 UI 展现出来
- ViewModel：作为桥梁负责沟通 View 和 Model

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。
ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
在 MVVM 中，最核心的也就是数据双向绑定，Vue 中使用的是数据劫持。

## Vue 生命周期

总共分为 8 个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

创建前/后
在 beforeCreated 阶段，vue 实例的挂载元素$el和数据对象data都为undefined，还未初始化。
在created阶段，vue实例的数据对象data有了，$el 还没有。

载入前/后
在 beforeMount 阶段，vue 实例的$el 和 data 都初始化了，但还是挂载之前为虚拟的 dom 节点，data.message 还未替换。
在 mounted 阶段，vue 实例挂载完成，data.message 成功渲染。

更新前/后
当 data 变化时，会触发 beforeUpdate 和 updated 方法。

销毁前/后
在执行 destroy 方法后，对 data 的改变不会再触发周期函数，说明此时 vue 实例已经解除了事件监听以及和 dom 的绑定，但是 dom 结构依然存在

简单的双向绑定
<input id="input"/>
const data = {};
const input = document.getElementById('input');
Object.defineProperty(data, 'text', {
set(value) {
input.value = value;
this.value = value;
}
});
input.onchange = function(e) {
data.text = e.target.value;
}

Object.definePrototype(data, 'text', {
set(value) {
input.value = value
}
})

## Vue 的组件通信

1. props
2. $attrs、$listener
3. emit、on、off
4. EventBus
5. Vuex

父子 props/event parent/children ref provide/inject
兄弟 bus vuex
跨级 bus vuex provide.inject

## Vue diff

## vuex

vuex 是专门为 vue 开发的数据状态管理模式。组件之间数据状态共享
state、getter、mutation、action、module

## Vue 和 React 的区别

https://github.com/lihongxun945/myblog/issues/21
相同点：
React 采用特殊的 JSX 语法，Vue.js 在组件开发中也推崇编写.vue 特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用。
中心思想相同：一切都是组件，组件实例之间可以嵌套。
都提供合理的钩子函数，可以让开发者定制化地去处理需求。
都不内置列数 AJAX，Route 等功能到核心包，而是以插件的方式加载。
在组件开发中都支持 mixins 的特性。

- 两者都是用于创建 UI 的 JavaScript 库；
- 两者都快速轻便；
- 都有基于组件的架构；
- 都是用虚拟 DOM；
- 都可放入单个 HTML 文件中，或者成为更复杂 webpack 设置中的模块；
- 都有独立但常用的路由器和状态管理库；

不同点：

1. 模板渲染方式不同
   React 是通过 JSX 来渲染模板，而 Vue 是通过扩展的 HTML 来进行模板的渲染。React 通过原生 JS 实现模板中的常见语法，比如说条件啊、循环啊、三元运算符啊等，都是通过 JS 语法实现。而 Vue 是在和组件代码分离的单独模板中，通过指令 v-if、v-for 等实现。

2. 数据流不同
   ![](https://user-gold-cdn.xitu.io/2018/7/26/164d4c84b44edbf2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
   在 Vue2.x 中，只能 parent -> Child <-> DOM 的形式，而 React 只能单向传递，React 一直提倡的是单向数据流，数据主要从父节点传递到子节点（通过 props）。如果顶层（父级）的某个 props 改变了，React 会重渲染所有的子节点。我们只能通过 setState 来改变状态。

3. 组件注册不同
   Vue 组件分为全局注册和局部注册，在 react 中都是通过 import 相应组件，然后模版中引用；

4. Vue 增加的语法糖 computed 和 watch，而在 React 中需要自己写一套逻辑来实现；

5. 监听数据变化的实现原理不同
   Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能
   React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的 VDOM 的重新渲染

[Vue 问得最多的面试题](https://zhuanlan.zhihu.com/p/53703176)

# webpack

配置：devtool、entry、 output、module、resolve、plugins、externals
常用的 loader: style-loader、css-loader、less-loader、sass-loader、babel-loader
常用的 plugin：UglifyJsPlugin 压缩和混淆代码。CommonsChunkPlugin 提高打包效率

[关于 webpack 的面试题总结](https://zhuanlan.zhihu.com/p/44438844)

## 有哪些常见的 Loader？他们是解决什么问题的？

babel-loader：把 ES6 转换成 ES5
css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件
url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去
eslint-loader：通过 ESLint 检查 JavaScript 代码
vue-loader: 解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理。
source-map-loader：加载额外的 Source Map 文件，以方便断点调试
image-loader：加载并且压缩图片文件
style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。

## 有哪些常见的 Plugin？他们是解决什么问题的？

define-plugin：定义环境变量
commons-chunk-plugin：提取公共代码
uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码

## babel 转译的具体过程如下

ES6 代码输入 -> babylon 进行解析 -> 得到 AST -> plugin 用 babel-traverse 对 AST 树进行遍历转译 -> 得到新的 AST 树 -> 用 babel-generator 通过 AST 树生成 ES5 代码

babel、babel-polyfill 的区别
babel-polyfill：模拟一个 es6 环境，提供内置对象如 Promise 和 WeakMap
引入 babel-polyfill 全量包后文件会变得非常大。它提供了诸如 Promise，Set 以及 Map 之类的内置插件，这些将污染全局作用域,可以编译原型链上的方法。
babel-plugin-transform-runtime & babel-runtime：转译器将这些内置插件起了别名 core-js，这样你就可以无缝的使用它们，并且无需使用 polyfill。但是无法编译原型链上的方法
runtime 编译器插件做了以下三件事：

当你使用 generators/async 函数时，自动引入 babel-runtime/regenerator 。
自动引入 babel-runtime/core-js 并映射 ES6 静态方法和内置插件。
移除内联的 Babel helper 并使用模块 babel-runtime/helpers 代替。

## webpack 的构建流程是什么?从读取配置到输出文件这个过程尽量说全

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
确定入口：根据配置中的 entry 找出所有的入口文件；
编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

Webpack 的构建流程可以分为以下三大阶段：

初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。
编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。

## 如何利用 webpack 来优化前端性能？（提高性能和体验）

用 webpack 优化前端性能是指优化 webpack 的输出结果，让打包的最终结果在浏览器运行快速高效。

压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用 webpack 的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩 JS 文件， 利用 cssnano（css-loader?minimize）来压缩 css
利用 CDN 加速。在构建过程中，将引用的静态资源路径修改为 CDN 上对应的路径。可以利用 webpack 对于 output 参数和各 loader 的 publicPath 参数来修改资源路径
删除死代码（Tree Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动 webpack 时追加参数--optimize-minimize 来实现
提取公共代码。

## 如何提高 webpack 的构建速度？

缩小文件搜索范围 Loader 时可以通过 test 、 include 、 exclude 三个配置项来命中 Loader 要应用规则的文件。 为了尽可能少的让文件被 Loader 处理，可以通过 include 去命中只有哪些文件需要被处理。
多入口情况下，使用 CommonsChunkPlugin 来提取公共代码
通过 externals 配置来提取常用库
利用 DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引用但是绝对不会修改的 npm 包来进行预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。
使用 Happypack 实现多线程加速编译
使用 webpack-uglify-parallel 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采用了多核并行压缩来提升压缩速度
使用 Tree-shaking 和 Scope Hoisting 来剔除多余代码

## 如何解决 Webpack 打包慢的问题

[Webpack 打包构建太慢解决方法](https://cloud.tencent.com/developer/article/1326950)

1. 使用监听模式或热更新热替换
   webpack 支持监听模式，此时需要重新编译时就可以进行增量构建，增量构建是很快的，基本不到一秒或几秒之内就能重新编译好
2. babel-loader 开启缓存
3. 不需要打包编译的插件库换成全局 script 标签引入的方式
4. 提取公共代码 使用 CommonsChunkPlugin 提取公共的模块，可以减少文件体积，也有助于浏览器层的文件缓存
5. 使用异步的模块加载 使用 require.ensure 来设置哪些模块需要异步加载，webpack 会将它打包到一个独立的 chunk 中

## 怎么配置单页应用？怎么配置多页应用？

单页应用可以理解为 webpack 的标准模式，直接在 entry 中指定单页应用的入口即可，这里不再赘述

多页应用的话，可以使用 webpack 的 AutoWebPlugin 来完成简单自动化的构建，但是前提是项目的目录结构必须遵守他预设的规范。 多页应用中要注意的是：

每个页面都有公共的代码，可以将这些代码抽离出来，避免重复的加载。比如，每个页面都引用了同一套 css 样式表
随着业务的不断扩展，页面可能会不断的追加，所以一定要让入口的配置足够灵活，避免每次添加新页面还需要修改构建配置

## 柯里化

柯里化又称为部分求值，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回一个新的函数的技术，新函数接受余下参数并返回运算结果。

## 性能优化

1. 减少 HTTP 请求数
   CSS/JS 合并打包
   使用 base64 格式的图片
   小图标等用 iconfont 代替、使用雪碧图
2. 减少静态资源的体积，开启 GZIP
3. 使用 CDN 和 缓存
4. CSS 放到头部 JS 放到底部

SPA 首屏优化

1. 将 vue、 vue-router、 vuex、element-ui 从 vendor.js 中分离出来，使用 CDN 资源引入。并在 webpack bulid 配置 externals
2. 使用 UI 库 如 Element UI 尽量按需加载
3. 根据路由拆分 —— 减少初始加载体积，利用异步加载方式，在路由注册时提供异步拉取组件的方法，仅在需要进入对应路由时，对应组件才会被加载进来。
4. Nginx 开启 gzip

[前端性能优化的七大手段](https://www.cnblogs.com/xiaohuochai/p/9178390.html)

## SPA 网站的优缺点

1. 良好的交互体验，用户不需要重新刷新页面，获取数据也是通过 Ajax 异步获取，页面显示流畅。
2. 良好的前后端工作分离模式。
3. 减轻服务器压力: 服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍

4. SEO 难度较高
5. 前进、后退管理
6. 初次加载耗时多

## vue-router 有哪几种导航钩子?

全局导航钩子
router.beforeEach(to, from, next),
router.beforeResolve(to, from, next),
router.afterEach(to, from ,next)
组件内钩子
beforeRouteEnter,
beforeRouteUpdate,
beforeRouteLeave
单独路由独享组件
beforeEnter
