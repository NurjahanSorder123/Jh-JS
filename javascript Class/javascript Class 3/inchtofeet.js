//One Time Use 
var inch = 4500;
var feet = inch/12
console.log(feet);

//Long Time Use 
function inchfeet(inch){
    var feet = inch/12
    return feet;
}
var dadufeet = inchfeet(6000);
console.log(dadufeet);