// World Count
var spcch = 'Hello Js I am Md Sabbir Hassan Shuvo';
var count = 0;
for(var i = 0; i <= spcch.length; i++){
    var char = spcch[i];
    if(char == 0){
        count++;
    }
}
count++;
console.log(count);

// Revers Part Start
function Revers(str){
    var Reverse = '';
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        Reverse = char + Reverse;
    }
    return Reverse;
}
var Reverstatment ='Hello Js I Am Md Sabbir Hassan Shuvo I Lear You please help Me';
var reversall = Revers(Reverstatment);
console.log(reversall);

// Array Max Part
 var marks = [10,4212,54,636,55,963,514,45,252,55,11,122,552,212];
 var max = marks[0];
 for(var i = 0; i < marks.length; i++){
     var element = marks[i];
     if(element > max){
         max = element;
     }
 }
console.log('Higest Number Is:',max);

// Array Sum
var marks = [10,4212,54,636,55,963,514,45,252,55,11,122,552,212];
var sum = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    sum = sum + element;
}
console.log('Total Number Is:',sum);

// Array sum Function
function ArraySum(mark){
    var sum = marks[0];
    for(var i = 0; i < marks.length; i++){
        var element = marks[i];
        sum = sum + element;
    }
    return sum;
}
var marks = [10,4212,54,636,55,963,514,45,252,55,11,122,552,212];
var allarraySum = ArraySum(marks);
console.log('Function Total Number is:',allarraySum);

// Array Duplakate Part
var marks = [45,52,60,452,656,421,23,5685,23,85,52,52];
var Duplakate = [];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    var index = Duplakate.indexOf(element);
    if(index == -1){
        Duplakate.push(element);
    }
}
console.log(Duplakate);

// Max Part Start
var bussinesman = 5000;
var minster = 6000;
var socib = 7000;
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

// Max Js Spaial
var bussinesman = 400;
var minster = 600;
var socib = 700;
var max = Math.max(bussinesman,minster,socib);
console.log(max);

// Swap Part
var a = 600;
var b = 700;
console.log('before swap: a=',a, 'b=',b);
var temp = a;
a = b;
b = temp;
console.log('after swap: a=',a, 'b=',b);

// Swap js Part
var raju = 500;
var ruba = 600;
[raju,ruba] = [ruba,raju];
console.log('after swap: raju=',raju, 'ruba=',ruba);

//Random Part Start
var number = 420.7896787895478;
var result = Math.floor(number);
console.log(result);

var number = 420.7896787895478;
var result = Math.ceil(number);
console.log(result);

var number = 420.7896787895478;
var result = Math.round(number);
console.log(result);

var number = 9856.7785678879;
var random = Math.random() *10;
var result = Math.round(random);
console.log(result);

// Random For Loop
for(var i = 0; i < 10; i++){
    var number = 9856.7785678879;
    var random = Math.random() *10;
    var result = Math.round(random);
    console.log(result);
}

// Random Function
function Random(n){
    for(var i = 0; i < n; i++){
        var number = 9856.7785678879;
        var random = Math.random() *n;
        var result = Math.round(random); 
    }
    return result;
}
var allrandomf = Random(55540);
console.log(allrandomf);

// Fibonacci Part Start
var fibo = [0,1];
for(var i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i],fibo[i-1],fibo[i-2]);
}
console.log(fibo);

// Fibonacci Function
function Fibonaccifun(n){
    var fibo = [0,1];
    for(var i = 2; i <= n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i],fibo[i-1],fibo[i-2]);
    }
    return fibo
}
var allfibo = Fibonaccifun(40);
console.log(allfibo);

// Fibonacci Recuesive 
function fiborecur(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fiborecur(n-1) + fiborecur(n-2);
    }
}
var allfiborrecure = fiborecur(10);
console.log(allfiborrecure);

// Inch To Feet 
var inch = 4000;
var feet = inch / 12;
console.log(feet);

// Long Time Inch To Feet
function inchtofeet(n){
    var feet = inch / n;
    return feet;
}
var allinch = inchtofeet(40);
console.log(allinch);

// Consent Let Part
var freindage = 40;
if(freindage < 50){
    freindage = 'Ok I am Your Sinior ok so Repect Me ';
}
console.log(freindage);

// Const
const freindage1 = 400;
console.log(freindage1);

// Let
let freindage3 =4000;
freindage3=77778;
freindage3=7327537778;
freindage3=777375578;
console.log(freindage3);

// Leep Year 
var leep = 3200;
var remind = leep % 4;
console.log(remind == 0);

// Leep Year Conditional
var leep2 = 3224;
var remind2 = leep2 % 4;
if(remind2 == 0){
    console.log('This Is Not a Leep Year');
}
else{
    console.log('This is Not a Leep Year');
}

// Factorial Part Start
var factorial = 1;
for(var i = 1; i <= 10; i++){
    factorial = factorial * i;
    // console.log(i,factorial);
}
console.log(factorial);

// Factorial While Loop
var i =1;
var factorial2 =1;
while(i <=10){
    factorial2 = factorial2 * i;
    console.log(factorial2);
    i++
}

// Factorial Function Part
function facte(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
        // console.log(i,factorial);
    }
    return factorial;
}
var allfacte = facte(30);
console.log(allfacte);

//  Conditional Part Start
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
var jomataka = 50000;
if(jobpaiso = true && jomataka < 5000){
    console.log('Ok Toamr Bea Thik Kortase');
}
else{
    console.log('Dure Gea Mor Hala');
}

var jobpaiso = true;
var jomataka = 50000;
if(jobpaiso = true && jomataka > 5000){
    console.log('Ok Toamr Bea Thik Kortase');
}
else{
    console.log('Dure Gea Mor Hala');
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
var jomataka = 700;
if(jobpaiso == true && jomataka < 600){
    console.log('ok Tomar Bea Thik Kortase');
}
else if(jobpaiso == true){
    console.log('Job To ase Taile Somssa Ki');
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

var number = 43444.890868547878;
var result = Math.abs(number);
console.log(result);

var number = 43444.890868547878;
var result = Math.round(number);
console.log(result);

// Array Part Start
var freindage = [10,20,30,40,50,60,70];
console.log(freindage);

var freindage = [10,20,30,40,50,60,70];
var roki = freindage[3];
console.log(roki);

var freindage = [10,20,30,40,50,60,70];
freindage[4] = 500;
var index = freindage.indexOf(40)
console.log(index);

var freindage = [10,20,30,40,50,60,70];
freindage[4] = 500;
var index = freindage.indexOf(5)
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
for(i =0; i <=10; i++){
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
let student = {
    name: 'Sabbir',
    Roll: 3200,
    Reg: 28358548754358345,
}
console.log(student);

let student2 = {
    name: 'Sabbir',
    Roll: 3200,
    Reg: 28358548754358345,
}
student2.name ='Shuvo';
console.log(student2);

var student3 ={
    id:445454545456456,
    phone:1307164307,
    nam:'roki',
}
student3.nam ='Suvon'
var objadd = student.reg=4644545456456456456;
console.log(objadd);
console.log(student3);

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