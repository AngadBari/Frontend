function sum(a,b){
    return a+b
}//This function can be initialized anywhere and called either before or after initialization; it will still produce output.

const add=(a,b)=>{
 return a+b
}//This type funtion 1st initialization then call

console.log(`sun(3,2):- ${sum(3,2)}`);
console.log(`add(3,2):- ${add(3, 2)}`);