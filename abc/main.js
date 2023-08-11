var m = require('./function')
function greet(name='you'){
    console.log(`hello  ${name}`)
}
greet('Ritesh')
greet()


function add(n1=0,n2=0) {
    sum = n1+n2
    console.log(sum)
}
add(1,2)
add()

const adding = (x,y)=>{
    console.log(x+y)
}
adding(4,5)

sub = (a,b) =>a-b;
mul = (a,b) =>a*b;
div = (a,b) =>a/b;
console.log(sub(4,2))
console.log(mul(4,2))
console.log(div(4,3).toFixed(3))


// classes and Object

console.log(m.add(5,6))

obj = new m.MyCircle(5)
console.log(obj.area())
