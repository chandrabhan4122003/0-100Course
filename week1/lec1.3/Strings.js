// String Manipulation
let str="ndnndnd"
console.log(str.length) // Output: 6

// indexOf
console.log(str.indexOf("d"));

// lastIndex
str.lastIndexOf("d");

// slice
str.slice(str,0,5); //exclude 5 or end point: str,start,end (arguments)

// substring
str.substring(str,0,5); // str,start,length(arguments)

// replace string
str.replace("d","a");

// split 
str.split(" "); //outputs in an array

// trim
str.trim();

// toUpper
str.toUpperCase();
// toLower
str.toLowerCase(); // Output: string in lower case


