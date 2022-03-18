var pen =400;
if(pen > 300){
    console.log('What Are The Price This Pen')
}
else{
    console.log('Tui Sala Gorib Sala Akta Pen Kanar Taka nai')
}

var pen =400;
if(pen < 500){
    console.log('What Are The Price This Pen')
}
else{
    console.log('Tui Sala Gorib Sala Akta Pen Kanar Taka nai')
}

var pen =500;
if(pen == 500){
    console.log('What Are The Price This Pen')
}
else{
    console.log('Tui Sala Gorib Sala Akta Pen Kanar Taka nai')
}

var pen =500;
if(pen != 500){
    console.log('What Are The Price This Pen')
}
else{
    console.log('Tui Sala Gorib Sala Akta Pen Kanar Taka nai')
}

var jobpaiso = true;
var savemoney = 5000;
if(jobpaiso == true && savemoney > 4000){
    console.log('I have pay Your All Amount Ok');
}
else{
    console.log('But You My Work didnot Finisted. T have No Pay You')
}

var jobpaiso = false;
var savemoney = 5000;
if(jobpaiso == true && savemoney > 4000){
    console.log('I have pay Your All Amount Ok');
}
else{
    console.log('But You My Work didnot Finisted. T have No Pay You')
}

var jobpaiso = false;
var savemoney = 5000;
if(jobpaiso == true || savemoney > 4000){
    console.log('I have pay Your All Amount Ok');
}
else{
    console.log('But You My Work didnot Finisted. T have No Pay You')
}

var jobpaiso = true;
var savemoney = 5000;
if(jobpaiso == true && savemoney > 9000){
    console.log('I have pay Your All Amount Ok');
}
else if(jobpaiso == true){
    console.log('ok sir i will try my best');
}
else{
    console.log('But You My Work didnot Finisted. T have No Pay You')
}

var prevday = 'Preve Prektice Start Now';
console.log(prevday);

var uparcase ='Sorry My Work I am leeat today I am Extimle Sorry';
console.log(uparcase.toUpperCase());

var uparcase ='Sorry My Work I am leeat today I am Extimle Sorry';
console.log(uparcase.toLowerCase());

var uparcase ='Sorry My Work I am leeat today I am Extimle Sorry';
console.log(uparcase.indexOf("I"));

var uparcase ='Sorry My Work I am leeat today I am Extimle Sorry';
console.log(uparcase.indexOf("A"));

var uparcase ='Sorry My Work I am leeat today I am Extimle Sorry';
console.log(uparcase.split("Work"));

var uparcase ='Sorry My Work I am leeat today I am Extimle Sorry';
console.log(uparcase.split(" "));

var pc =40000;
var monitor = 12000;
var result = pc+ monitor;
console.log(result);

var pc1 =40000;
var monitor1 = '12000.55559521654345645545';
monitor1 = parseFloat(monitor1);
console.log(pc1+ monitor1);

var pc2 =40000;
var monitor2 = '12000.54677777445654656564486';
monitor2 = parseInt(monitor2);
console.log(pc2+ monitor2);

var pc2 =40000;
var monitor2 = '12000.54677777445654656564486';
monitor2 = ' '+monitor2;
console.log(pc2+ typeof monitor2);

var pointer = 0.1562245324562;
var pointer2 = 0.6331454145545;
var total = pointer + pointer2;
total = total.toFixed(4);
console.log(total);

var pen = 40;
var book = 50;
pen++
var total = pen + book;
console.log(total);
var gap = 'Md.';
var gap1 = 'Sabbir';
var gap2 = 'Hassan';
var gap3 = '(Shuvo)';
var total = gap + ' ' + gap1 + ' '+ gap2 + '  '+ gap3;
console.log(total);

var number = 400.556455464654;
var absulate = Math.abs(number);
console.log(absulate);

var number = 400.456455464654;
var absulate = Math.round(number);
console.log(absulate);