var student = [10,20,10,30,40,20,30,40,50,60,70,80,90];
var duplakate = [];
for(var i =0; i < student.length; i++){
    var element = student[i];
    var index = duplakate.indexOf(element);
    if(index == -1){
        duplakate.push(element);
    }
}
console.log(duplakate);