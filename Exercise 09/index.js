/*
Create a faulty calculator using java script 
This faulty calculator does following things:
1. it takes two number from the user
2. it performs wrong operations as follows

 + ---> -
 * ---> +
 - ---> /
 / ---> **

3. it performs wrong operations 10% of times .
*/
let yes="Y";
do{
let random=Math.random()
// let a=prompt("Enter first number")
// let b=prompt("Enter second number")
// print("Enter a for add s for substract m for multiply and d for dividing ");
// let c=prompt("Enter operation")
a=34;
b=23;
if(random<0.1){
    switch (c) {
        case a:
            print(a-b);
            break;
        case s:
            print(a/b);
            break;
        case m:
            print(a+b);
            break;
        case d:
            print(a**b);
            break;

        default:
            break;
    }
}
else{
    switch (c) {
        case a:
            print(a+b)
            break;
        case s:
            print(a-b)
            break;
        case m:
            print(a*b)
            break;
        case d:
            print(a/b)
            break;

        default:
            break;
    }
}
yes= prompt("Do You want to exit");
}while (yes=="Y") 
    
