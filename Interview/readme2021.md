## HTML

### 常用 meta 标签

meta 的可选属性有三个，分别是 http-equiv、name 和 scheme

charset="UTF-8" 描述 HTML 文档的编码类型

<meta name="keywords" content="关键词" />
<meta name="description" content="页面描述内容" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 适配移动端，可以控制视口的大小和比例：

## css

### 选择器及其权重

标签选择器、伪元素选择器：1
类选择器、伪类选择器、属性选择器：10
id 选择器：100
内联样式：1000

优先级
内联 > ID 选择器 > 类选择器 > 标签选择器

继承属性

- 字体系列属性 font, font-size, font-family
- 文本系列属性 text-align, line-height, color
- 元素可见性 visibility
- 列表属性 list-style
- 光标属性 cursor

无继承属性

- display
- 文本属性：vertical-align、text-decoration
- 盒子模型的属性：宽度、高度、内外边距、边框等
- 背景属性：背景图片、颜色、位置等
- 定位属性：浮动、清除浮动、定位 position 等
- 生成内容属性：content、counter-reset、counter-increment
- 轮廓样式属性：outline-style、outline-width、outline-color、outline
- 页面样式属性：size、page-break-before、page-break-after

### css 布局单位

常用的布局单位包括像素（px），百分比（%），em，rem，vw/vh。
em 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认 16px)。(相对父元素的字体大小倍数)。
rem 是 CSS3 新增的一个相对单位，相对于根元素（html 元素）的 font-size 的倍数。作用：利用 rem 可以实现简单的响应式布局，可以利用 html 元素中字体的大小与屏幕间的比值来设置 font-size 的值，以此实现当屏幕分辨率变化时让元素也随之变化。
vw：相对于视窗的宽度，视窗宽度是 100vw；
vh：相对于视窗的高度，视窗高度是 100vh；
vmin：vw 和 vh 中的较小值；
vmax：vw 和 vh 中的较大值；

margin/padding 百分比是相对父元素 width

### flex

关于 flex 常用的属性，我们可以划分为容器属性和容器成员属性
容器属性有：flex-direction、flex-wrap、flex-flow、justify-content、align-items、align-content
容器成员属性：order、flex-grow、flex-shrink、flex-basis、flex、align-self

flex: 1; === flex: 1 1 0;
第一个参数表示: flex-grow 定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大
第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小
第三个参数表示: flex-basis 给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小

flex: 1 = flex: 1 1 0 // 适合等分布局；
flex: 2 = flex: 2 1 0
flex: auto = flex: 1 1 auto // 适合基于内容动态适配的布局；如导航条文字越多的导航占据的宽度越大
flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩

flex:1 和 flex:auto 的区别，可以归结于 flex-basis:0 和 flex-basis:auto 的区别
当设置为 0 时（绝对弹性元素），此时相当于告诉 flex-grow 和 flex-shrink 在伸缩的时候不需要考虑我的尺寸
当设置为 auto 时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑

## JS

### typeof null 为什么是 object

所有值都存储在 32 位的单元中，每个单元包含一个小的 类型标签(1-3 bits) 以及当前要存储值的真实数据。null 的值是机器码 NULL 指针(null 指针的值全是 0)
000: object - 当前存储的数据指向一个对象。
1: int - 当前存储的数据是一个 31 位的有符号整数。
010: double - 当前存储的数据指向一个双精度的浮点数。
100: string - 当前存储的数据指向一个字符串。
110: boolean - 当前存储的数据是布尔值。

### 为什么会有 BigInt 的提案？

JavaScript 中 Number.MAX_SAFE_INTEGER 表示最⼤安全数字，计算结果是 9007199254740991，即在这个数范围内不会出现精度丢失（⼩数除外）。但是⼀旦超过这个范围，js 就会出现计算不准确的情况，这在⼤数计算的时候不得不依靠⼀些第三⽅库进⾏解决，因此官⽅提出了 BigInt 来解决此问题。

### Map 和 WeakMap

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

```
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
```

区别

- WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
- WeakMap 的键名所指向的对象是弱引用，不计入垃圾回收机制。

WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有 keys()、values()和 entries()方法），也没有 size 属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。二是无法清空，即不支持 clear 方法。因此，WeakMap 只有四个方法可用：get()、set()、has()、delete()。

### Promise

Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是 pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者 rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。

promise 的一些问题：
a. 一旦执行，无法中途取消，链式调用多个 then 中间不能随便跳出来
b. 错误无法在外部被捕捉到，只能在内部进行预判处理，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部
c. Promise 内部如何执行，监测起来很难，当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

async/await 优点：
a. 它做到了真正的串行的同步写法，代码阅读相对容易
b. 对于条件语句和其他流程语句比较友好，可以直接写到判断条件里面
c. 处理复杂流程时，在代码清晰度方面有优势

async/await 缺点：
a. 无法处理 promise 返回的 reject 对象，要借助 try…catch…
b. 用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。
c. try…catch…内部的变量无法传递给下一个 try…catch…,Promise 和 then/catch 内部定义的变量，能通过 then 链条的参数传递到下一个 then/catch，但是 async/await 的 try 内部的变量，如果用 let 和 const 定义则无法传递到下一个 try…catch…，只能在外层作用域先定义好。

### ES6 模块与 CommonJS 模块有什么异同？

ES6 Module 和 CommonJS 模块的区别：
CommonJS 是对模块的浅拷⻉，ES6 Module 是对模块的引⽤，即 ES6 Module 只存只读，不能改变其值，也就是指针指向不能变，类似 const；
import 的接⼝是 read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向，可以对 commonJS 对重新赋值（改变指针指向），但是对 ES6 Module 赋值会编译报错。

ES6 Module 和 CommonJS 模块的共同点：
CommonJS 和 ES6 Module 都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变。

### Fetch

fetch 号称是 AJAX 的替代品，是在 ES6 出现的，使用了 ES6 中的 promise 对象。Fetch 是基于 promise 设计的。Fetch 的代码结构比起 ajax 简单多。fetch 不是 ajax 的进一步封装，而是原生 js，没有使用 XMLHttpRequest 对象。
fetch 的优点：

语法简洁，更加语义化
基于标准 Promise 实现，支持 async/await
更加底层，提供的 API 丰富（request, response）
脱离了 XHR，是 ES 规范里新的实现方式

fetch 的缺点：

fetch 只对网络请求报错，对 400，500 都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
fetch 默认不会带 cookie，需要添加配置项： fetch(url, {credentials: 'include'})
fetch 不支持 abort，不支持超时控制，使用 setTimeout 及 Promise.reject 的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
fetch 没有办法原生监测请求的进度，而 XHR 可以

### 闭包

对闭包的理解
闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。

闭包有两个常用的用途；
闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
闭包的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

### es 新特性

es7
Array.prototype.includes
用于快速查找数组中是否包含某个元素，包括 NaN（所以和 indexOf 不一样)。
arr.includes(2, 3) //第二个参数 3 表示数组下标为 3 的项，也即第 4 项开始查找

指数函数的中缀表示法

```
// 用法一：x ** y

let squared = 2 ** 2;//等同于: 2 * 2
let cubed = 2 ** 3;//等同于: 2 * 2 * 2

// 用法二：x **= y

let a = 2;
a **= 2;//等同于: a = a * a;

let b = 3;
b **= 3;//等同于: b = b * b * b;
```

es8
Object.values / Object.entries

es9
async/await
Promise.prototype.finally
Rest / Spread

es10
可选的 catch 变量绑定

之前是 try {} catch(e) {}
ES10 之后可以写成， try {} catch {}//省掉了变量 e

Array.prototype.{flat,flatMap}

es11
可选链操作符 ?.

空值处理
let a = 0;
let v = a ?? "some value";
console.log(v); //>> 0

let b = null;
let z = b ?? "some value";
console.log(z); //>> some value

import()函数
pomise.allSettled
Bigint

### 浅拷贝、深拷贝

浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。

## React

### class 生命周期

挂载阶段的函数
constructor 构造函数，初始化 state，以及为事件处理函数绑定实例
getDeriveStateFromProps 新增的静态方法，返回一个新的 state，或者是 null，静态方法里的，这里面的 this 是指向全局变量
render 渲染函数
componentDidMount 挂载成功后立即调用
更新阶段的函数
getDeriveStateFromProps props 变化或者 state 方法触发
shouldComponentUpdate 判断是否进行更新
render 函数
getSnapshotBeforeUpdate 生命周期方法在更新之前（如：更新 DOM 之前）被调用。此生命周期的返回值将作为第三个参数传递给 componentDidUpdate。（通常不需要，但在重新渲染过程中手动保留滚动位置等情况下非常有用。）
componentDidUpdate 更新后会被立即调用
卸载阶段的函数
componentWillUnmount 卸载函数，组件卸载及销毁之前直接调用，主要用于清除一些在组件生命周期订阅，真实 DOM 事件以及 setTimeout/setinterval 的返回值

异常捕获
componentDidCatch 生命周期方法在后代组件抛出错误后被调用，方法接受两个参数（err，info），分别是错误信息和错误组件的栈信息
getDerivedStateFromError 在后代组件抛出错误后调用，接受一个参数（error）表示具体的错误信息

16.3 版本：引入带 UNSAFE\_前缀的 3 个生命周期函数 UNSAFE_componentWillMount，UNSAFE_componentWillReceiveProps 和 UNSAFE_componentWillUpdate，这个阶段新旧 6 个函数都能用。新引入生命周期函数 getDerivedStateFromProps 和 getSnapshotBeforeUpdate，用来代替 componentWillReceiveProps 和 componentWillUpdate

### setState 同步还是异步

在 react 的合成事件中是异步。在原生事件、setTimeout 中是同步。

### React 事件及合成事件

React 并不是将 click 事件绑定到了 div 的真实 DOM 上，而是在 document 处监听了所有的事件，当事件发生并且冒泡到 document 处的时候，React 将事件内容封装并交由真正的处理函数运行。这样的方式不仅仅减少了内存的消耗，还能在组件挂载销毁时统一订阅和移除事件。

除此之外，冒泡到 document 上的事件也不是原生的浏览器事件，而是由 react 自己实现的合成事件（SyntheticEvent）。因此如果不想要是事件冒泡的话应该调用 event.preventDefault()方法，而不是调用 event.stopProppagation()方法。

实现合成事件的目的如下：
合成事件首先抹平了浏览器之间的兼容问题，另外这是一个跨浏览器原生事件包装器，赋予了跨浏览器开发的能力；
对于原生浏览器事件来说，浏览器会给监听器创建一个事件对象。如果你有很多的事件监听，那么就需要分配很多的事件对象，造成高额的内存分配问题。但是对于合成事件来说，有一个事件池专门来管理它们的创建和销毁，当事件需要被使用时，就会从池子中复用对象，事件回调结束后，就会销毁事件对象上的属性，从而便于下次复用事件对象。

### 虚拟 DOM

官方定义：virtual DOM 是一种编程理念（数据驱动视图），将 ui 虚拟的保持到内存中，并且通过某些库渲染成真实的 dom，这个过程又叫做协调。

总结：virtual dom 是一种编程理念，将 ui 节点抽象成 js 对象。

### react diff

React diff 算法的 3 个策略：
策略一：Web UI 中 DOM 节点跨层级的移动操作特别少。可以忽略不计。
策略二：拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
策略三：对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。

tree diff
对于策略一，React 对树的算法进行了简单明了的优化，即对树进行分层比较，两颗树只会对同一层级的节点进行比较。
既然 DOM 节点跨层级的移动，可以少到忽略不计，针对这种现象，React 通过 updateDepth 对 Virtual DOM 树进行层级控制，只对相同层级的 DOM 节点进行比较，即同一父节点下的所有子节点，当发现该节点已经不存在时，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。这样只需要对树进行一次遍历，便能完成整个 DOM 树的比较。

component diff
如果是同一个类的组件，则会继续往下 diff 运算，如果不是一个类的组件，那么直接删除这个组件下的所有子节点，创建新的。

element 层级
对于比较同一层级的节点们，每个节点在对应的层级用唯一的 key 作为标识。提供了 3 种节点操作，分别为 INSERT_MARKUP(插入)、MOVE_EXISTING (移动)和 REMOVE_NODE (删除)

### react fiber 的机制是怎样的

在 react16 引入 Fiber 架构之前，react 会采用递归对比虚拟 DOM 树，找出需要变动的节点，然后同步更新它们，这个过程 react 称为 reconcilation（协调）。在 reconcilation 期间，react 会一直占用浏览器资源，会导致用户触发的事件得不到响应。
旧版 React 通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止。而 Fiber 实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。
Fiber 核心是实现了一个基于优先级和 requestIdleCallback 的循环任务调度算法。

特性:

- 协调阶段可以把任务拆分成多个小任务
- 协调阶段可随时中止或恢复任务
- 可以根据优先级不同来选择优先执行任务

Fiber 可以理解为是一个执行单元，也可以理解为是一种数据结构。
一个执行单元
Fiber 可以理解为一个执行单元，每次执行完一个执行单元，react 就会检查现在还剩多少时间，如果没有时间则将控制权让出去。
首先 React 向浏览器请求调度，浏览器在一帧中如果还有空闲时间，会去判断是否存在待执行任务，不存在就直接将控制权交给浏览器，如果存在就会执行对应的任务，执行完成后会判断是否还有时间，有时间且有待执行任务则会继续执行下一个任务，否则就会将控制权交给浏览器。
Fiber 可以被理解为划分一个个更小的执行单元，它是把一个大任务拆分为了很多个小块任务，一个小块任务的执行必须是一次完成的，不能出现暂停，但是一个小块任务执行完后可以移交控制权给浏览器去响应用户，从而不用像之前一样要等那个大任务一直执行完成再去响应用户。

一种数据结构
Fiber 还可以理解为是一种数据结构，React Fiber 就是采用链表实现的。每个 Virtual DOM 都可以表示为一个 fiber，如下图所示，每个节点都是一个 fiber。一个 fiber 包括了 child（第一个子节点）、sibling（兄弟节点）、return（父节点）等属性，React Fiber 机制的实现，就是依赖于以下的数据结构。

### react 高阶组件

高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

```
function withSubscription(Component, selectData) {
  retrun class extend React.component {
    constrouctor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props)
      }
    }

    render() {
      retrun <Component data={this.state.data} {...this.props}>
    }
  }
}

// 使用
const BlogWithSubscription = withSubscription(BlogList, (DataSource, props) => {});
```

适用场景：代码复用，逻辑抽象；渲染劫持；State 抽象和更改；Props 更改
优点：逻辑复用、不影响被包裹组件的内部逻辑。
缺点：
hoc 传递给被包裹组件的 props 容易和被包裹后的组件重名，进而被覆盖
嵌套地狱，每一次 HOC 调用都会产生一个组件实例
可以使用类装饰器缓解组件嵌套带来的可维护性问题，但装饰器本质上还是 HOC
包裹太多层级之后，可能会带来 props 属性的覆盖问题

### hooks

在类定义中，我们可以使用到许多 React 特性，例如 state、 各种组件生命周期钩子等，但是在函数定义中，我们却无能为力，因此 React 16.8 版本推出了一个新功能 (React Hooks)，通过它，可以更好的在函数定义组件中使用 React 特性。

优点
1、跨组件复用
2、类定义更为复杂
3、状态与 UI 隔离

注意:
只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用，保证调用顺序的稳定；
只有函数定义组件和 hooks 可以调用 hooks，避免在 类组件 或者 普通函数 中调用；
不能在 useEffect 中使用 useState，React 会报错提示；
类组件不会被替换或废弃，不需要强制改造类组件，两种方式能并存；

为什么不要在循环、条件或嵌套函数中调用 Hook 呢？因为 Hooks 的设计是基于数组实现。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。当然，实质上 React 的源码里不是数组，是链表。

闭包陷阱
https://juejin.cn/post/6972893133243695141#heading-0

```
const FunctionComponent = () => {
  const [value, setValue] = useState(1)
  const log = () => {
    setTimeout(() => {
      alert(value)
    }, 1000);
  }
  return (
    <div>
      <p>FunctionComponent</p>
      <div>value: {value}</div>
      <button onClick={() => setValue(value + 1)}>add</button>
      <br/>
      <button onClick={log}>alert</button>
    </div>
  )
}
```

函数式组件每次 render 都会生产一个新的 log 函数，这个新的 log 函数会产生一个在当前这个阶段 value 值的闭包。
解决闭包陷阱的方法：
使用 useRef,useRef 每次 render 时都会返回同一个引用类型的对象，我们设置值和读取值都在这个对象上处理，这样就能获取到最新的 value 值了。
更新 State 时的回调函数

### 类组件与函数组件

类组件的缺点:
大型组件很难拆分和重构，也很难测试。
业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
组件类引入了复杂的编程模式，比如 render props 和高阶组件。
而类组件也会因大量使用 this 而让人感到困惑

函数组件语法更短、更简单，这使得它更容易开发、理解和测试

### Portals

Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

ReactDOM.createPortal(child, container)
第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。

### react 优化方法

- 使用 React.PureComponent 或者 shouldComponentUpdate 或者 React.memo 来缓存组件的渲染 减少 render 次数
- 事件绑定方式。在 render 方法中使用 bind 和 render 方法中使用箭头函数这两种形式在每次组件 render 的时候都会生成新的方法实例，性能欠缺。
- 根元素使用 Fragment 标签包裹
- 懒加载组件
- 服务端渲染
- 合理的组件拆分、合理使用 hooks
- 谨慎使用 Context
  Context 是跨组件传值的一种方案，但我们需要知道，我们无法阻止 Context 触发的 render。
  不像 props 和 state，React 提供了 API 进行浅比较，避免无用的 render，Context 完全没有任何方案可以避免无用的渲染。
  有几点关于 Context 的建议：
  Context 只放置必要的，关键的，被大多数组件所共享的状态。
  对非常昂贵的组件，建议在父级获取 Context 数据，通过 props 传递进来。

### react 17.x

React 17 介绍 https://juejin.cn/post/6862493682252283912

- 事件委托不再挂到 document 上
  之前多版本并存的主要问题在于 React 事件系统默认的委托机制，出于性能考虑，React 只会给 document 挂上事件监听，DOM 事件触发后冒泡到 document，React 找到对应的组件，造一个 React 事件（SyntheticEvent）出来，并按组件树模拟一遍事件冒泡（此时原生 DOM 事件早已冒出 document 了）。
  因此，不同版本的 React 组件嵌套使用时，e.stopPropagation()无法正常工作（两个不同版本的事件系统是独立的，都到 document 已经太晚了）。为了解决这个问题，React 17 不再往 document 上挂事件委托，而是挂到根 DOM 容器上
- 向浏览器原生事件靠拢
  此外，React 事件系统还做了一些小的改动，使之更加贴近浏览器原生事件：
  onScroll 不再冒泡
  onFocus/onBlur 直接采用原生 focusin/focusout 事件
  捕获阶段的事件监听直接采用原生 DOM 事件监听机制
  注意，onFocus/onBlur 的下层实现方案切换并不影响冒泡，也就是说，React 里的 onFocus 仍然会冒泡（并且不打算改，认为这个特性很有用）
- DOM 事件复用池被废弃
  之前出于性能考虑，为了复用 SyntheticEvent，维护了一个事件池，导致 React 事件只在传播过程中可用，之后会立即被回收释放。React 17 去掉了事件复用机制，因为在现代浏览器下这种性能优化没有意义，反而给开发者带来了困扰
- Effect Hook 清理操作改为异步执行
- render 返回 undefined 报错
- 报错信息透出组件“调用栈”
- 部分暴露出来的私有 API 被删除
  React 17 删除了一些私有 API，大多是当初暴露给 React Native for Web 使用的，目前 React Native for Web 新版本已经不再依赖这些 API
  另外，修改事件系统时还顺手删除了 ReactTestUtils.SimulateNative 工具方法，因为其行为与语义不符，建议换用 React Testing Library

### react 18.x 新特性

### react 面试题汇总 https://segmentfault.com/a/1190000040691198

## 浏览器

缓存：https://juejin.cn/post/6844904021308735502#heading-24

Cache-Control
private： 这种情况就是只有浏览器能缓存了，中间的代理服务器不能缓存。
no-cache: 跳过当前的强缓存，发送 HTTP 请求，即直接进入协商缓存阶段。
no-store：非常粗暴，不进行任何形式的缓存。
s-maxage：这和 max-age 长得比较像，但是区别在于 s-maxage 是针对代理服务器的缓存时间。
值得注意的是，当 Expires 和 Cache-Control 同时存在的时候，Cache-Control 会优先考虑。

### 进程、线程

- 进程是 cpu 资源分配的最小单位（是能够拥有资源和独立运行的最小单位）
- 线程是 cpu 调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

### css 加载是否会阻塞 dom 树渲染

css 是由单独的下载线程异步下载的。css 加载不会阻塞 DOM 树解析（异步加载时 DOM 照常构建）但会阻塞 render 树渲染（渲染时需等 css 加载完毕，因为 render 树需要 css 信息）

### 跨域解决方案

- JSONP
  它主要是利用 script 标签不受浏览器同源策略的限制，可以拿到从其他源传输过来的数据，需要服务端支持。
  兼容性比较好，可用于解决主流浏览器的跨域数据访问的问题。缺点就是仅支持 get 请求，具有局限性，不安全，可能会受到 XSS 攻击。
- postMessage

- CORS
  Cross-Origin Resource Sharing 跨域资源共享，定义了必须在访问跨域资源时，浏览器与服务器应该如何沟通。CORS 背后的基本思想是使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。
  服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。
  Access-Control-Allow-Credentials 设置允许携带 cookie
- Nginx 反向代理
- proxy 代理 目前常用方式,通过服务器设置代理

浏览器根据什么字段判断是否允许跨域？ Access-Control-Allow-origin
跨域的解决方案有哪些？
options 请求了解过吗？
说说 CORS 中的简单请求和复杂请求？
form 表单提交会跨域吗？

### 垃圾回收

通常情况下，垃圾数据回收分为手动回收和自动回收两种策略。

手动回收策略，何时分配内存、何时销毁内存都是由代码控制的。
自动回收策略，产生的垃圾数据是由垃圾回收器来释放的，并不需要手动通过代码来释放。
V8 中会把堆分为新生代和老生代两个区域，新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象。

新生代中用 Scavenge 算法来处理，把新生代空间对半划分为两个区域，一半是对象区域，一半是空闲区域。新加入的对象都会存放到对象区域，当对象区域快被写满时，就需要执行一次垃圾清理操作。

老生代中用 标记 - 清除（Mark-Sweep）和 标记 - 整理（Mark-Compact）的算法来处理。标记阶段就是从一组根元素开始，递归遍历这组根元素(遍历调用栈)，能到达的元素称为活动对象,没有到达的元素就可以判断为垃圾数据.然后在遍历过程中标记，标记完成后就进行清除过程。

### 哪些操作会造成内存泄漏？

1. 由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
2. 设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
3. 获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。
4. 不合理的使用闭包，从而导致某些变量一直被留在内存当中。

## 安全

https://mp.weixin.qq.com/s/rU32rVM6Q-ele01ZB3RFzg
https://github.com/dwqs/blog/issues/68

### XSS

XSS 全称是 Cross Site Scripting，为了与 css 区分开来，所以简称 XSS，中文叫作跨站脚本
XSS 攻击是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。

攻击者对客户端网页注入的恶意脚本一般包括 JavaScript，有时也会包含 HTML 和 Flash。有很多种方式进行 XSS 攻击，但它们的共同点为：将一些隐私数据像 cookie、session 发送给攻击者，将受害者重定向到一个由攻击者控制的网站，在受害者的机器上进行一些恶意操作。
XSS 攻击可以分为 3 类：反射型（非持久型）、存储型（持久型）、基于 DOM。

如何阻止 XSS 攻击？

- 对输入脚本进行过滤或转码。
- 利用 CSP(Content Security Policy，即内容安全策略)
  限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的；
  禁止向第三方域提交数据，这样用户数据也不会外泄；
  提供上报机制，能帮助我们及时发现 XSS 攻击。
  禁止执行内联脚本和未授权的脚本；
- 利用 HttpOnly
  由于很多 XSS 攻击都是来盗用 Cookie 的，因此还可以通过使用 HttpOnly 属性来保护我们 Cookie 的安全。这样子的话，JavaScript 便无法读取 Cookie 的值。这样也能很好的防范 XSS 攻击。

### CSRF

CSRF 全称 Cross-site request forgery，中文为跨站请求伪造 ，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。通常情况下，CSRF 攻击是攻击者借助受害者的 Cookie 骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。

如何预防

- 验证码：CSRF 攻击往往是在用户不知情的情况下构造了网络请求。而验证码会强制用户必须与应用进行交互，才能完成最终请求。因为通常情况下，验证码能够很好地遏制 CSRF 攻击。
- Referer Check：通过 Referer Check，可以检查请求是否来自合法的"源"。
- Token 验证：。要抵御 CSRF，关键在于在请求中放入攻击者所不能伪造的信息，并且该信息不存在于 Cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。

### SQL 注入

禁止目标网站利用动态拼接字符串的方式访问数据库
减少不必要的数据库抛出的错误信息
对数据库的操作赋予严格的权限控制
净化和过滤掉不必要的 SQL 保留字，比如：where, or, exec 等

### 点击劫持

## WebPack

https://juejin.cn/post/6844904094281236487

### 常用的 loader, plugin

file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
image-loader：加载并且压缩图片文件
babel-loader：把 ES6 转换成 ES5
ts-loader: 将 TypeScript 转换成 JavaScript
sass-loader：将 SCSS/SASS 代码转换成 CSS
css-loader：加载 CSS，支持模块化、压缩、文件导入等特性
style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS
eslint-loader：通过 ESLint 检查 JavaScript 代码

webpack-parallel-uglify-plugin: 多进程执行代码压缩，提升构建速度
html-webpack-plugin：简化 HTML 文件创建 (依赖于 html-loader)
mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代 extract-text-webpack-plugin)
webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)

### Loader 和 Plugin 的区别

Loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中。
因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。赋予了 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事。

Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

### loader、plugin 的原理

```
// 导出一个函数，source为webpack传递给loader的文件源内容
module.exports = function(source) {
    const content = doSomeThing2JsString(source);

    // 如果 loader 配置了 options 对象，那么this.query将指向 options
    const options = this.query;

    // 可以用作解析其他模块路径的上下文
    console.log('this.context');

    /*
     * this.callback 参数：
     * error：Error | null，当 loader 出错时向外抛出一个 error
     * content：String | Buffer，经过 loader 编译后需要导出的内容
     * sourceMap：为方便调试生成的编译后内容的 source map
     * ast：本次编译生成的 AST 静态语法树，之后执行的 loader 可以直接使用这个 AST，进而省去重复生成 AST 的过程
     */
    this.callback(null, content); // 异步
    return content; // 同步
}
```

```
class MyPlugin {
    // Webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
  apply (compiler) {
    // 找到合适的事件钩子，实现自己的插件功能
    compiler.hooks.emit.tap('MyPlugin', compilation => {
        // compilation: 当前打包构建流程的上下文
        console.log(compilation);

        // do something...
    })
  }
}
```

### webpack 的构建流程

初始化参数：解析 webpack 配置参数，合并 shell 传入和 webpack.config.js 文件配置的参数,形成最后的配置结果；
开始编译：上一步得到的参数初始化 compiler 对象，注册所有配置的插件，插件 监听 webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译；
确定入口：从配置的 entry 入口，开始解析文件构建 AST 语法树，找出依赖，递归下去；
编译模块：递归中根据文件类型和 loader 配置，调用所有配置的 loader 对文件进行转换，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
完成模块编译并输出：递归完事后，得到每个文件结果，包含每个模块以及他们之间的依赖关系，根据 entry 或分包配置生成代码块 chunk;
输出完成：输出所有的 chunk 到文件系统；

### 关于整个编译生命周期钩子，有如下：

initialize //初始化
compile： 真正开始的编译，在创建 compilation 对象之前
compilation ：生成好了 compilation 对象
make 从 entry 开始递归分析依赖，准备对每个模块进行 build
after-compile： 编译 build 过程结束
emit ：在将内存中 assets 内容写到磁盘文件夹之前
after-emit ：在将内存中 assets 内容写到磁盘文件夹之后
done： 完成所有的编译过程
failed： 编译失败的时候

### Webpack 的热更新原理

Webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。 这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
HMR 的核心就是客户端从服务端拉取更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该 chunk 的增量更新。
后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像 react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。

### 如何优化 Webpack 的构建速度

- 使用高版本的 Webpack 和 Node.js
- 多进程/多实例构建：HappyPack(不维护了)、thread-loader
- 压缩代码
  多进程并行压缩: webpack-paralle-uglify-plugin；uglifyjs-webpack-plugin 开启 parallel 参数 (不支持 ES6)；terser-webpack-plugin 开启 parallel 参数
  通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。
- 缩小打包作用域：
  exclude/include (确定 loader 规则范围)
  resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)
  resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)
  resolve.extensions 尽可能减少后缀尝试的可能性 noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)
  IgnorePlugin (完全排除模块)
  合理使用 alias
- 提取页面公共资源
  基础包分离：使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中
  使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4 内置) ，替代了 CommonsChunkPlugin 插件
- 充分利用缓存提升二次构建速度
  babel-loader 开启缓存
  terser-webpack-plugin 开启缓存
  使用 cache-loader 或者 hard-source-webpack-plugin
- Tree shaking
  打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的 bundle 中去掉(只能对 ES6 Modlue 生效) 开发中尽可能使用 ES6 Module 的模块，提高 tree shaking 效率
  禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking
  使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码

### Tree-Shaking

https://juejin.cn/post/7002410645316436004
Tree-Shaking 是一种基于 ES Module 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化。
Tree Shaking 较早前由 Rich Harris 在 Rollup 中率先实现，Webpack 自 2.0 版本开始接入，至今已经成为一种应用广泛的性能优化手段。

### Babel 原理

大多数 JavaScript Parser 遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器)
Babel 大概分为三大部分：
解析：将代码转换成 AST
词法分析：将代码(字符串)分割为 token 流，即语法单元成的数组语法分析：分析 token 流(上面生成的数组)并生成 AST
转换：访问 AST 的节点进行变换操作生产新的 AST。Taro 就是利用 babel 完成的小程序语法转换
生成：以新的 AST 为基础生成代码

### Babel 是怎么解析语法

## 计算机网络

### 常见的请求头

- Accept 能够接受的回应内容类型 Accept: text/plain
- Cookie
- Connection 该浏览器想要优先使用的连接类型 Connection: keep-alive
- Cache-Control
- Host
- If-Modified-Since
- If-None-Match
- User-Agent
- Range 仅请求某个实体的一部分 Range: bytes=500-999

### HTTP 和 HTTPS 区别

HTTP：是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从 WWW 服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。
HTTPS：是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。
HTTPS 协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是确认网站的真实性。

由于 HTTP 天生明文传输的特性，在 HTTP 的传输过程中，任何人都有可能从中截获、修改或者伪造请求发送，所以可以认为 HTTP 是不安全的；在 HTTP 的传输过程中不会验证通信方的身份，因此 HTTP 信息交换的双方可能会遭到伪装，也就是没有用户验证；在 HTTP 的传输过程中，接收方和发送方并不会验证报文的完整性，为了解决上述问题，HTTPS 应用而生。

1、http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议。
2、http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。
3、http 的连接很简单，是无状态的；HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全。
4、https 协议需要到 ca 申请证书，一般免费证书较少，因而需要一定费用。

### 为什么说 https 安全

HTTPS 保证了传输安全，防止传输过程被监听、防止数据被窃取，可以确认网站的真实性。
HTTPS 是建立在 TLS/SSL 之上，其安全性由 SSL 来保证。在采用 SSL 后，HTTP 就拥有了 HTTPS 的加密、证书和完整性保护这些功能。
SSL 的实现这些功能主要依赖于三种手段：
对称加密：采用协商的密钥对数据加密
非对称加密：实现身份认证和密钥协商
摘要算法：验证信息的完整性
数字签名：身份验证

### HTTPS 加密过程

客户端发起 HTTPS 请求，服务端返回证书，客户端对证书进行验证，验证通过后本地生成用于改造对称加密算法的随机数，通过证书中的公钥对随机数进行加密传输到服务端，服务端接收后通过私钥解密得到随机数，之后的数据交互通过对称加密算法进行加解密。

### 中间人攻击

http/2: https://mp.weixin.qq.com/s/9brCDC6nimxIYXPAj3CO0g

### HTTP 1.0 和 HTTP 1.1 有以下区别：

连接方面，http1.0 默认使用非持久连接，而 http1.1 默认使用持久连接。http1.1 通过使用持久连接来使多个 http 请求复用同一个 TCP 连接，以此来避免使用非持久连接时每次需要建立连接的时延。

资源请求方面，在 http1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，http1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。

缓存方面，在 http1.0 中主要使用 header 里的 If-Modified-Since、Expires 来做为缓存判断的标准，http1.1 则引入了更多的缓存控制策略，例如 Etag、If-Unmodified-Since、If-Match、If-None-Match 等更多可供选择的缓存头来控制缓存策略。

http1.1 中新增了 host 字段，用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个 IP 地址。因此有了 host 字段，这样就可以将请求发往到同一台服务器上的不同网站。

http1.1 相对于 http1.0 还新增了很多请求方法，如 PUT、HEAD、OPTIONS 等。

### HTTP 1.1 和 HTTP 2.0 的区别

二进制协议：HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。

多路复用： HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里，客户端和服务器都可以同时发送多个请求或回应，而且不用按照顺序一一发送，这样就避免了"队头堵塞"【1】的问题。

头信息压缩： HTTP/2 实现了头信息压缩，由于 HTTP 1.1 协议不带状态，每次请求都必须附上所有信息。所以，请求的很多字段都是重复的，比如 Cookie 和 User Agent ，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响速度。HTTP/2 对这一点做了优化，引入了头信息压缩机制。一方面，头信息使用 gzip 或 compress 压缩后再发送；另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就能提高速度了。

请求优先级: 由于采用多路复用，多个请求会同时产生多个数据流，数据流中有一个优先级的标识，服务端根据这个标识决定响应的优先顺序。
流 ID 不能重用，只能顺序递增，客户端发起的 ID 是奇数，服务器端发起的 ID 是偶数；

服务器推送： HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送。使用服务器推送提前给客户端推送必要的资源，这样就可以相对减少一些延迟时间。这里需要注意的是 http2 下服务器主动推送的是静态资源，和 WebSocket 以及使用 SSE 等方式向客户端发送即时数据的推送是不同的。

而美中不足的是 HTTP/2 协议是基于 TCP 实现的，于是存在的缺陷有三个。
队头阻塞；
TCP 与 TLS 的握手时延迟；
网络迁移需要重新连接；

### HTTP3

HTTP/3 将传输层从 TCP 替换成了 UDP，并在 UDP 协议上开发了 QUIC 协议，来保证数据的可靠传输。
QUIC 特点
无队头阻塞，QUIC 连接上的多个 Stream 之间并没有依赖，都是独立的，也不会有底层协议限制，某个流发生丢包了，只会影响该流，其他流不受影响；
建立连接速度快，因为 QUIC 内部包含 TLS1.3，因此仅需 1 个 RTT 就可以「同时」完成建立连接与 TLS 密钥协商，甚至在第二次连接的时候，应用数据包可以和 QUIC 握手信息（连接信息 + TLS 信息）一起发送，达到 0-RTT 的效果。
连接迁移，QUIC 协议没有用四元组的方式来“绑定”连接，而是通过「连接 ID 」来标记通信的两个端点，客户端和服务器可以各自选择一组 ID 来标记自己，因此即使移动设备的网络变化后，导致 IP 地址变化了，只要仍保有上下文信息（比如连接 ID、TLS 密钥等），就可以“无缝”地复用原连接，消除重连的成本；

### DNS

DNS 由下面三个部分组成：名称解析器（resolver）；域名空间（domain name space）；名称服务器（name server）

解析过程

1、检查浏览器缓存中是否存在该域名与 IP 地址的映射关系，如果有则解析结束，没有则继续
2、到系统本地查找映射关系，一般在 hosts 文件中，如果有则解析结束，否则继续
3、到本地域名服务器去查询，有则结束，否则继续
4、本地域名服务器查询根域名服务器，该过程并不会返回映射关系，只会告诉你去下级服务器(顶级域名服务器)查询
5、本地域名服务器查询顶级域名服务器(即 com 服务器)，同样不会返回映射关系，只会引导你去二级域名服务器查询
6、本地域名服务器查询二级域名服务器(即 baidu.com 服务器)，引导去三级域名服务器查询
7、本地域名服务器查询三级域名服务器(即 mail.baidu.com 服务器)，此时已经是最后一级了，如果有则返回映射关系，则本地域名服务器加入自身的映射表中，方便下次查询或其他用户查找，同时返回给该用户的计算机，没有找到则网页报错
8、如果还有下级服务器，则依此方法进行查询，直至返回映射关系或报错

DNS 安全问题

1. DNS 反射/放大攻击
   向大量开放 DNS 服务器发送大范围域名查询的 DNS 请求，并将该 DNS 请求的源 IP 地址伪造成想要攻击的目标 IP 地址。由于请求数据比相应数据小得多，攻击者可以利用该技术放大掌握的带宽资源和攻击流量。
2. DDOS 攻击可能造成域名解析瘫痪
3. DNS/域名劫持
   在劫持的网络范围内拦截域名解析的请求，分析请求的域名，返回假的 IP 地址或者使请求失去响应。DNS 劫持通过篡改 DNS 服务器上的数据返回给用户一个错误的查询结果来实现的。
4. DNS 污染
   DNS 污染是一种让一般用户由于得到虚假目标主机 IP 而不能与其通信的方法，指的是用户访问一个地址，国内的服务器(非 DNS)监控到用户访问的已经被标记地址时，服务器伪装成 DNS 服务器向用户发回错误的地址的行为。
   dns 污染与 dns 劫持的区别在于，dns 劫持修改了 dns 的解析结果，dns 污染是不经过 dns 服务器，返回错误信息
5. DNS 信息黑客被修改

DNS 优化

1. DNS Prefetching
   用户在请求某个链接之前，浏览器先尝试解析该链接的域名再将其进行缓存。这样真正请求的时候就不需要进行 DNS 解析。
   可以
   在服务器中响应设置 X-DNS-Prefetch-Control 的值为 on 启动预解析
   HTML 中，<meta http-equiv="x-dns-prefetch-control" content="on">
   对特定域名预解析<link rel=”dns-prefetch” href=”//fonts.googleapis.com”>
2. 域名收敛
   建议将静态资源只放在一个域名下面，可以有效减少 dns 的请求
3. httpdns
   基于 Http 协议向 HTTPDNS 服务器发送域名解析请求，替代了基于 DNS 协议向运营商 Local DNS 发起解析请求的传统方式，可以避免运营商的域名劫持和进行精准调度。
   这过程分为两步
   客户端直接访问 HttpDNS 接口，获取业务在域名配置管理系统上配置的访问延迟最优的 IP。（基于容灾考虑，还是保留次选使用运营商 LocalDNS 解析域名的方式）
   客户端向获取到的 IP 后就向直接往此 IP 发送业务协议请求。以 Http 请求为例，通过在 header 中指定 host 字段，向 HttpDNS 返回的 IP 发送标准的 Http 请求即可。

### TCP UDP

TCP 和 UDP 都是传输层协议，他们都属于 TCP/IP 协议族：

UDP 的全称是用户数据报协议，在网络中它与 TCP 协议一样用于处理数据包，是一种无连接的协议。在 OSI 模型中，在传输层，处于 IP 协议的上一层。UDP 有不提供数据包分组、组装和不能对数据包进行排序的缺点，也就是说，当报文发送之后，是无法得知其是否安全完整到达的。

- 面向无连接
- 有单播，多播，广播的功能
- 面向报文
- 不可靠性
- 头部开销小，传输数据报文时是很高效的。

TCP 的全称是传输控制协议是一种面向连接的、可靠的、基于字节流的传输层通信协议。TCP 是面向连接的、可靠的流协议（流就是指不间断的数据结构）。

- 面向连接
- 仅支持单播传输
- 面向字节流
- 可靠传输
- 提供拥塞控制
- 提供全双工通信

TCP 应用场景： 效率要求相对低，但对准确性要求相对高的场景。因为传输中需要对数据确认、重发、排序等操作，相比之下效率没有 UDP 高。例如：文件传输（准确高要求高、但是速度可以相对慢）、接受邮件、远程登录。
UDP 应用场景： 效率要求相对高，对准确性要求相对低的场景。例如：QQ 聊天、在线视频、网络语音电话（即时通讯，速度要求高，但是出现偶尔断续不是太大问题，并且此处完全不可以使用重发机制）、广播通信（广播、多播）。

### 三次握手

三次握手（Three-way Handshake）其实就是指建立一个 TCP 连接时，需要客户端和服务器总共发送 3 个包。进行三次握手的主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备。实质上其实就是连接服务器指定端口，建立 TCP 连接，并同步连接双方的序列号和确认号，交换 TCP 窗口大小信息。

刚开始客户端处于 closed 的状态，服务端处于 listen 状态。然后
第一次握手：建立连接时，客户端发送 SYN 包（syn=j）到服务器，并进入 SYN_SENT 状态，等待服务器确认。
第二次握手：服务器收到 SYN 包并确认客户的 SYN（ack=j+1），同时也发送一个自己的 SYN 包（syn=k），即 SYN+ACK 包，此时服务器进入 SYN-RCVD 状态。
第三次握手：客户端收到服务器的 SYN+ACK 包，向服务器发送确认包 ACK(ack=k+1）此包发送完毕，客户端和服务器进入 ESTABLISHED（TCP 连接成功）状态，完成三次握手。

SYN：同步序列编号（Synchronize Sequence Numbers）。

TCP 三次握手的建立连接的过程就是相互确认初始序号的过程，告诉对方，什么样序号的报文段能够被正确接收。 第三次握手的作用是客户端对服务器端的初始序号的确认。如果只使用两次握手，那么服务器就没有办法知道自己的序号是否已被确认。同时这样也是为了防止失效的请求报文段被服务器接收，而出现错误的情况。

### 四次挥手

TCP 使用四次挥手的原因是因为 TCP 的连接是全双工的，所以需要双方分别释放到对方的连接，单独一方的连接释放，只代表不能再向对方发送数据，连接处于的是半释放的状态。

第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态。也就是说这个时候客户端处于只能接收、不会再发送的状态。
第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 + 1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT 状态。这个时候服务端也不在接收来自客户端的数据，但是还有未处理完的数据要继续处理。
第三次挥手：如果服务端处理完最后发送的数据后也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 LAST_ACK 的状态。
第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 + 1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT 状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态。

### CDN

CDN 的全称是 Content Delivery Network，即内容分发网络，它能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，解决 Internet 网络拥挤的状况，提高用户访问网站的响应速度。

## code

### new

```
function myNew(Con, ...args) {
  // let obj = {}; // 创建一个新对象
  // obj.__proto__ = Con.prototype; // 新对象原型指向构造函数原型对象
  let obj = Object.create(Con.prototype);
  let result = Con.apply(obj, args); // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  return result instanceof Object ? result : obj; // 优先返回构造函数返回的对象
}
```

### instance

```
function myInstanceof (left, right) {
    let proto = Object.getPrototypeOf(left),
    prototype = right.prototype;
    while(true) {
        if (!proto) return false;
        if (proto == prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}
```

### 实现 call

```
Function.prototype.call(context) {
  if (typeof this !== 'function) {
    console.error('type error')
  }
  let args = [...arguments].slice(1);
  context = context || window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
}
```

### 实现 apply

```
Function.prototype.apply(context) {
  if (typeof this !== 'function) {
    console.error('type error')
  }
  context = context || window;
  context.fn = this;
  let result = null;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
}
```

### 实现 bind

```
Function.prototype.bind(context) {
  if (typeof this !== 'function') {
    console.error('type error')
  }
  let fn = this, args = [...arguments].slice(1);
  return function Fn() {
    return fn.apply(this instanceof Fn ? this : context, args.concat(...arguments));
  }
}

```

快速排序

### 防抖

```
function debounce(fn, time) {
let timeout = null;
return function() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    fn.apply(this, arguments);
  }, time)
}
}
```

### 节流

```
function throttle(fn, time) {
  let canRun = true;
  if (!canRun) {
    return;
  }

  canRun = false;
  setTimout(funciton() {
    fn.apply(this, arguments);
    canRun = true;
  }, time)
}
```

### promise

```
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
  let self = this;
  this.state = PENDING;
  this.value = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];
  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resovle)
    }

    setTimeout(() => {
      if (self.state == PENDING) {
        self.state = RESOLVED;
        self.value = value;
        self.resolvedCallback.forEach(callback => callback(value))
      }
    })
  }

  function reject(reject) {// ...}
  try {
    fn(resolve, reject);
  } catch(e) {
    reject(e)
  }
}
```

```
function promiseAll(promises) {
  retrun new Promise((resovle, reject) => {
    if (!Array.isArry(promises)) {
      throw new TypeError(`argument must be a array`);
    }

    let resolvedCount = 0;
    let resolvedResult = [];
    for (let i = 0; i < promises.length; i++) {
      Promise.resovle(promises[i]).then(res => {
        resolvedCount++;
        resolvedResult[i] = res;
        if (resolvedCount == promises.length) {
          retrun resovle(resolvedResult);
        }
      }, error => {
        return reject(error);
      })
    }
  })
}
```

### async

```
function asyncToGenerator(generatorFunc) {
    return function() {
      const gen = generatorFunc.apply(this, arguments)
      return new Promise((resolve, reject) => {
        function step(key, arg) {
          let generatorResult
          try {
            generatorResult = gen[key](arg)
          } catch (error) {
            return reject(error)
          }
          const { value, done } = generatorResult
          if (done) {
            return resolve(value)
          } else {
            return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
          }
        }
        step("next")
      })
    }
}
```

### 深拷贝

```
function deepCopy(object) {
  if (!object || typeof object !== 'object') return object;
  let newObject = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = deepCopy(object[key]);
    }
  }

  return newObject;
}
```

兼容日期、正则，及循环引用

```
function deepClone(obj, map = new WeakMap()) {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj != 'object') return obj;

  if (map.get(obj)) return map.get(obj);
  let cloneObj = new obj.constructor();
  map.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], map);
    }
  }

  return cloneObj;
}
```

发布订阅模式

```
let eventEmitter = {
    // 缓存列表
    list: {},
    // 发布
    emit (event, ...args) {
        let fns = this.list[event];
        // 如果缓存列表里没有 fn 就返回 false
        if (!fns || fns.length === 0) {
            return false;
        }
        // 遍历 event 值对应的缓存列表，依次执行 fn
        fns.forEach(fn => {
            fn.apply(this, args);
        });
        return this;
    },
    // 订阅
    on (event, fn) {
        // 如果对象中没有对应的 event 值，也就是说明没有订阅过，就给 event 创建个缓存列表
        // 如有对象中有相应的 event 值，把 fn 添加到对应 event 的缓存列表里
        (this.list[event] || (this.list[event] = [])).push(fn);
        return this;
    },
    // 监听一次
    once (event, fn) {
        // 先绑定，调用后删除
        let _this = this;
        function on () {
            fn.apply(_this, arguments);
            _this.off(event, on);
        }
        on.fn = fn;
        _this.on(event, on);
        return _this;
    },
    // 取消订阅
    off (event, fn) {
        let fns = this.list[event];
        // 如果缓存列表中没有相应的 fn，返回false
        if (!fns) return false;
        if (!fn) {
            // 如果没有传 fn 的话，就会将 event 值对应缓存列表中的 fn 都清空
            fns && (fns.length = 0);
        } else {
            // 若有 fn，遍历缓存列表，看看传入的 fn 与哪个函数相同，如果相同就直接从缓存列表中删掉即可
            fns.forEach((cb, i) => {
                if (cb === fn) {
                    fns.splice(i, 1);
                }
            });
        }
        return this;
    },
};

function user1 (content) {
    console.log('用户1订阅了:', content);
}

function user2 (content) {
    console.log('用户2订阅了:', content);
}

function user3 (content) {
    console.log('用户3订阅了:', content);
}

function user4 (content) {
    console.log('用户4订阅了:', content);
}

// 订阅
eventEmitter.on('article1', user1);
eventEmitter.on('article1', user2);
eventEmitter.on('article1', user3);

// 取消user2方法的订阅
eventEmitter.off('article1', user2);

eventEmitter.once('article2', user4)

// 发布
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');

// eventEmitter.on('article1', user3).emit('article1', 'test111');

/*
    用户1订阅了: Javascript 发布-订阅模式
    用户3订阅了: Javascript 发布-订阅模式
    用户1订阅了: Javascript 发布-订阅模式
    用户3订阅了: Javascript 发布-订阅模式
    用户4订阅了: Javascript 观察者模式
*/
```

## 算法

动态规划
动态规划的核心思想就是拆分子问题，记住过往，减少重复计算。 并且动态规划一般都是自底向上的
【最优子结构】【边界】和【状态转移公式】
贪心

## 服务端渲染（Server Side Rendering）

是指将单页应用（SPA）在服务器端渲染成 HTML 片段，发送到浏览器，然后交由浏览器为其绑定状态与事件，成为完全可交互页面的过程。
优点：
更快的首屏加载速度：无需等待 JavaScript 完成下载且执行才显示内容，更快速地看到完整渲染的页面，有更好的用户体验。
更友好的 SEO：
爬虫可以直接抓取渲染之后的页面，CSR 首次返回的 HTML 文档中，是空节点（root），不包含内容，爬虫就无法分析你的网站有什么内容，所以就无法给你好的排名。而 SSR 返回渲染之后的 HTML 片段，内容完整，所以能更好地被爬虫分析与索引。

缺点：
对服务器性能消耗较高
项目复杂度变高，出问题需要在前端、node、后端三者之间找
需要考虑 SSR 机器的运维、申请、扩容，增加了运维成本（可以通过 Serverless 解决）

## 性能优化

### 调试工具

- 可以用 PageSpeed Insights 去定位网站的性能问题。
- Network 面板
  Network 面板记录了与服务器交互的具体细节。在这里我们可以看到发起的请求数量，传输体积以及解压缩后的体积，同时还可以知道哪些资源是命中了强缓存，哪些资源命中的协商缓存。
- lighthouse 面板
  lighthouse 是对网站整体的评估，通过几个不同的指标给网站进行打分。
  FCP (First Contentful Paint) 首屏渲染时间，Chrome 会取第一个渲染出来的元素作为时间参考。
  TTI (Time to Interactive) 可交互时间，从能看到能摸的时间点。
  Speed Index 速度指数，页面的填充速度。
  TBT (Total Blocking Time) 从能看到能摸之间超过 50ms 的任务总和。
  LCP (Largest Contentful Paint) 页面中最大的那块渲染的时间点。
  CLS (Cumulative Layout Shift) 元素移动所累积的时间点，比如有一个 absolute 的元素突然从左边移到了右边。
- performance 面板
  performance 面板会给我们提供一个具体的执行过程，从 HTML 文档下载，解析 HTML，到解析 CSS，计算样式，执行 JS。
- webpack-bundle-analyze

https://juejin.cn/post/6966857691381645325
https://juejin.cn/post/6883444297614983175

### Web Vitals

https://blog.csdn.net/weixin_40906515/article/details/106394217

加载、交互性和视觉稳定性:
LCP (Largest Contentful Paint): 衡量加载体验，页面最主要的内容何时呈现。为了提供良好的用户体验， LCP 应该在页面首次开始加载后的 2.5 秒内发生。
FID (First Input Delay): 衡量可交互性，用户第一次输入后经过多久得到了响应。为了提供良好的用户体验，页面的 FID 应当小于 100 毫秒。
CLS (Cumulative Layout Shift):衡量视觉稳定性，有多少内容发生了意外的偏移。为了提供良好的用户体验，页面的 CLS 应保持小于 0.1。

## RN

### RN 的加载流程

RN 的加载流程主要为几个阶段

- 初始化 RN 环境
  创建 Bridge
  Bridge 中的 JS 环境
  RN 模块、UI 组件
- 下载 JS Bundle
- 运行 JS Bundle
- 渲染页面

## 工程化

### 工程化表现

1. 创建项目阶段：
   借助脚手架工具自动创建项目目录结构和特定类型的文件。
2. 编码阶段：
   借助工具实现代码格式化、校验代码风格，还可以使用新的特性来编写源代码，通过编译/构建/打包生成运行环境支持的运行时代码。
3. 预览/测试阶段
   开发过程，需要 Mock 服务，需要使用基础的 Web 服务器来托管项目，比如 Nginx、Apatch 等。但这些服务都不提供热更新的体验，所以需要借助现代化的工具来提高开发体验。
   在编译转换后，如果发生异常，需要定位源代码的位置。这是就需要使用 Source Map 技术来映射运行代码和源代码。
4. 代码提交阶段
   使用 git hooks 对项目整体进行检查，包括代码风格的检查和项目质量的检查，确保不会将有问题的代码提交到 git 仓库中，这样 git 仓库的代码永远都是可用的。除此以外，还可以对 git log 的格式进行限制，这样在代码分支合并和回滚时有很大的价值。
   主要借助的工具有 Lint-staged 和持续集成等。
5. 部署阶段
   CI/CD、自动发布。
   可以通过一行命令自动的将项目打包上传至 ftp 服务器。
