var pc =5000;
if(pc <6000){
    console.log('Ok Ami PC ta ready Kore detase');
}
else{
    console.log('Sorry Sir Apnar Poriman Taka Nai');
}

var pc =5000;
if(pc > 6000){
    console.log('Ok Ami PC ta ready Kore detase');
}
else{
    console.log('Sorry Sir Apnar Poriman Taka Nai');
}

var pc =5000;
if(pc == 5000){
    console.log('Ok Ami PC ta ready Kore detase');
}
else{
    console.log('Sorry Sir Apnar Poriman Taka Nai');
}

var pc =5000;
if(pc != 5000){
    console.log('Ok Ami PC ta ready Kore detase');
}
else{
    console.log('Sorry Sir Apnar Poriman Taka Nai');
}

var jobpaiso = true;
var selary = 60000;
if(jobpaiso = true && selary < 70000){
    console.log('ok Kono Cinta Nai Ami Mea Dakhtase');
}
else{
    console.log('Tomar To Porjapto Taka Nai I Khane Ami Ki Korte Pari Bolo I Am Sorry');
}

var jobpaiso = false;
var selary = 60000;
if(jobpaiso == true && selary < 70000){
    console.log('ok Kono Cinta Nai Ami Mea Dakhtase');
}
else{
    console.log('Tomar To Porjapto Taka Nai I Khane Ami Ki Korte Pari Bolo I Am Sorry');
}

var jobpaiso = false;
var selary = 60000;
if(jobpaiso == true || selary < 70000){
    console.log('ok Kono Cinta Nai Ami Mea Dakhtase');
}
else{
    console.log('Tomar To Porjapto Taka Nai I Khane Ami Ki Korte Pari Bolo I Am Sorry');
}

var jobpaiso = true;
var selary = 60000;
if(jobpaiso == true && selary < 50000){
    console.log('ok Kono Cinta Nai Ami Mea Dakhtase');
}
else if( jobpaiso == true){
    console.log('Ok Tomar Job To Ase Taile Somssa Ki Bea kore Falo')
}
else{
    console.log('Tomar To Porjapto Taka Nai I Khane Ami Ki Korte Pari Bolo I Am Sorry');
}

var collage = 'Starday I am Going To Collage';
console.log(collage.toLowerCase());

var collage = 'Starday I am Going To Collage';
console.log(collage.toUpperCase());

var collage = 'Starday I am Going To Collage';
console.log(collage.indexOf('am'));

var collage = 'Starday I am Going To Collage';
console.log(collage.indexOf('Do'));

var collage = 'Starday I am Going To Collage';
console.log(collage.split('I'));

var collage = 'Starday I am Going To Collage';
console.log(collage.split(' '));

var ram = 4000;
var rgb = 5000;
var total = ram + rgb;
console.log(total);

var ram = 4000;
var rgb = '50.456548600';
rgb = parseFloat(rgb);
console.log(rgb);

var ram = 4000;
var rgb = '50.656548600';
rgb = parseInt(rgb);
console.log(rgb);

var ram = 4000;
var rgb = '50.656548600';
rgb = ' '+rgb;
console.log(ram+typeof rgb);

var anu = 0.596223652623213256562323565323232323;
var potol = 0.4755225525523154656654664551561516;
var total = anu + potol;
total = total.toFixed(2);
console.log(total);

var ram = 4000;
var rgb = 5000;
rgb++
var total = ram + rgb;
console.log(total);

var nam ='MD.';
var nam2 ='Sabbir';
var nam3 ='Hassan';
var nam4 ='(Shuvo)';
var ressult = nam + ' '+ nam2 + ' '+ nam3 +' ' + nam4;
console.log(ressult);

var number = 450.564454543443565665435151551212212112;
var absulate = Math.abs(number);
console.log(absulate);

var number = 450.464454543443565665435151551212212112;
var absulate = Math.round(number);
console.log(absulate);

// Array Start
var frinedsage =[40,50,60,70,80,90];
console.log(frinedsage);

var frinedsage =[40,50,60,70,80,90];
console.log(frinedsage[4]);

var frinedsage =[40,50,60,70,80,90];
var raka = frinedsage[3];
console.log(raka);

var frinedsage =[40,50,60,70,80,90];
frinedsage[3] = 400;
console.log(frinedsage);

var frinedsage =[40,50,60,70,80,90];
frinedsage[3] = 400;
var index = frinedsage.indexOf(80);
console.log(index);

var frinedsage =[40,50,60,70,80,90];
frinedsage[3] = 400;
var index = frinedsage.indexOf(800);
console.log(index);

var frinedsage =[40,50,60,70,80,90];
frinedsage[3] = 400;
frinedsage.push(100,200,300,400,500,600,700,800,900,1000);
console.log(frinedsage);

var frinedsage =[40,50,60,70,80,90];
frinedsage[3] = 400;
frinedsage.push(100,200,300,400,500,600,700,800,900,1000);
frinedsage.pop();
frinedsage.pop();
frinedsage.pop();
frinedsage.pop();
frinedsage.pop();
frinedsage.pop();
frinedsage.pop();
frinedsage.pop();
console.log(frinedsage);
 
var friendsrol =[40,50,60,70,80,90];
friendsrol.unshift(10,20,30);
console.log(friendsrol);

var friendsrol =[40,50,60,70,80,90];
friendsrol.shift(10,20);
console.log(friendsrol);

var friendsname =[10,20,30,40,50,60,70];
var friends = friendsname.slice(3,1);
console.log(friends);
console.log(friendsname);

// While Loop Start
var whileloop = 200;
while(whileloop <= 220){
    console.log(whileloop);
    whileloop++
}

// For Loop Start
for(var i =0; i <=10; i++){
    console.log(i);
}

var friendrool =[10,20,30,40,50,60,70,80,90];
for(var i =0; i < friendrool.length; i++){
    var allrool = friendrool[i];
    console.log(allrool);
}

// Switch Part Start
number =50;
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
    case 700:
        console.log('Hello I am 700');
        break;
    default:
    console.log('I dont Know Who are You')
}

//Function Part Start
function hellofunction(){
    console.log('Hello Function I Am Sabbir');
    console.log('I Am Begenar This Subject');
}
hellofunction();

function dubool(duboolnumber){
    var ressult = duboolnumber *4;
    console.log(ressult);
}
dubool(40);

function dubool(duboolnumber){
    var ressult = duboolnumber *4;
    return ressult;
}
var friend1 =dubool(40);
var friend2 =dubool(50);
var friend3 =dubool(60);
var friend4 =dubool(70);
var total = friend1+friend2+friend3+friend4;
console.log(total);

function add(Num1, num2){
    var total =Num1+ num2;
    return total;
}
var addtotal = add(40,50);
console.log(addtotal);

// Objet Part Start
var student ={id:324, phone:43243, name:'Sabbir'};
var student1 ={id:324444, phone:43254543, name:'Rabbi'};

console.log(student);
console.log(student1);

var student ={id:324, phone:43243, name:'Sabbir'};
var student1 ={id:324444, phone:43254543, name:'Rabbi'};
var phonenum= student.phone;
student.phone =3467637664575786;
console.log(phonenum);
console.log(student);
console.log(student1);

var student ={id:324, phone:43243, name:'Sabbir'};
var student1 ={id:324444, phone:43254543, name:'Rabbi'};
var namechange = student.name;
student.name ='Md. Sabbir Hassan Shuvo Feature Web Devoloper';
console.log(namechange);
console.log(student);
console.log(student1);

var student ={id:324, phone:43243, name:'Sabbir'};
var student1 ={id:324444, phone:43254543, name:'Rabbi'};
var popartyadd = student.Rollnumber =4000000;
console.log(popartyadd);
console.log(student);
console.log(student1);			