// TyneFriend Smaller
var Raju = 4000;
var Rakib = 5000;
var depu = 3000;
if(Raju < Rakib){
    if(Raju < depu){
        console.log('Rakib Is Smaller');
    }
    else{
        console.log('Depu Is Smaller');
    }
}
else{
    if(Rakib < depu){
        console.log('Rakib Is Smaller')
    }
    else{
        console.log('Depu Is Smaller');
    }
}

// TyneFriend Smaller Js
var Raju = 4000;
var Rakib = 5000;
var depu = 3000;
var small = Math.min(Raju,Rakib,depu);
console.log(small);