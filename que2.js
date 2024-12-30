// QUESTION 2

let a = 0;
let b = 111;

function Is_Valid(x, y) {
   if((x >= 1) && (y <= 5001)) {
      return true;
   } else {
      return false;
   }
}

if((a >= 1) && (b <= 5001)) {
   console.log(Is_Valid(a, b));
} else {
   console.log("false")
}