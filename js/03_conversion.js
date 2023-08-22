console.log("type conversion ");

let score ="33";
let str="123vuk"; // undefined  o/p =  Nan
console.log(typeof score);
console.log(typeof (score));

let valscore =Number(score);
let  valstr=Number(str); // no error o/p NAN 

console.log(typeof valstr);
console.log(valscore)
console.log(typeof str); //
console.log(valstr);

let a=true;
let b=false;
console.log(Number(a)); //1
console.log(Number(b));// 0

// "768" => 768
// "57jd"=> NaN
// true => 1, false =>0

//boolean
// let isLoggedIn=23; 
let isLoggedIn="jhf"; 

console.log(Boolean(isLoggedIn)); // [23 , "jhf"]=> true 
                                    // [0,""]=> false

 let strNum =45;
 console.log(String(strNum))   ;
 console.log(typeof (String(strNum))) ;    