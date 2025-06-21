let x = "Alex"
console.log(x) ; 
const n = 10 ; 
console.log(n) ;

const f = (a, b)=>{
    return a + b;
}
console.log(f(5, 10));

function abc(q , r){
    return q*r ; 
}
console.log(abc(5, 10));

let s = `this is me with value ${x}` ; 
console.log(typeof s);

let obj = {
   name : "Alex",
    age : 25,
    isActive : true,
    greet : function(){
        console.log("Hello, " + obj.name);
    }
}
obj.name = "John";
console.log(obj.name);
obj.greet();

let d = "124" ;
let e = true;
console.log(d + e); 

let m = "123" 
let ss = Number(m);
console.log(typeof ss); 