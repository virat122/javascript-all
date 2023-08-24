//Stack memory (Primitive )  copy pssed 
//Heap memory (non -Primitive) referenced passed


let myName="vikrant Chaudhary"
let anotherName=myName;

anotherName="chaudhary "
console.log(myName)    // no change in stack memory becoz here "anotherName" got the copy of "myName" so no changes reflect on my name
console.log(anotherName)


console.log("<==================================>")

let user={
    email :"glib@gmail.com",
    upi:"glib@ybl"
}
let anotherUser=user ;

console.log(user);      //email: 'glib@gmail.com', upi: 'glib@ybl' }
console.log(anotherUser);  //{ email: 'glib@gmail.com', upi: 'glib@ybl' }

anotherUser.email="vikrantchaudhary@gmail.com"

//here email got changed becoz here referenced passed and here values are stored on heap memory


console.log(user);       //{ email: 'vikrantchaudhary@gmail.com', upi: 'glib@ybl' }
console.log(anotherUser); //{ email: 'vikrantchaudhary@gmail.com', upi: 'glib@ybl' }




 