// QUESTION 7

let a = 24;
let b = 567;

function Multiply_two_number (x , y){

    let res = x * y;
    console.log(res);
    
}
if ((a>= 1) && (b<= 301)){
    Multiply_two_number(a,b);
}else {
    console.log("Error: Constraints out of bound!");
    
}