/*var cats=['Mur', 'Puh', 'Bar'];
document.write(cats[0]);
cats.push('Asia');
document.write(cats.length);
cats.push('Bel');
for (var i=0; i<cats.length; i++) {
    document.writeln(cats[i]);
}
cats.forEach(function(e){
    document.writeln(e[i]);
});
var dogs={
    'Bobik':3,
    'Max':5,
    'Sirco':7
}
var age=dogs['Sirco'];
document.write('Sirco '+ age);
dogs['Nika']=4;
for (var key in dogs){
    document.write(key + ':' + dog[key]);
}
var dog= {
    name:'Max',
    age:7,
    bark: function(){
        document.write(this.name + "Bark!");
    }
}
dog.bark();
function Dogs(name,age){
    this.name=name;
    this.age=age;
    this.bark=function(){
        document.write(this.name + "Bark!");
}
    return this
}
var sirko= new Dog ('Snizhok',3);*/

/*function fibonacci(n) {
   if (n <=1){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}
console.log(fibonacci(0));
var fib = [1, 1];
for(var i=fib.length; i<10; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib);*/
function fibRecursive(n, a, b) {
    var a=1;
    var b=0;
  if (n === 0) {
    return b;
  } else {
    return fibRecursive(n - 1, a + b, a);
  }
}
console.log(fibRecursive(2,3,4));

