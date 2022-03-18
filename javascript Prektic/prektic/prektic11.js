//inch to Feet 
//One Time Use 
var inch = 4500;
var feet = inch/12
console.log(feet);

// Long Time

function inchtofeet(inch){
    var feet = inch /12;
    return feet;
}
var dadufeet = inchtofeet(600);
console.log(dadufeet);

// Constent Let Part
var freindage =400;
if(freindage < 442){
    freindage ='Tar Baca thakar kono odikar nai '
}
console.log(freindage);

// Const
const freindage2 = 500;
console.log(freindage2);

// let

let freindage3 =40;
    freindage3=5750;
    freindage3=5750;
    freindage3=580;
    freindage3=5570;
    freindage3=5570;
console.log(freindage3);

// Leep Year
const leepyear =3492;
let remind = leepyear %4;
console.log(remind == 0);

const leepyear2 =3492;
let remind2 = leepyear2 %4;
if(remind2 ==0){
    console.log('This Year Is Leep Year')
}
else{
    console.log('This Year Is Not A Leep Year');
}

// Leep 2nd Part
const leepy =3200;
const reminds = leepy % 4;
console.log(reminds == 0);

const leepy2 = 3100;
let reminds2 = leepy2 % 4;
if(reminds2 == 0){
    console.log('This is A Leep Year');
}
else{
    console.log('This is Not leep year');
}
            // factorial 

// factorial javascript for loop
var factorial = 1;
for(i= 1; i <=40;i++){
    factorial =factorial*i;
    console.log(i,factorial);
}

// factorial javascript While loop
var i = 1;
var factorial =1;
while(i <= 20){
    factorial = factorial * i;
    console.log(i,factorial);
    i++;
}

// factorial javascript Function
function facte(n){
    var i = 1;
    var factorial =1;
    while(i <= n){
        factorial = factorial * i;
        // console.log(i,factorial);
        i++;
    }
    return factorial;
}
var all = facte(10);
var allday= facte(20);
console.log(allday);
console.log(all,allday);

// factorial recursive loop javascript
function resursive(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * resursive (n-1);
    }
}
var total =resursive(15);
console.log(total); 

var pc =400;
if(pc <= 500){
    console.log('ok I ready Your Bill');
}
else{
    console.log('Soryy Toamr Portjapto taka nai');
}

var pc =400;
if(pc > 500){
    console.log('ok I ready Your Bill');
}
else{
    console.log('Soryy Toamr Portjapto taka nai');
}

var pc =500;
if(pc == 500){
    console.log('ok I ready Your Bill');
}
else{
    console.log('Soryy Toamr Portjapto taka nai');
}

var pc =500;
if(pc != 500){
    console.log('ok I ready Your Bill');
}
else{
    console.log('Soryy Toamr Portjapto taka nai');
}

 var jobpaiso = true;
 var jomataka = 500;
 if(jobpaiso = true && jomataka <600 ){
     console.log('ok tomar bea koritase');
 }
 else{
     console.log('Tomar to taka nai tomaka ka be korbe');
 }

 var jobpaiso = true;
 var jomataka = 500;
 if(jobpaiso = true && jomataka >400 ){
     console.log('ok tomar bea koritase');
 }
 else{
     console.log('Tomar to taka nai tomaka ka be korbe');
 }

 var jobpaiso = false;
 var jomataka = 500;
 if(jobpaiso == true && jomataka <600 ){
     console.log('ok tomar bea koritase');
 }
 else{
     console.log('Tomar to taka nai tomaka ka be korbe');
 }

 var jobpaiso = false;
 var jomataka = 500;
 if(jobpaiso == true || jomataka <600 ){
     console.log('ok tomar bea koritase');
 }
 else{
     console.log('Tomar to taka nai tomaka ka be korbe');
 }

 var jobpaiso = true;
 var jomataka = 500;
 if(jobpaiso == true && jomataka <400 ){
     console.log('ok tomar bea koritase');
 }
 else if(jobpaiso == true){
     console.log('are tomar to job ase tai na taile somssa ki tomar bea ami korbo')
 }
 else{
     console.log('Tomar to taka nai tomaka ka be korbe');
 }

 var work = 'I am so interest today becuse today i am log work';
 console.log(work.toUpperCase());

 var work = 'I am so interest today becuse today i am log work';
 console.log(work.toLowerCase());

 var work = 'I am so interest today becuse today i am log work';
 console.log(work.indexOf('i'));

 var work = 'I am so interest today becuse today i am log work';
 console.log(work.indexOf("AM"));

 var work = 'I am so interest today becuse today i am log work';
 console.log(work.split('am'));
 var work = 'I am so interest today becuse today i am log work';
 console.log(work.split(' '));

 var pc =4000;
 var mointor =5000;
 var total = pc + mointor;
 console.log(total);

 var pc = 50000;
 var monitor = '6565.52566554456465456465444545000';
 monitor = parseFloat(monitor);
 console.log(monitor);

 var pc = 50000;
 var monitor = '6565.52566554456465456465444545000';
 monitor = parseInt(monitor);
 console.log(monitor);

 var pc = 50000;
 var monitor = '6565.52566554456465456465444545000';
 monitor = ' '+monitor
 console.log(pc+ typeof monitor);

 var broapu = 0.996522563212552545663256;
 var brovai = 0.645644664646645664565646;
 var total = broapu + brovai;
 total = total.toFixed(2);
 console.log(total);

 var broapu = 10000;
 var brovai = 10000;
 broapu++
 brovai++
 broapu++
 brovai++
 broapu++
 brovai++
 broapu++
 brovai++
 broapu++
 brovai++
 var total = broapu + brovai;
 console.log(total);

 var nam ='MD.';
 var name1 ="Sabbir";
 var name2 ='Haasan';
 var name3 ='Shuvo';
 var result = nam + ' '+name1 + ' '+name2 + '  '+ name3 ;
 console.log(result);

 var number = 4521.215645444656456564;
 var absulate = Math.abs(number);
 console.log(absulate);

 var number = 4521.215645444656456564;
 var absulate = Math.round(number);
 console.log(absulate);

// Array Part Start
var freindage =[10,20,30,40,50,60,70];
console.log(freindage);

var freindage =[10,20,30,40,50,60,70];
var roki = freindage[4];
console.log(roki);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
console.log(freindage);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
var index =freindage.indexOf(40);
console.log(index);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
var index =freindage.indexOf(4);
console.log(index);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
freindage.push(80,90,100,110,120);
console.log(freindage);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
freindage.push(80,90,100,110,120);
freindage.pop();
freindage.pop();
freindage.pop();
console.log(freindage);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
freindage.unshift(10,20,30,40,50,6,0);
console.log(freindage);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
freindage.shift(20,30,40,50,6,0);
console.log(freindage);

var freindage =[10,20,30,40,50,60,70];
freindage[6] = 500;
var freindages = freindage.slice(4);
console.log(freindages);
console.log(freindage);

// While Loop
var whilenumber = 4000;
while(whilenumber <= 4100){
    console.log(whilenumber);
    whilenumber++;
}

// For Loop
for(i =0; i <=20; i++){
    console.log(i);
}

var numberal =[10,20,30,40,50,60,70,80,90,100];
for(i = 0; i < numberal.length; i++){
    var numberall = numberal[i];
    console.log(numberall);
}

// Swtich part Start
number = 4000;
switch(number){
    case 100:
        console.log('Hello I am 100');
    break;
    case 200:
        console.log('Hello I am 200');
    break;
    case 300:
        console.log('Hello I am 300');
    break;
    case 400:
        console.log('Hello I am 400');
    break;
    case 500:
        console.log('Hello I am 500');
    break;
    case 600:
        console.log('Hello I am 600');
    break;
    default:
        console.log('Sorry Brother This Number Is Not Found');
}

// Function Part Start

function going(){
    console.log('I am Going To Mokka In Feature Time');
    console.log('I am Going To All Bangladeshi In Feature Time');
}
going();

function dabol(dabulnumber){
    var total = dabulnumber * 4;
    return total;
}
var first = dabol(50);
var secend = dabol(1000);
var thrid = dabol(5440);
var fourth = dabol(5440);
console.log(first+secend+thrid+fourth);

function add (num1,num2){
    var total = num1+num2;
    return total;
}
var alltotal = add(55556,4565456,54456,465,456456,456);
console.log(alltotal);

// Object Part Start
var student ={
    id:445454545456456,
    phone:1307164307,
    nam:'roki',
}
console.log(student);

var student ={
    id:445454545456456,
    phone:1307164307,
    nam:'roki',
}
student.nam ='Suvon'
console.log(student);

var student ={
    id:445454545456456,
    phone:1307164307,
    nam:'roki',
}
var poradd = student.reg =4564564564545123;
console.log(poradd);
console.log(student);

// Inch To Feet 
// One Time Use
var inch =4500;
var feet = inch/12;
console.log(feet);

// Long Time Use
function inchfeet(inch){
    var feet = inch/12;
    return feet;
}
var daadufeet = inchfeet(60000);
console.log(daadufeet);