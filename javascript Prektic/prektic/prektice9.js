var pc =6000;
if(pc <7000){
    console.log('Ok Ami Apnar Pc ta Bil Kore Detase Just Wait And See');
}
else{
    console.log('Sorry Bro Toamr Kase Porjapto Taka Nai');
}

var pc =6000;
if(pc > 7000){
    console.log('Ok Ami Apnar Pc ta Bil Kore Detase Just Wait And See');
}
else{
    console.log('Sorry Bro Toamr Kase Porjapto Taka Nai');
}

var pc =6000;
if(pc == 6000){
    console.log('Ok Ami Apnar Pc ta Bil Kore Detase Just Wait And See');
}
else{
    console.log('Sorry Bro Toamr Kase Porjapto Taka Nai');
}

var pc =6000;
if(pc != 6000){
    console.log('Ok Ami Apnar Pc ta Bil Kore Detase Just Wait And See');
}
else{
    console.log('Sorry Bro Toamr Kase Porjapto Taka Nai');
}

var jobpaiso = true;
var jomataka = 6000;
if(jobpaiso =true && jomataka < 7000){
    console.log('ok Ami Dakhtase Kivabe SYstem Kora Jai');
}
else{
    console.log('Toamr To Taka Ba Job Kontai nai So Tomak Bea Korbe Ka bolo');
}

var jobpaiso = false;
var jomataka = 6000;
if(jobpaiso == true && jomataka < 7000){
    console.log('ok Ami Dakhtase Kivabe SYstem Kora Jai');
}
else{
    console.log('Toamr To Taka Ba Job Kontai nai So Tomak Bea Korbe Ka bolo');
}

var jobpaiso = false;
var jomataka = 6000;
if(jobpaiso == true || jomataka < 7000){
    console.log('ok Ami Dakhtase Kivabe SYstem Kora Jai');
}
else{
    console.log('Toamr To Taka Ba Job Kontai nai So Tomak Bea Korbe Ka bolo');
}

var jobpaiso = true;
var jomataka = 6000;
if(jobpaiso == true && jomataka < 5000){
    console.log('ok Ami Dakhtase Kivabe SYstem Kora Jai');
}
else if( jobpaiso == true){
    console.log('Ok Tomar Job To Ase Taile Somssa Ki Bea kore Falo')
}
else{
    console.log('Toamr To Taka Ba Job Kontai nai So Tomak Bea Korbe Ka bolo');
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
var mointor =700;
var total = pc + mointor;
console.log(total);

var pc = 500;
var mointor ='700.5554554512454755558555';
mointor = parseFloat(mointor);
console.log(mointor);

var pc = 500;
var mointor ='700.5554554512454755558555';
mointor = parseInt(mointor);
console.log(mointor);

var pc = 500;
var mointor ='700.5554554512454755558555';
mointor = ' '+mointor;
console.log(pc+typeof mointor);

var salfar = 0.6345544546456545454;
var potaseam =0.355554435333326252;
var total = salfar + potaseam;
total = total.toFixed(3);
console.log(total);

var salfar = 4500;
var potaseam = 5000;
salfar++
potaseam++
var total = salfar + potaseam;
console.log(total);

var nam ='MD.';
var nam2 ='Sabbir';
var nam3 ='Hassan';
var nam4 ='(Shuvo)';
var total = nam+ ' '+nam2 +' '+nam3 +' '+nam4;
console.log(total);

var number = 450.65544544232324654654541654;
var  absulate =Math.abs(number);
console.log(absulate);

var number = 450.65544544232324654654541654;
var  absulate =Math.round(number);
console.log(absulate);

//Array Part Start

var friend =[20,30,40,50,60];
console.log(friend);

var friend =[20,30,40,50,60];
console.log(friend[4]);

var friend =[20,30,40,50,60];
var roki = friend[2]
console.log(roki);

var friend =[20,30,40,50,60];
friend[4]=400;
console.log(friend);

var friend =[20,30,40,50,60];
friend[4]=400;
var index = friend.indexOf(400);
console.log(index);

var friend =[20,30,40,50,60];
friend[4]=400;
var index = friend.indexOf(42300);
console.log(index);

var friend =[20,30,40,50,60];
friend[4]=400;
friend.push(70,80,90,100);
console.log(friend);

var friend =[20,30,40,50,60];
friend[4]=400;
friend.push(70,80,90,100);
friend.pop();
friend.pop();
friend.pop();
console.log(friend);

var friend =[20,30,40,50,60];
friend[4]=400;
friend.unshift(10,20,30,40,50,60,70,80,90);
console.log(friend);

var friend =[20,30,40,50,60];
friend[4]=400;
friend.shift(10,20,30,40,50,60,70,80,90);
console.log(friend);

var friend =[20,30,40,50,60];
var friend2 =friend.slice(3);
console.log(friend2);
console.log(friend);

// While Loop
var whileloop = 200;
while(whileloop <=220){
    console.log(whileloop);
    whileloop++;
}

// For Loop Start Now
for(i =1; i <=30; i++){
    console.log(i);
}

var classal =[10,20,30,40,50,60,70,80,90,100];
for(var i=0; i <=classal.length; i++){
    var classall = classal[i];
    console.log(classall);
}

//Switch Part Start

number =600;
switch(number){
    case 100:
        console.log('I Am 100');
    break;
    case 200:
        console.log('I Am 200');
    break;
    case 300:
        console.log('I Am 300');
    break;
    case 400:
        console.log('I Am 400');
    break;
    default:
    console.log('I Am Sorry This Number Is Not Found');
}

//Function Part Start
function hospital(){
    console.log('Tomwwro I am Going To Heard Fundition');
    console.log('Becuse My Mother is osusto');
}
hospital();

function dubolnumber(dabolnum){
    var ressult = dabolnum*2;
    console.log(ressult);
}
dubolnumber(10);

function dubolnumber(dabolnum){
    var ressult = dabolnum*2;
    return ressult;
}
var first = dubolnumber(10);
var secend = dubolnumber(20);
var thrid = dubolnumber(30);
var total = first + secend + thrid;
console.log(total);

function add (num1,num2){
    var total = num1 + num2;
    return total;
}
var addtotal = add(400,500);
console.log(addtotal);

// Onject Part Start

var student ={id:322, phone:24542435346, nam:'Ovi'};
var student2 ={id:322, phone:24542435346, nam:'roi'};
console.log(student);
console.log(student2);

var student ={id:322, phone:24542435346, nam:'Ovi'};
var student2 ={id:322, phone:24542435346, nam:'roi'};
student.phone =56456465465465;
console.log(student);
console.log(student2);

var student ={id:322, phone:24542435346, nam:'Ovi'};
var student2 ={id:322, phone:24542435346, nam:'roi'};
student.nam ='My Name Is Ovi';
student.phone =56456465465465;
console.log(student);
console.log(student2);

var student ={id:322, phone:24542435346, nam:'Ovi'};
var student2 ={id:322, phone:24542435346, nam:'roi'};
var poprtyadd = student.Reg=344545456456465453543;
student.nam ='My Name Is Ovi';
student.phone =56456465465465;
console.log(poprtyadd);
console.log(student);
console.log(student2);