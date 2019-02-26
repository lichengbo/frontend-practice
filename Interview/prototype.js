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
