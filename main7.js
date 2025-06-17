function ArithmaticCalculator(num1, num2, type){
    if(type=="sum")
        return num1+num2;
    if(type=="minus")
        return num1-num2;
}

const value=ArithmaticCalculator(6, 7, "sum");
console.log(value);  