
let n=20;

let isprime=true;

if(n<=1){
    console.log("no no baccha enter a valid number ");
}
else{
    for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0){
        isprime=false;
        break;
    }
}
if(isprime){
    console.log("this is a prime number",n);

}else{
    console.log("not a prime number");
}
}
