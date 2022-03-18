function resvers(str){
    var resvers = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        resvers = char + resvers;
    }
    return resvers;
}
var reverscon = 'hello Alian Bhai Brother';
var statment = resvers(reverscon);
console.log(statment);
