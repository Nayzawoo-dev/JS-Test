let arr = [1,2,3,4]
arr.forEach(x => {
    console.log(x);
});


 const array = [];
let index = 0;
const area = function(width,breadth){
       result = width * breadth;
       array[index++] = {
        width : width,
        breadth : breadth,
        result : result
       }    
   return result + "square feet";
      
}
console.log(area(30,20));
console.log(area(30,60));
console.log(array);

const rate = {
    usd : 3000,
    sgd : 1500
}

const exchangeMMk = function (amount,currency){
    mmk = amount * rate[currency];
    return mmk + " MMK";
}


const exchangeUSD = function (amount,currency){
    result = Math.ceil(amount / rate[currency]);
    return result + " USD";
}
console.log(exchangeUSD(600000,"usd"));
console.log(exchangeMMk(200,"usd"));

member = true
function getFee(member){
    return member ? "Say Hi" : "Say Fuck";
}

console.log(getFee(member));

const busORWalk = function(pocketMoney){
    return  pocketMoney >= 200 ? "Bus see" : "walk mal";
}

console.log(busORWalk(200));
console.log(busORWalk(100));


const exam = function(mark){
    if(mark >= 80){
        return "pass by degree";
    }else if(mark >= 40){
        return "pass";
    }else{
        return "fail";
    }
}

console.log(exam(80));
console.log(exam(50));

for(
    i = (function(){
        console.log("first");
        return 1;
    })();

    (function(){
        console.log("second");
        return i <= 10;
    })();

    (function(){
        console.log("last");
        return i++;

    })()
){
    console.log(i + "code block");
}