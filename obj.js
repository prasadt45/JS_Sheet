function cc(name , age , gender){
    console.log(`Name: ${name}, Age: ${age} , Gender: ${gender}`);

}

let ob = {
    name: "Prasad",
    age: 20,
    gender: "Male"
}

console.log({...ob});
cc(ob.name, ob.age , ob.gender);


let arr = [
    {name: "Prasad", age: 20, gender: "Male"},
    {name: "John", age:39 , gender:"Male"} ,
    {name: "Jane", age:34 , gender:"Female"},
    {name: "Alice", age: 28 , gender:"Female"}

]

arr.map((i)=>{
    console.log(i)
})

