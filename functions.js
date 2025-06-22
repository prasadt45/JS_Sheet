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

factorial(5) ;

// let s = "Prasad";
// for (let i = 0; i < s.length; i++) {
//     setTimeout(() => {
//         process.stdout.write(s[i]);
//     }, i * 500);


// }

const st = (n)=>{
    for(let i = 0; i < n; i++) {
        setTimeout(()=>{
            process.stdout.write(`${i} `);

        } , n*1000);
    }
}
st(10);

