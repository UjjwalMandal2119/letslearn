function calculateArithmatic(a,b,arithmeticFinalFunction){
    const ans=arithmeticFinalFunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value=calculateArithmatic(2,4,sum);
console.log(value);