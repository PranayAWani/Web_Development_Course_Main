console.log("tutorial on loops");
let a=1;
console.log(a);
console.log(a+1);
console.log(a+2);
// for loop
for (let a = 0; a <= 100; a++) {
    console.log(a);
}

// forin loop
let obj = {
    name :"Pranay",
    Company :"Code with Pranay",
    role :"Developer"
}

for (const key in obj) { // to print both object key and object element
    const element =obj[key];
    console.log(key, element)   
    }

for (const key in obj) { // to print object key only
    
    console.log(key)   
    }

for (const key in obj) { // to print object element only
    const element =obj[key];
    console.log( element)   
    }

// foroff loop
for (const c of "pranay") {
    console.log(c);
}
// while loop

let i=0;
while (i<10) {
    console.log(i);
    i++;
}

//do while loop
let j=8
do {
    console.log(j);
    j++
} while (j<7);

