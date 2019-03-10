let a = { name: 'a' }
// console.log(a.__proto__)

function A() {
  this.name = 'a'
}
// console.log(A.__proto__)
// console.log(A.prototype)

let a2 = new A()
// console.log(a2.__proto__)

class B {
  constructor() {
    this.name = 'b'
  }
}
let b = new B()
// console.log(b.__proto__)

function Animal() {
  this.species = '动物'
}

function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype = new Animal()
Cat.prototype.constructor = Cat

let cat1 = new Cat('cat1', 'yellow')
console.log(cat1.species)

/**
 * 构造函数不需要显示的返回值。
 * 使用new来创建对象(调用构造函数)时，如果return的是非对象(数字、字符串、布尔类型等)会忽而略返回值;
 * 如果return的是对象，则返回该对象(注：若return null也会忽略返回值）。
 */

 function Person(name) {
    this.name = name
    return name;
}
let p = new Person('Tom');
// Person 返回：{name: 'Tom'}

function Person(name) {
    this.name = name
    return {}
}
let p = new Person('Tom');
// Person 返回：{}

