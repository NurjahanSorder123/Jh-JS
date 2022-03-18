var num =200.2556555;
var result =Math.floor(num);
console.log(result);

var num =200.2556555;
var result =Math.ceil(num);
console.log(result);

var num =200.7556555;
var result =Math.round(num);
console.log(result);

var num =200.7556555;
var randomnum = Math.random() *10;
var output = Math.round(randomnum);
console.log(output);

// Random For Loop
for(i =0; i <=10; i++){
    var randomnum = Math.random() *10;
    var output = Math.round(randomnum);
    console.log(output);
}

// Random Function
function random(n){
    var randomnum = Math.random() *n;
    var output = Math.round(randomnum);
    return output;
}
var merandom = random(500);
console.log(merandom);