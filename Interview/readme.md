# 复习知识点

# CSS
## 什么是Web 语义化
Web语义化是指使用恰当语义的html标签、class类名等内容，让页面具有良好的结构与含义，从而让人和机器都能快速理解网页内容。语义化的web页面一方面可以让机器在更少的人类干预情况下收集并研究网页的信息，从而可以读懂网页的内容，然后将收集汇总的信息进行分析，结果为人类所用；另一方面它可以让开发人员读懂结构和用户以及屏幕阅读器（如果访客有视障）能够读懂内容。 简单来说就是利于 SEO，便于阅读维护理解。

总结起来就是：
- 正确的标签做正确的事情
- 页面内容结构化
- 无CSS样子时也容易阅读，便于阅读维护和理解
- 便于浏览器、搜索引擎解析。 利于爬虫标记、利于SEO

## HTML5 新增了哪些新特性
1. 语意特性,添加<header><nav>等标签
2. 多媒体， 用于媒介播放的 video 和 audio 元素
3. 图像效果，用于绘画的 canvas 元素，svg元素等
4. 离线 & 存储,对本地离线存储的更好的支持,localStore,Cookies等
5. 设备兼容特性 ，HTML5提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，

## CSS3 新增了哪些属性
CSS3中新添加了很多选择器，解决了很多之前需要用javascript才能解决的布局问题。
新增了transition、transform和animation动画相关的特性
边框新增分别是border-radius、box-shadow和border-image。
CSS3新增了几个关于背景的属性，分别是background-clip、background-origin、background-size和background-break。

## 清除浮动
清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。
父级使用overflow: auto
浮动元素后加一个元素：.clear{clear:both; height: 0; line-height: 0; font-size: 0}
.outer :after {clear:both;content:'.'}

## BFC
Block Formatting Context是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。
满足下列条件之一就可触发BFC
1. 根元素，即HTML元素
2. float的值不为none
3. overflow的值不为visible
4. display的值为inline-block、table-cell、table-caption
5. position的值为absolute或fixed

自适应两栏布局
可以阻止元素被浮动元素覆盖
可以包含浮动元素——清除内部浮动
解决margin 重叠

## display:inline-block 什么时候会显示间隙
display inline-block 标签之间存在空格或换行会造成间隙
解决方法：给父元素加上font-size: 0;

## rem和em的区别:
rem是相对于根元素（html）的字体大小，而em是相对于其父元素的字体大小
em最多取到小数点的后三位

## 垂直居中的方法

## CSS moudle
CSS 没有作用域，相同的会覆盖，css moudle 它将为css提供默认的局部作用域

## 重绘（Repaint）和回流（Reflow）
重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
回流是布局或者几何属性需要改变就称为回流。
回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

## js 延迟加载
- defer和async都是使script异步加载的意思，当都没有设置这个属性的时候，html的加载会被阻塞等着script加载完成和执行完成后再渲染页面。
- 当设置了async时，异步加载，一旦加载完成则阻塞html渲染，进行执行，而且如果有多个script标签则谁先加载完，谁先执行。
- 当设置了defer时，异步加载，不会阻塞html，待html渲染完毕后再进行script执行。

### js
## 变量基本类型
JS 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象（Object）。
null undefined boolean string number symbol object

typeof只能区分值类型，对引用类型无能为力，只能区分函数function
NaN表示特殊的非数字值，null是空指针，并没有指向任何一个地址
typeof能区分的五种基本类型：string、boolean、number、undefined、symbol和函数function

typeof [] => object
typeof {} => object
typeof null => object
typeof undefined => undefined

使用Object.prototype.toString.call 判断是否是数组、对象、null
Object.prototype.toString.call([]) => [object Array]
Object.prototype.toString.call({}) => [object Object]
Object.prototype.toString.call(null) => [object Null]

## this
this，函数执行的上下文，可以通过apply，call，bind改变this的指向。对于匿名函数或者直接调用的函数来说，this指向全局上下文（浏览器为window，nodejs为global），剩下的函数调用，那就是谁调用它，this就指向谁。es6的箭头函数，箭头函数的指向取决于该箭头函数声明的位置，在哪里声明，this就指向哪里。

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
- 注意内存泄漏，特别是在IE 浏览器中。在函数末尾应将没用的变量清除
- 闭包会在父函数外部，改变父函数内部变量的值。

## new
调用new 做下面四种操作
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
http://es6.ruanyifeng.com/#docs/class-extends
原型链: JavaScript 规定，所有对象都有自己的原型对象（prototype）。一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：对象到原型，再到原型的原型……
如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype，即Object构造函数的prototype属性。也就是说，所有对象都继承了Object.prototype的属性。这就是所有对象都有valueOf和toString方法的原因，因为这是从Object.prototype继承的。
那么，Object.prototype对象有没有它的原型呢？回答是Object.prototype的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。

## __proto__ 和 prototype 的区别
prototype 是一个显式的原型属性，只有函数才拥有该属性。
所有通过函数 new 出来的对象，这个对象都有一个 __proto__ 指向这个函数的 prototype。
当你想要使用一个对象（或者一个数组）的某个功能时：如果该对象本身具有这个功能，则直接使用；如果该对象本身没有这个功能，则去 __proto__ 中找。
显式原型：用来实现基于原型的继承与属性的共享。
隐式原型：构成原型链，同样用于实现基于原型的继承。
实例的 __proto__ 属性等于其构造函数的prototype属性。

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

## es5 继承
1. 原型链法
function A() {}
function B() {}
B.prototype = new A();
原型链实现继承最大的问题是：当原型中存在引用类型值时，实例可以修改其值。

2.
function A(){}
function B(){
  A.call(this);
}

3.
function A() {}
function B() {
  A.call(this)
}
B.prototype = new A();

## es6 继承
class Point {
}

class ColorPoint extends Point {
  constructor() {
    super()
  }
}

## 事件 Dom
事件冒泡:
事件捕获:
addEventListener 第三个参数useCapture boolean 值决定了是捕获事件还是冒泡事件
事件代理: 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上。优点：节省内存，不需要给子节点注销事件
事件委托(事件委托): 事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

## Ajax 跨域
浏览器的同源策略，当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”
[JavaScript 九种跨域方式实现原理](https://my.oschina.net/u/3972188/blog/3009785)
- jsonp
- cors (服务端设置Access-Control-Allow-Origin)
- nginx 反向代理
- postMessage
- websocket
- window.name + iframe

## HTTP 协议
- HTTP1.0定义了三种请求方法： GET、POST 和 HEAD
- HTTP1.1新增了五种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 、 CONNECT

2开头 （请求成功）表示成功处理了请求的状态代码。
- 200   （成功）  服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。

3开头 （请求被重定向）表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向。
- 301   （永久移动）  请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
- 302   （临时移动）  服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。
- 304   （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。

4开头 （请求错误）这些状态代码表示请求可能出错，妨碍了服务器的处理。
- 401   （未授权） 请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。
- 403   （禁止） 服务器拒绝请求。
- 404   （未找到） 服务器找不到请求的网页。

5开头（服务器错误）这些状态代码表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错。
- 500   （服务器内部错误）  服务器遇到错误，无法完成请求。
- 503   （服务不可用） 服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。

五层网络模型
- 物理层：主要定义物理设备如何传输数据，硬件设备
- 数据链路层：在通信的实体间简历数据链路链接
- 网络层：为数据在节点之间传输创建逻辑链路
- 传输层：像用户提供可靠的端到端(End-to-End)服务传输层向高层屏蔽了下层数据通信的细节
- 应用层:为应用软件提供了很多服务 构建于TCP协议之上 屏蔽了网络传输相关细节

TCP（Transmisson Control Protocol）
TCP 是面向连接的（需要先建立连接）；
每一条 TCP 连接只能有两个端点，每一条 TCP 连接只能是一对一；
TCP提供可靠交付的服务。通过TCP连接传送的数据，无差错、不丢失、不重复、并且按序到达；
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
[浏览器缓存机制](https://juejin.im/post/5c749f6851882562934ca96e)
cache-control：
![cache-control 取值](https://user-gold-cdn.xitu.io/2019/2/26/169278ea8f67956f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

缓存验证
last-modified配合if-modified-since
etage配合if-none-match

强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存，主要过程如下：
![缓存](https://user-gold-cdn.xitu.io/2018/4/19/162db635ed5f6d26?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

Etag 的出现主要是为了解决 Last-Modified 存在的问题：
Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内被修改多次的话，它将不能准确标注文件的最后修改时间；
如果本地打开缓存文件，即使没有对文件进行修改，但 Last-Modified 却改变了，导致文件没法使用缓存；

## 什么是三次握手
https://github.com/jawil/blog/issues/14
![三次握手](https://user-gold-cdn.xitu.io/2019/2/20/1690b50f3f373982?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
第一次握手：
建立连接时，向服务器发出连接请求报文，这是报文首部中的同部位 SYN = 1，同时选择一个初始序列号 seq = x ，客户端进程进入了 SYN-SENT （同步已发送状态）状态,等待服务器确认；
第二次握手：
服务器收到 syn 包后，如果同意连接，则发出确认报文; 确认报文 ACK = 1，SYN = 1，确认号是 ack = x + 1，同时也要为自己初始化一个序列号 seq = y，此时服务器进程进入了 SYN-RCVD（同步收到）状态；
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
HTTPS链接的创建过程，以及为什么HTTPS就是安全的 https://wetest.qq.com/lab/view/110.html

## 从输入URL到页面加载发生了什么
1. DNS解析
2. TCP连接
3. 发送HTTP请求
4. 服务器处理请求并返回HTTP报文
5. 浏览器解析渲染页面
6. 连接结束

渲染过程：
根据 HTML 结构生成 DOM 树
根据 CSS 生成 CSSOM
将 DOM 和 CSSOM 整合形成 RenderTree
根据 RenderTree 开始渲染和展示
遇到<script>时，会执行并阻塞渲染

https://segmentfault.com/a/1190000006879700

## cookie localStorage sessionStorage
生命周期：
cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效
localStorage：除非被手动清除，否则将会永久保存。
sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。
cookie 读写
document.cookie = 'token=123; expires= Fri, 31 Dec 9999 23:59:59 GMT; path=/'

存放数据大小：
cookie：4KB左右
localStorage和sessionStorage：可以保存5MB的信息。

http请求：
cookie：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
localStorage和sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信

易用性：
cookie：需要程序员自己封装，源生的Cookie接口不友好
localStorage和sessionStorage：源生接口可以接受，亦可再次封装来对Object和Array有更好的支持

## 排序
![排序对比](https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 事件循环
宏任务(Macrotasks)和微任务(Microtasks) 都属于上述的异步任务中的一种，他们分别有如下API：
macrotasks: setTimeout, setInterval, setImmediate, I/O, UI rendering
microtasks: process.nextTick, Promise, MutationObserver
任务队列中，在每一次事件循环中，macrotask只会提取一个执行，而microtask会一直提取，直到microtask队列为空为止。也就是说如果某个microtask任务被推入到执行中，那么当主线程任务执行完成后，会循环调用该队列任务中的下一个任务来执行，直到该任务队列到最后一个任务为止。而事件循环每次只会入栈一个macrotask,主线程执行完成该任务后又会检查microtasks队列并完成里面的所有任务后再执行macrotask的任务。

## 前端模块化
避免命名冲突(减少命名空间污染)
更好的分离, 按需加载
更高复用性
高可维护性

CommonJS 规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了AMD CMD解决方案。
AMD 规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。不过，AMD规范开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅。
CMD 规范与AMD规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在Node.js中运行。不过，依赖SPM 打包，模块的加载逻辑偏重
ES6模块化 ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

## ES6 增加了哪些新特性
块级作用域的let和const
箭头函数 =>
模版表达式
Promise
类
默认参数
拆包表达式
改进的对象表达式
模块化

### 操作系统
## 进程和线程
进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）
线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

## 堆、栈、队列的区别
堆
堆中主要存放用new构造的对象和数组
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
- View：界面
- Model：数据模型
- ViewModel：作为桥梁负责沟通 View 和 Model

在 MVVM 中，最核心的也就是数据双向绑定，Vue 中使用的是数据劫持。

## Vue 生命周期
总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

创建前/后
在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。
在created阶段，vue实例的数据对象data有了，$el还没有。

载入前/后
在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。
在mounted阶段，vue实例挂载完成，data.message成功渲染。

更新前/后
当data变化时，会触发beforeUpdate和updated方法。

销毁前/后
在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

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

## vuex
vuex 是专门为 vue 开发的数据状态管理模式。组件之间数据状态共享
state、getter、mutation、action、module

 ## Vue 和React 的区别
相同点：
React采用特殊的JSX语法，Vue.js在组件开发中也推崇编写.vue特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用。
中心思想相同：一切都是组件，组件实例之间可以嵌套。
都提供合理的钩子函数，可以让开发者定制化地去处理需求。
都不内置列数AJAX，Route等功能到核心包，而是以插件的方式加载。
在组件开发中都支持mixins的特性。

不同点：
React依赖Virtual DOM,而Vue.js使用的是DOM模板。React采用的Virtual DOM会对渲染出来的结果做脏检查。
Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作DOM。

## webpack
配置：devtool、entry、 output、module、resolve、plugins、externals
常用的loader: style-loader、css-loader、less-loader、sass-loader、babel-loader
常用的plugin：UglifyJsPlugin 压缩和混淆代码。CommonsChunkPlugin提高打包效率，将第三方库和业务代码分开打包。

## 性能优化
1. 减少HTTP 请求数
2. 减少DNS 查询
3. 使用CDN 和 缓存 开启GZIP
4. CSS 放到头部 JS 放到底部



