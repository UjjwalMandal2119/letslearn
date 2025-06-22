function calculateArithmetic(a,b,type){
    if(type=="sum"){
        const value=sum(a,b);
        return value;
    }
    if(type=="minus"){
        const value=minus(a,b);
        return value;
    }

}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

const value=calculateArithmetic(4,6,"sum");
console.log(value);