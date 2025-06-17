function sum(num1, num2 ){
    let result=num1+ num2;
    displayResult(result);
    displayResultpassive(result);
}

function displayResult(data){
    console.log("Result of the sum is:" + data);
}

function displayResultpassive(data){
     console.log("Sum's result is:" + data);
}

const ans=sum(1,3)
