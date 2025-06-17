var a=1;
console.log(a);
let b=1;
b=2;
console.log(b);
const c=3;
//c=4; throw and error bcz we can't change the const value.
console.log(c);
let Firstname="Ujjwal";
var age=24;
let isMarriage=false;
console.log("This person is "+Firstname + " and age "+ age);
console.log("Get Ready for a job");
if(isMarriage==true){
    console.log(Firstname+ "is married");
}else{
    console.log(Firstname + "is not married");
}

let answer=1+2+3+4+5;
console.log(answer);
//sum of number using array

let ans=0;
for(let i=1;i<=100; i++){
    ans=ans+i;
}
console.log(ans);

// Array 
const person1="Ujjwal";
const gender="Male";

const person2="Roman";
const gender2="male";

const person3="Roma";
const gender3="Female";

const personArray=["Ujjwal", "Roman", "Roma"];
const genderArray=["Male", "Male", "Female"];

let n= personArray.length;

for(let i=0; i<n; i++){
    if(genderArray[i]=="Male"){
        console.log(personArray[i]);
    }
}

//Array of Object
const user1={
    firstName: "Ujjwal",
    gender: "Male"
}
 console.log(user1["gender"]);

 