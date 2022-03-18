var febo =[0,1];
for( var i =2; i <=10; i++){
    febo[i] = febo[i-1] + febo[i-2];
    // console.log(febo[i], febo[i-1], febo[i-2]);
}
console.log(febo);

// Febonacci function Part
function febonacci(n){
    var febo =[0,1];
    for( var i =2; i <=n; i++){
        febo[i] = febo[i-1] + febo[i-2];
        // console.log(febo[i], febo[i-1], febo[i-2]);
    }
    return febo;
}
var result = febonacci(12);
console.log(result);

// Febonacci Recursive Part

function fibonacci(n){
    if(n ==0){
        return 0;
    }
    if(n ==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var allfibo = fibonacci(40);
console.log(allfibo);

// Febonacci Recursive srice Part
function fibonacci2(n){
    if(n ==0){
        return 0;
    }
    else if(n ==1){
        return [0,1];
    }
    else{
        var fibo = fibonacci2(n-1);
        var nextale = fibo[n-1] + fibo[n-2];
        fibo.push(nextale);
        return fibo;
    }
    var result = fibonacci2(10);
    console.log(result);
}