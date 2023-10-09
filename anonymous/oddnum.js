///print odd num in annonymous function
var a = function()
{
    var b =[1,2,3,44,54,35,67,65,78,];
for(var i=0; i<b.length; i++){
    if(b[i]% 2!=0)
    {
        console.log(b[i]);
    }
}
};
console.log(a());
