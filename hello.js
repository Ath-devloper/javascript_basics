let Number=100;
for(let i=1;i<=Number;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if(i%5===0){
        console.log("buzz");
    }
    else if(i%3===0){
        console.log("fizz");
    }else{
        console.log(i);
    }
}