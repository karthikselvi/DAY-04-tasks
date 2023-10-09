//return the palindrome in an array anonymous function
var p = function()
	{
	let a=["abc","mam","racecar","ada"];
	for( var i=0; i<a.length; i++)
	{
	var s= a[i].split("").reverse().join("");
	if(s==a[i])
	{
	  console.log(a[i]);
	}
	}
	};
	console.log(p());