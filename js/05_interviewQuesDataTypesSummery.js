/*
2 types of data in jas 

1>> primitive ==>> Number, String , Boolean, null, undefined, Symbol, BigInt
2>> reference (derived type) ==>> Array, Object ,Function
eg ..
*/


const score =89;
const scoree=89.0;


const isLooggedIn=false;

const outSideTemp=null;  

const usermail  =undefined; // p=undefined;


console.log("symbol ");
// Symbol is used to provide the uniqueness to any value

const id=Symbol("123");
const anotherid=Symbol("123");

console.log(id===anotherid) // false


const bigNum=5678927892345678945678923456782345678n;
console.log(bigNum)

// Reference (Non primitive)
// Array ,object, function

const arr=["hi", 78, true];


const obj={
    name :"vikrant",
    age: 21, 
    dist : "basti"
}


const valFun =  function(){
    console.log("hey im function");
}

console.log(typeof arr)//object
console.log(typeof null)//object

console.log(typeof obj)//object
console.log(typeof valFun)//function 






