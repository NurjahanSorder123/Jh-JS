var marks = [10,20,30,40,50,60,70,80,90];
var max = marks[0];
for( var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max =  element;
    }
}
console.log('The Hight Number:',max);