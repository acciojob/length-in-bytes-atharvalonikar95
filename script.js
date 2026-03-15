const byteSize = (str) => {
  // write your code here
	let len=0
	if(str.length===0){
		return 0
	}
	for (let index = 0; index < str.length; index++) {
		if(str[index]!=" "){
			len+=Buffer.byteLength(str[index], "utf8")
		}
	}
	return "length is "+len
// };

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str)); 
