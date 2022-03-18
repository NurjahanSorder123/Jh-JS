    // Switch Part Start
var swit = 'Switch part Start Now';
console.log(swit);
number =40;
switch (number){
    case 100:
        console.log('I am 100');
        break;
    case 200:
        console.log('I am 200')
        break;
    case 300:
        console.log('I am 300');
        break;
    default:
        console.log('Sorry Apnar 40 kono number nai');
}

// Function Part Start
var functio = 'Function Part Start';
console.log(functio);

function hellojs(){
    console.log('Hello js how are You???? I am Fine And');
    console.log('I am Fine too. Do You Doing to Pk');
}
hellojs();

function dubool(duboolnumber){
    var ressult = duboolnumber *4;
    console.log(ressult);
}
dubool(40);

function dubool(duboolnumber){
    var ressult = duboolnumber *4;
    return ressult;
}
var friend =dubool(40);
var friend2 =dubool(50);
var friend3 =dubool(60);
var friend4 =dubool(70);
console.log(friend,friend2,friend3,friend4);

function dubool(duboolnumber){
    var ressult = duboolnumber *4;
    return ressult;
}
var friend =dubool(40);
var friend2 =dubool(50);
var friend3 =dubool(60);
var friend4 =dubool(70);
var total= friend+friend2+friend3+friend4;
console.log(total);

function add (num1, num2){
    var total = num1+num2;
    return total;
}
var addtotal =add(500,500);
console.log(addtotal);