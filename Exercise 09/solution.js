let random = Math.random()
let a= prompt("Enter first number")
let b= prompt("Enter second number")
let c= prompt("Enter operator")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if (random > 0.1){
    // Perform correct calculator 
    alert(`The result is ${eval(`${a} ${c} ${b}` )}`)
}
else{
    // Perform wrong calculator
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}` )}`)
}