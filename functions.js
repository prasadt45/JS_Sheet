function toadd(a, b) {
  return a + b;
}
console.log(toadd(5, 10));

const toadsd = (a)=>{
    return a + 10;
}
console.log(toadsd(5));

let myhelp = function(a){
    console.log("we need to help you, " + a);
}
console.log(typeof myhelp);



let factorial = function f(n){
    if(n<=1){
        return 1 ; 
    }
    return f(n-1)*n ; 
}

factorial(5); // 120



// let s = "Prasad";
// for (let i = 0; i < s.length; i++) {
//     setTimeout(() => {
//         process.stdout.write(s[i]);
//     }, i * 500);


// }

// const st = (n)=>{
//     for(let i = 0; i < n; i++) {
//         setTimeout(()=>{
//             process.stdout.write(`${i} `);

//         } , n*1000);
//     }
// }
// st(10);

let a = "a" ; 
let z = "z" ;
    let start = a.charCodeAt(0);
    let end = z.charCodeAt(0);

    if (start > end) {
        [start, end] = [end, start]; // swap if needed
    }

    for (let i = start + 1; i <= end; i++) {
        console.log(String.fromCharCode(i));
    }

    let nn = "Prasad";
    console.log(nn[0]); // 801

    let ns = Math.floor(Math.random() * (15-5+1))+5;
    console.log(ns);

let ch = String.fromCharCode(65);
console.log(ch); // A
let ch1 = String.fromCharCode(97);
console.log(ch1); // a

let m = "Happy";
let n = "pxpy";
let m1 = m.indexOf(n);
console.log(m1); // 2

