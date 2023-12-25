function nice(name) {
    console.log("Hey "+ name + " you are nice! ");
    console.log("Hey "+ name + " you are good!");
    console.log("Hey "+ name + " you are v. good!");
    console.log("Hey "+ name + " your t shirt is cool!");
    console.log("Hey "+ name + " your laptop is awsome!");
}

function sum(a,b,c=3) {
    console.log(a + b);
    return a+b+c
}
nice("nishant")
nice("shivam")
nice("Pranay")
result1=sum(3,5)
result2=sum(34,5)
result3=sum(3,55,11)
console.log("The sum of these given number is: ",result1);
console.log("The sum of these given number is: ",result2);
console.log("The sum of these given number is: ",result3);

const funct1