let bonus = 12;
function sum(num1,num2){
    let result = num1+num2+bonus;
    console.log(bonus);
    return result;
}
const output = sum(6,6);
console.log(bonus);
console.log(output);
//hosting
    //   scope-let,const