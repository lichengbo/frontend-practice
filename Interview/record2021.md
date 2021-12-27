# 美团（联名卡）

1. rem em vw/vh? font-size npm px2rem
2. css 动画和 js 动画的区别？
3. 重绘和回流？
4. cookie webStorage indexedDB?
5. Promise 状态？API？allSettled([])
6. 深拷贝和浅拷贝？
7. 前端工程化？ 规范化、自动化、模块化、组件化

什么是前端工程化？
本质上就是将前端开发流程，标准化、规范化、工具化、自动化、简单化。通过规范和工具来提高前端应用质量及开发效率
细分：脚手架、构建工具、Mock 服务、开发规范、单元测试、项目部署

下面的程序运行结果
const promise = new Promise((resolve, reject) => {
console.log(1);
resolve();
console.log(2);
});

promise.then(() => {
console.log(3);
});

console.log(4);

// 1 2 4 3

function deepCopy (obj) {
if (Object.prototype.toString.call(obj) == '[object Object]') {
return obj;
}

    let res = {};
    for (key in obj) {
        res[key] = deepCopy(obj[key]);
    }

    return res;

}

## 拼多多

react Router 原理
react 生命周期; 父子组件的生命周期
react 高阶组件
react 数据传递 context
redux 怎么注入的数据

typescript interface 泛型
es6 更新的特性
promise.all 实现
发布订阅代码实现

webpack 插件及其钩子
服务端渲染脱水注水

function promiseAll(list) {
let count = 0, res = [];

    return new Promise(() => {
    for (let i = 0; i < list.length; i++) {
       list[i].then((status) => {
            if (status == 'reject') {
                rejecet(res);
            } else {
                count++;
            }
        }, () => {
            if (count == list.length) {
                resolve(res);
            }
        });
    }
    })

}

typescript 范型
interface IComponent {
name: string;
desc: string;
age: number;
}

高阶组件
function HOC(Componet) {
return <Componet />
}

let data = {
num: 1
};

Object.definePropeory(data, {
get(key): {
return data[key];
},
set(key, value): {
data[key] = value;
}
})

### 支付宝一面 （电话）

- 项目难点介绍。
- H5 怎么实现 FlatList 功能。怎么解决滑动过快的白屏问题
- 跨域的解决方法
- 项目同构是怎么实现的，Taro3 的同构实现有了解过吗
- 性能优化做了哪些
- HTTP2 和 HTTP3
- hook 的原理，为什么只能在顶层使用
- react 事件系统，react 事件绑定在哪里（document），原生事件捕获和冒泡。先执行冒泡还是捕获（先执行捕获事件）
- Map 和 Set
- H5 响应式的实现方式（rem; vw/vh; 媒体查询）
- 盒模型
- flex

### B 站

// The TestCase is shown below
// Input : 1 2
// Output : 3
/\*\*
const tree =
[{ level: 1,
children: [
{ level: 2,
children: [{ level: 3 }] }] },
{ level: 1 }];
arr = [
{ level: 3},
{ level: 2 },
{ level: 1 },
{ level: 1 }
];

     [
    { level: 1 }
        { level: 3},
        { level: 2 },
        { level: 1 },

];
\*/

function revert(arr) {
let res = [];
for (let i = 0; i < arr.length; i++) {
if (arr[i].hasOwnProperty('children')) {
res.push(revert(arr[i]['children']));
} else {
res.push(arr[i]);
}
}

    return res;

}

/\*\*
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

有效括号组合需满足：左括号必须以正确的顺序闭合。
例子 1：输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

例子 2：输入：n = 1
输出：["()"]
\*/

### 支付宝笔试 - zp

1. 算出两个数组的补集，数组只包含字符串和数字

```
/**
 * --- 问题描述 ---
 *
 * 算出两个数组的补集，数组只包含字符串和数字
 *
 * --- 说明 ---
 *
 * - 补集：如果 b 是 a 的子集，返回存在于 a 不存在于 b 的元素集合，反之返回空集合
 */

type TElement = string | number;

function findComplementarySet(a: TElement[], b: TElement[]): TElement[] {
  // write your code here ...
  const result: TElement[] = [];
  const aSet = new Set(a);
  const bSet = new Set(b);
  a.forEach((el) => {
    if (aSet.has(el) && !bSet.has(el)) {
      result.push(el);
    }
  });
  if (a.length === b.length + result.length) {
    return result;
  } else {
    return [];
  }
}
```

2. 实现一个函数生成器

```
**
 * --- 问题描述 ---
 *
 * 实现一个函数生成器，接收一个原函数和一组 index，生成一个新函数
 * 调用新函数时，按照 index 数组中定义的顺序将参数传入原函数中
 *
 */

type TAnyFunction = (...args: any[]) => any;

function createRearFunc<T extends TAnyFunction>(func: T, indexes: number[]): T {
  // write your code here ...
  return ((...args: any[]) => {
    const newArg = [] as any[];
    (indexes || []).forEach((nIndex, i) => (newArg[nIndex] = args[i]));
    return func(...newArg);
  }) as T;
}
```

3. 给定一组文件路径，找出它们共同的的父级目录

```
/**
 * --- 问题描述 ---
 *
 * 给定一组文件路径，找出它们共同的的父级目录
 *
 * --- 说明 ---
 *
 * - 如果不存在共同的父级目录，返回 `null`
 */

function findParentDirectory(paths: string[]): string | null {
  // write your code here ...
  if (!paths.length) return null;
  const pathArr = paths.map((path) => {
    return path.split('/');
  });
  const common = [] as string[];
  pathArr[0].forEach((dPath, index) => {
    let equal = true;
    pathArr.forEach((path) => {
      if (path[index] !== dPath) equal = false;
    });
    if (equal) {
      common.push(dPath);
    }
  });
  if (common.length === 1) {
    return null;
  } else {
    return common.join('/');
  }
}
```

4. 给出一组异步任务方法，和允许同时执行的个数，实现一个方法，用于并发执行异步任务

```
/**
 * --- 问题描述 ---
 *
 * 给出一组异步任务方法，和允许同时执行的个数，实现一个方法，用于并发执行异步任务
 *
 * --- 说明 ---
 *
 * - 当有任务执行完毕后，自动补充任务，始终保持正在执行的任务有 `concurrency` 个
 * - 返回 { resolved: [], rejected: [] }
 *
 */

type TAsyncTask = () => Promise<unknown> | unknown;

async function parallel(
  tasks: TAsyncTask[],
  concurrency: number,
): Promise<{ resolved: unknown[]; rejected: unknown[] }> {
  // write your code here ...
  return new Promise((resolve) => {
    const resolved: any[] = [],
      rejected: any[] = [];

    const doTask = () => {
      const next = resolved.length + rejected.length;
      if (next === tasks.length) {
        resolve({ resolved, rejected });
      }

      const task = tasks[next];
      if (task) {
        const taskResult = task();
        if (
          typeof taskResult === 'object' &&
          taskResult !== null &&
          typeof taskResult.then === 'function'
        ) {
          taskResult
            .then((result: any) => {
              resolved.push(result);
              doTask();
            })
            .catch((result: any) => {
              rejected.push(result);
              doTask();
            });
        } else {
          resolved.push(taskResult);
          doTask();
        }
      }
    };

    for (let i = 0; i <= concurrency; i++) {
      doTask();
    }
  });
}
```

5. 重新排列一个字符串

```
/**
 * --- 问题描述 ---
 *
 * 重新排列一个字符串，使得每个相邻字符都不同，列出所有情况
 *
 * --- 说明 ---
 *
 * - 字符串只包含小写字母或者数字
 */

interface IResult {
  now: string;
  countMap: { [key: string]: number };
  set: Set<string>;
}

function reorganize(str: string): string[] {
  // write your code here ...
  const nmap = {} as { [key: string]: number }; // 记录每个元素的数量
  const set = new Set<string>(); // 记录非重复元素

  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    const now = nmap[s];
    if (!now) set.add(s);
    nmap[s] = !now ? 1 : now + 1;
  }

  let result = [] as IResult[]; // 记录结果

  // 初始化第一次内容
  set.forEach((value) => {
    const newSet = new Set(set);
    const newMap = { ...nmap };
    if (newMap[value] === 1) {
      newSet.delete(value);
    }
    newMap[value] = newMap[value] - 1;
    result.push({
      now: value,
      countMap: newMap,
      set: newSet,
    });
  });

  const doCal = () => {
    const newResult = [] as IResult[];
    result.forEach((path) => {
      // 遍历上一次的结果

      // 遍历每一个还存在的元素
      path.set.forEach((value: string) => {
        if (path.now[path.now.length - 1] !== value) {
          const countMap = { ...path.countMap };
          const newSet = new Set(path.set);

          // 如此时数量为1，表示要减到0了，从set中去除
          if (countMap[value] === 1) {
            newSet.delete(value);
          }
          // 计数减1
          countMap[value] = countMap[value] - 1;

          // 将新结果推入数组中
          newResult.push({
            now: path.now + value,
            countMap,
            set: newSet,
          });
        }
      });
    });
    // 新结果赋值给 result，用于下一次遍历
    if (newResult.length) {
      result = newResult;
    }
  };

  let left = str.length;
  while (left !== 0) {
    // 遍历数组长度次
    doCal();
    left--;
  }

  // 处理结果
  const final = [] as string[];
  const strLen = str.length;
  result.forEach((r) => {
    if (r.now.length === strLen) {
      final.push(r.now);
    }
  });

  return final;
}
```

### 小红书社区 一面

sentry 监控错误的机制。promise 的 error 怎么监控。(使用 window.unhandledrejection 监控，当 Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件)
rn 字体是怎么加载的
rn 预加载包是怎么实现的

React 和 Vue 的 diff 算法
宏任务和微任务

以下代码的执行

```
function demo() {
    return Promise.resolve().then(demo)
}
```

代码题

```
// 现在有一个数列 [1,1,2,3,5,8,13,21,34...]
// 请实现 fn(n) 获得对应位数的值
// n 从 1 开始
// 时间或者空间复杂度不要到O(n^2)
```

浏览器的渲染过程。css 加载会阻塞 html 渲染吗？
position 属性有哪些
0.5 像素的实现方式

### 小红书社区 二面

TTI 指标
web 性能指标 FCP
web-vitals
怎么检测元素曝光（getBoundingClientRect、IntersectionObserver）
原生小程序 setData 应该注意哪些(单次设置数据不能超过 1024KB)
context 优化方案
react 优化方案 hooks useCallback 怎么用
rn 加载的过程

code 1
发布订阅

code 2

https://leetcode-cn.com/problems/decode-string/

```
/**
 * 使用 javascript 实现 decodeString 方法
 * @description 给定一个编码字符，按编码规则进行解码，输出字符串
 * 编码规则是 `count[letter]`，将 letter 的内容 count 次输出，count 是 0 或正整数，letter 是区分大小写的纯字母
 * @param {String}
 * @returns {String} 处理后的字符串
 * @example
 * decodeString('3[a]2[bc]') // 返回 'aaabcbc'
 * decodeString('3[a2[c]]') // 返回 'accaccacc'
 * decodeString('2[abc]3[cd[e]]fg') // 返回 'abcabccdecdecdefg'
 */
```

### 本地生活（电话）

项目相关
长列表优化、怎么看优化指标
webpack：loader plugin 的区别
babel 箭头函数会转成什么？Array.from 这种不支持的呢
事件循环。宏任务、微任务有哪些
pormise 执行过程
垂直居中的方法
flex: 1, auto 的区别
vertical-align: center 应该设置哪些条件（父元素是否设置了 line-height、子元素本身是否为 inline-block 或 inline）
跨域、RN 是否存在跨域呢？
js 如何监听变量修改

### 拼多多 IM

实现一个下拉加载函数
性能优化做了哪些

输入 url 到渲染的过程
tcp 三次握手、https 握手、https 为什么安全
async 和 defer
重绘 重排
状态码 403，304
常见的 request/response

原型
function Persion() {

}
console.log(Persion.prototype) // 输出什么
什么是 BFC

实现三栏布局
两个大数相加

### 拼多多 IM 二面

HTTPS 链接建立过程
HTTPS 加密解密
http2 和 http3
有哪些方法可以实现服务端发送数据(轮询，websocket)

code
输入 [1, 2, 3]
输出 [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// 思路
[]
[1]
[2], [1, 2]
[3] [1, 3] [2, 3] [1, 2, 3]

### 拼多多三面

hooks 组件优势，为什么不能在条件中使用

code
深拷贝函数，考虑循环引用

### 识货

原型链
call, bind
继承
跨域 cors 原理 怎么设置携带 cookie
缓存
flex
CDN 及其原理，源文件更新怎么更新 CDN 文件

简单说下 rn 是什么
rn 事件
rn 不同平台怎么渲染的
rn 手势

### 哈啰出行一面（普惠）

taro 原理
react router 原理
RN 是什么
RN 有什么限制
promise undefined 这种怎么处理
polify 和 runtime 区别
jsx 打包后是什么
webview 的 JSBridge 的原理
react 16.x 有哪些更新
怎么在整个项目里检查文件没有引用

### 蔚来汽车

code 三选一

1. 实现函数 sub(8 - 3).mul(3).sub(5).value() 效果为 (8 - 3) \* 3 - 5
2. 实现模板字符串
3. 实现 promis 实现 then catch 方法

讲下负责页面的技术栈
context 的使用场景
为什么没用 redux。redux 的好处
性能优化做了哪些
分包为什么能优化时间，原理是什么？
react 怎么减少渲染。为什么 useMemo 可以不渲染
除了缓存，如何优化首次进入的渲染时间
性能优化时间怎么统计的。web 怎么检测最大内容渲染结束

### 美团（到店门票）

项目相关
浏览器缓存
TTI 怎么计算的
React 的原理
React diff
es6 语法及 api
map 和 weakmap weakmap 使用场景

code

1. 精确计算 n^k % p 的值（假定 p \* p 不会超过 安全整数，且 n、k、p 均为正整数，且 n、k 均为安全整数） 。
   NKP(8,10,5) 4
   NKP(5,2,6) == 1
   NKP(12999991, 109999, 10000001) 6208975

2. 实现一个 Promise.map
   用法：
   let values = await Promise.map([1,2,3,4,5], async(element, index, \_this) => {
   return Promise.resolve().then(() => element \* index);
   });

console.log(values)// [0,2,6,12,20]

### 小红书广告

项目
项目框架及 redux 理解
描述下 BFC

code

1. 下面输出是什么

```
var b = 10;

(function b(){

b = 20;

console.log(b);

})();
```

2. async promise setTimeout 输出
   async 的原理
   promise 和 awit async 优缺点
3. es5 继承及 es6 继承。
   es6 super 作用

4. 发布订阅模式

### tiktok 一面

性能优化做了什么
webpack require 怎么实现的？
display：none visible:hidden 区别
说下 flex
var let const 区别
http 怎么判断是图片、还是文件
http 缓存

code

1. 判断对象深度, 都是常量为 1，若为对象或数组 +1
   eg:
   [1, null] => 1
   [1, [2], 3] => 3
   {'a': '123'} => 3

promiseAll 实现

### tiktok 二面

项目……
性能有没有了解过底层怎么优化
display：none visible:hidden 区别
hooks 原理？hooks 和 class 组件区别
bridge 有了解过吗？

code

1. 实现模板字符串
   const template = 'hello <%name%>, my age is <%age%>'
   const data = {
   name: 'haha',
   age: 18
   }

render(template, data);

2. 如何取深层对象进行渲染

```
const template = 'hello <%profile.name%>, my age is <%profile.age%>'
const data = {
   profile: {
    name: 'haha',
    age: 18
  }
}

render(template, data);
```

### 小红书 二面

code
输出二维数组的螺旋排序 https://leetcode-cn.com/problems/spiral-matrix/

输入
[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
]

输出
1 2 3 6 9 8 7 4 5
