var number = [10,20,30,40,50,60,70,80,90,100,110];
var sum = 0;
for(var i = 0; i < number.length; i++){
    var element = number[i];
    sum = sum + element;
}
console.log(sum);

// ArraySum Function Part
function ArraySum(number){
    var sum = 0;
    for(var i = 0; i < number.length; i++){
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}
var number = [10,20,30,40,50,60,70,80,90,100,110];
var allarraySum = ArraySum(number);
console.log('Total Of The Number',allarraySum);