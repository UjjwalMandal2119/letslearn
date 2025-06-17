function sum(num1, num2, fnToCall){
    let result=num1+num2;
    fnToCall(result);
}
 function displayResult(data){
    console.log("Result of the sum is:" + data);
 }

 function displayResultpassive(data){
    console.log("Sum's result os:" + data);

 }

 const ans=sum(2,5,displayResult);