var bussinesman = 950;
var minster = 750;
var socib = 670;
if( bussinesman > minster){
    if(bussinesman > socib){
        console.log('Bussinesman Is Bigger');
    }
    else{
        console.log('Socib is Bigger');
    }
}
else{
    if(minster > socib){
        console.log('Minster Is Bigger');
    }
    else{
        console.log('Socib Is Bigger');
    }
}

// Max Short Cut 
var bussinesman = 950;
var minster = 750;
var socib = 670;

var maxshort = Math.max(bussinesman,minster,socib);
console.log(maxshort);