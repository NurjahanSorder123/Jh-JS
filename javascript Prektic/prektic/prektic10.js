var pc =5000;
if(pc < 6000){
    console.log('Ami Apnaka akta good title ar Pc Detase');
}
else{
 console.log('Sorry Bro Tomar Portjapto Taka Nai I am Sorry');
}

var pc =5000;
if(pc > 5000){
    console.log('Ami Apnaka akta good title ar Pc Detase');
}
else{
 console.log('Sorry Bro Tomar Portjapto Taka Nai I am Sorry');
}

var pc =5000;
if(pc == 5000){
    console.log('Ami Apnaka akta good title ar Pc Detase');
}
else{
 console.log('Sorry Bro Tomar Portjapto Taka Nai I am Sorry');
}

var pc =5000;
if(pc != 5000){
    console.log('Ami Apnaka akta good title ar Pc Detase');
}
else{
 console.log('Sorry Bro Tomar Portjapto Taka Nai I am Sorry');
}

var jobpaiso =true;
var jomataka =5000;
if(jobpaiso = true && jomataka < 6000){
    console.log('Ok Ami Dakhtase Ki vabe BEa Dua JAi');
}
else{
    console.log('Tor Sala Kopale Bow Nai');
}

var jobpaiso =false;
var jomataka =5000;
if(jobpaiso == true && jomataka < 6000){
    console.log('Ok Ami Dakhtase Ki vabe BEa Dua JAi');
}
else{
    console.log('Tor Sala Kopale Bow Nai');
}

var jobpaiso =false;
var jomataka =5000;
if(jobpaiso == true || jomataka < 6000){
    console.log('Ok Ami Dakhtase Ki vabe BEa Dua JAi');
}
else{
    console.log('Tor Sala Kopale Bow Nai');
}

var jobpaiso =true;
var jomataka =5000;
if(jobpaiso == true && jomataka < 4000){
    console.log('Ok Ami Dakhtase Ki vabe BEa Dua JAi');
}
else if(jobpaiso == true){
    console.log('Ok Tor To Job Ase Tai na Taile Bapar na Bea dea debo');
}
else{
    console.log('Tor Sala Kopale Bow Nai');
}

var collage = 'Toady My First Collage Now So I am Very Interest!!!!!!!!!!';
console.log(collage.toLowerCase());

var collage = 'Toady My First Collage Now So I am Very Interest!!!!!!!!!!';
console.log(collage.toUpperCase());

var collage = 'Toady My First Collage Now So I am Very Interest!!!!!!!!!!';
console.log(collage.indexOf('So'));

var collage = 'Toady My First Collage Now So I am Very Interest!!!!!!!!!!';
console.log(collage.indexOf('my'));

var collage = 'Toady My First Collage Now So I am Very Interest!!!!!!!!!!';
console.log(collage.split('So'));

var collage = 'Toady My First Collage Now So I am Very Interest!!!!!!!!!!';
console.log(collage.split(' '));

var pc = 500;
var ram = 500;
var total = pc + ram
console.log(total);

var pc = 500;
var ram = '500.45465456454645626666';
ram = parseFloat(ram);
console.log(ram);

var pc = 500;
var ram = '500.45465456454645626666';
ram = parseInt(ram);
console.log(ram);

var pc = 500;
var ram = '500.45465456454645626666';
ram = ' '+ram;
console.log(pc+typeof ram);

var apu = 0.9222551451552552255;
var bro = 0.6366666666662532332;
var total = apu + bro;
total = total.toFixed(2);
console.log(total);

var apu = 500;
var bro = 500;
apu++;
bro++;
apu++;
bro++;
apu++;
bro++;
apu++;
bro++;
apu++;
bro++;
var total =apu+bro;
console.log(total);

var nam ='MD.';
var nam2 ='Sabbir';
var nam3 ='Hassan';
var nam4 ='(Shuvo)';
var total = nam+ ' '+nam2 +' '+nam3 +' '+nam4;
console.log(total);

var namer =250.66566555554454545;
var absulate =Math.abs(namer);
console.log(absulate);

var namer =250.96566555554454545;
var absulate =Math.round(namer);
console.log(absulate);

// Array Par Start

var friend = [10,20,30,40,50,60,70,80];
console.log(friend);

var friend = [10,20,30,40,50,60,70,80];
console.log(friend[4]);

var friend = [10,20,30,40,50,60,70,80];
var roki = friend[5]
console.log(roki);

var friend = [10,20,30,40,50,60,70,80];
friend[6]=4000;
var index = friend.indexOf(80);
console.log(index);

var friend = [10,20,30,40,50,60,70,80];
friend[6]=4000;
var index = friend.indexOf(802);
console.log(index);

var friend = [10,20,30,40,50,60,70,80];
friend[6]=4000;
friend.push(80,90,100);
console.log(friend);

var friend = [10,20,30,40,50,60,70,80];
friend[6]=4000;
friend.push(80,90,100);
friend.pop();
friend.pop();
friend.pop();
console.log(friend);

var friend = [10,20,30,40,50,60,70,80];
friend[6]=4000;
friend.unshift(80,90,100);
console.log(friend);

var friend = [10,20,30,40,50,60,70,80];
friend[6]=4000;
friend.shift(80,90,100);
console.log(friend);

var friend =[10,20,30,40,50,60,70];
var friend2 =friend.slice(2);
console.log(friend2);
console.log(friend);

// While Loop
var whilenumber =10;
while(whilenumber <= 30){
    console.log(whilenumber);
    whilenumber++;
}

// For Loop
for(i =200; i <=400; i++){
    console.log(i);
}

var classal = [10,20,30,40,50,60,70,80,90,100];
for(i =0; i < classal.length; i++){
    var classall = classal[i];
    console.log(classall);
}

// Switch Part Start
numbr = 400;
switch(numbr){
    case 100:
        console.log('I am 100');
    break;
    case 200:
        console.log('I am 200');
    break;
    case 300:
        console.log('I am 300');
    break;
    case 400:
        console.log('I am 400');
    break;
    case 500:
        console.log('I am 500');
    break;
    case 600:
        console.log('I am 600');
    break;
    case 700:
        console.log('I am 700');
    break;
    default:
        console.log('No Problem');
}

// Function Part Start

function collagei(){
    console.log('Today I am Going My Collage');
    console.log('Today I Am Going To Bgift');
}
collagei();

function dabol(dubolnumber){
    var total =dubolnumber*4;
    console.log(total);
}
dabol(500);

function dabol(dubolnumber){
    var total =dubolnumber*4;
    return total;
}
var first =dabol(500);
var secend =dabol(600);
var thrid =dabol(700);
var forth =dabol(800);
var total = first+secend+thrid+forth;
console.log(total);

function add (num1,num2){
    var total =num1+num2;
    return total;
}
var addtotal =add(800,900,400);
console.log(addtotal);

// Obeject Part Start
var student ={
    id:36676537778,
    phone:01307164307,
    nam:"Sabbir",
}
console.log(student);

var student ={
    id:36676537778,
    phone:01307164307,
    nam:"Sabbir",
}
student.phone = 4662552532333;
console.log(student);

var student ={
    id:36676537778,
    phone:01307164307,
    nam:"Sabbir",
}
student.phone = 4662552532333;
student.nam = "Hello I am Md Sabbir hassan";
console.log(student);

var student ={
    id:36676537778,
    phone:01307164307,
    nam:"Sabbir",
}
var porpatyadd = student.reg=46566553235;
student.phone = 4662552532333;
student.nam = "Hello I am Md Sabbir hassan";
console.log(porpatyadd);
console.log(student);

//inch to Feet 
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
