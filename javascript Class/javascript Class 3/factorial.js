// factorial javascript for loop
var factorial = 1;
for(i =1; i <=40;i++){
    factorial = factorial*i
    console.log(i, factorial);
}

// factorial javascript While loop
var i = 1;
factorial = 1;
while(i <=30){
    factorial = factorial *i;
    // console.log(i, factorial);
    i++
}
console.log(factorial);

/// factorial javascript Function
function factorial2(n){
    var i = 1;
    var factorial2 = 1;
    while(i <=n){
        factorial2 = factorial2 *i;
        i++
    }
    return factorial2;
}
var result = factorial2(50);
console.log(result);

// factorial recursive loop javascript

function factorial3 (n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial3(n-1);
    }
}
var result2 =factorial3(90);
console.log(result2);