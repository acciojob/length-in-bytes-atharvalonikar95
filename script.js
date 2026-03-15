const byteSize = (str) => {
  // write your code here
	// let len=0
	// if(str.length===0){
	// 	return 0
	// }

	return new TextEncoder().encode(str).length;

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str)); 
