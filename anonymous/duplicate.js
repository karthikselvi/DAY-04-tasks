let arr = ["apple", "mango", "apple", 
		"orange", "mango", "mango"]; 

 let dup=function(arr) { 
	return arr.filter((item, 
		index) => arr.indexOf(item) === index); 
} 
console.log(dup(arr));
