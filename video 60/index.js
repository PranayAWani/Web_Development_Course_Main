// string tutorial
console.log("This is strings tutorial");
let a="Pranay"
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);

let real_name =" Pranay"
let friend =" Nishant"

console.log("hey hi my name is "+real_name +" and my friends name is "+ friend);
console.log(`hey hi my name is &{real_name} and my friends name is &{friend}`); 

console.log(a.toLowerCase());
console.log(a.toUpperCase());

//name slicing

console.log(a.slice(2,4)); // only the words between 2 and 4 will be printed with 4th alphabet included and 2nd alphabet excluded

// replacing

console.log(a.replace ("Pranay","Vibhor"));

// concard

console.log(a.concat(friend," Shlok"," Kavish"));
