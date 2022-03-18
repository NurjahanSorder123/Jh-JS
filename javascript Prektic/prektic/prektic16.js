// Max Js
var bussinesman = 900;
var minster = 800;
var socib =600;
if(bussinesman > minster){
    if(bussinesman > socib){
        console.log('Bussinesman Is Bigger');
    }
    else{
        console.log('Socib Is Bigger');
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
var bussinesman = 900;
var minster = 800;
var socib =600;
var max =Math.max(bussinesman,minster,socib);
console.log(max);

// Aarry Max Part
var marks =[10,20,30,40,50,60,70,80,90];
var max = marks[0];
for(var i =0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Higest Number Is:',max);

// Swap Part Start
var a = 400;
var b = 500;
console.log('before swap: a =', a, 'b=',b);
var temp = a;
a = b;
b =temp;
console.log('after swap: a=', a, 'b=', b);

// Swap Javascript Spcial Part
var p = 400;
var q = 500;
[p,q]=[q,p];
console.log('after swap: p=', p , 'q=', q);

// Random Part
var num = 2.489789457878;
var result = Math.floor(num);
console.log(result);

var num = 2.489789457878;
var result = Math.ceil(num);
console.log(result);

var num = 2.489789457878;
var result = Math.round(num);
console.log(result);

var num = 2.489789457878;
var randomnum = Math.random() *10;
var output = Math.round(randomnum);
console.log(output);

// Random For Loop
for(var i = 0; i <= 10; i++){
    var randomnum = Math.random() *10;
    var output = Math.round(randomnum);
    console.log(output);
}

// Random Function
function Rnadomfunc(n){
    var randomnum = Math.random() *n;
    var output = Math.round(randomnum);
    return output;
}
var allrandom = Rnadomfunc(400);
console.log(allrandom);

// Fibonacci Part Start
var  fibo = [0,1];
for(var i = 2; i <=10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);

// Fibonacci Function Part
function fibonacci(n){
    for(var i = 2; i <=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var allfibo = fibonacci(10);
console.log(allfibo);

// Febonacci Recursive Part
function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var allfibo = fibonacci(40);
console.log(allfibo);

// Inch To Feet
var inch = 1200;
var feet = inch /12;
console.log(feet);

//Long Time Inch To Feet
function inchtofeet(n){
    var feet = n/12;
    return feet;
}
var dadufeet = inchtofeet(300000);
console.log(dadufeet);

// Consent Let Part
var freindage = 40;
if(freindage < 50){
    freindage = 'ok Ami You Are Mi sior person';
}
console.log(freindage);

// Const
const freindage2 = 400;
console.log(freindage2);

// Let
let freindage3 =4000;
freindage3=77778;
freindage3=7327537778;
freindage3=777375578;
console.log(freindage3);

// Leep Year 
const leepyear = 3200;
let remind = leepyear % 4;
console.log(remind == 0);

const leepyear2 = 3200;
let remind2 = leepyear % 4;
if(remind2 == 0){
    console.log('This Is A Leep Year');
}
else{
    console.log('This Is Not A Leep Year');
}

// Factorial Part Start
var factorial = 1;
for(var i = 1; i <= 10; i++){
    factorial = factorial *i;
    console.log(i,factorial);
}

// Factorial While Loop
var i =1;
var factorial2 =1;
while(i <=30){
    factorial2 = factorial2 * i;
    console.log(i,factorial);
    i++
}

// Factorial Function Part
function facte(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial *i;
        // console.log(i,factorial);
    }
    return factorial;
}
var allfate = facte(20);
console.log(allfate);

var pc =40;
if(pc < 50){
    console.log('ok ami bil ready Kortase');
}
else{
    console.log('Sorry apnar Porjapto Mony Nai ')
}
var pc =40;
if(pc > 50){
    console.log('ok ami bil ready Kortase');
}
else{
    console.log('Sorry apnar Porjapto Mony Nai ')
}
var pc =50;
if(pc == 50){
    console.log('ok ami bil ready Kortase');
}
else{
    console.log('Sorry apnar Porjapto Mony Nai ')
}

var pc =50;
if(pc != 50){
    console.log('ok ami bil ready Kortase');
}
else{
    console.log('Sorry apnar Porjapto Mony Nai ')
}

var jobpaiso = true;
var jomataka = 4000;
if(jobpaiso = true && jomataka < 5000){
    console.log('Ok Bro Mai Tomar bea Thik Koretase');
}
else{
    console.log('dure gea mor');
}

var jobpaiso = true;
var jomataka = 4000;
if(jobpaiso = true && jomataka > 5000){
    console.log('Ok Bro Mai Tomar bea Thik Koretase');
}
else{
    console.log('dure gea mor');
}

var jobpaiso = false;
var jomataka = 4000;
if(jobpaiso == true && jomataka < 5000){
    console.log('Ok Bro Mai Tomar bea Thik Koretase');
}
else{
    console.log('dure gea mor');
}

var jobpaiso = false;
var jomataka = 500;
if(jobpaiso == true || jomataka < 600){
    console.log('ok Tomar Bea Thik Kortase');
}
else{
    console.log('Tomr to taka nai bea koi thaka debo');
}

var jobpaiso = true;
var jomataka = 500;
if(jobpaiso == true && jomataka < 400){
    console.log('ok Tomar Bea Thik Kortase');
}
else if(jobpaiso == true){
    console.log('ok job to ase bea detase');
}
else{
    console.log('Tomr to taka nai bea koi thaka debo');
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
monitor = ' '+monitor;
console.log(pc + typeof monitor);

var broapu = 0.996522563212552545663256;
var brovai = 0.645644664646645664565646;
var total = broapu + brovai;
total = total.toFixed(5);
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
var roki = freindage[3]
console.log(roki);

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
var whilenumber =4000;
while(whilenumber <= 4010){
    console.log(whilenumber);
    whilenumber++;
}
// For Loop
for(i =0; i <=20; i++){
    console.log(i);
}

var numberaal =[10,20,30,40,50,60,70,80,90,100];
for(i =0; i <= numberaal.length; i++){
    var numberal = numberaal[i];
    console.log(numberal);
}

// Switch Part Start
number  =500;
switch(number){
    case 100:
        console.log('I am 100');
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
        console.log('Sorry This File Is Not Found');
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

function add(num1 ,num2){
    var total = num1 + num2;
    return total;
}
var alltotal = add(55556,4565456,54456,465,456456,456)
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
student.nam ='Suvon'
var objadd = student.reg=4644545456456456456;
console.log(objadd);
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