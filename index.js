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
/*function fibRecursive(n, a, b) {
    var a=1;
    var b=0;
  if (n === 0) {
    return b;
  } else {
    return fibRecursive(n - 1, a + b, a);
  }
}
console.log(fibRecursive(2,3,4));

var pif=[],i,j;
for(i=0;i<10;i++){
	pif[i] = [];
	for(j=0;j<10;j++){
		pif[i][j] = (i + 1) * (j + 1);
	}
}

for(i=0;i<=10;i++){
console.log(pif[i])
}*/
var a=[1,22,5,8,12,0,7];
var i,j,x;
for(i=0;i<a.length;i++){
    for(j=a.length-1;j>i;j--){
        if(a[j-1]>a[j]){
            x=a[j-1];
            a[j-1]=a[j];
            a[j]=x;
          
        }
      
    }
    console.log(a[j])
}

