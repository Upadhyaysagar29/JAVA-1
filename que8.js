let m1 = 50, m2 = 50, m3 = 50;
let summation = 0;

function sum(a, b, c) {
   summation = a + b + c;
   return summation;
}

function average(a, b, c) {
   let avg = (a + b + c) / 3;
   return avg;
}

if(((m1 >= 0) && (m1 <= 100)) && ((m2 >= 0) && (m2 <= 100)) && ((m3 >= 0) && (m3 <= 100))) {
   console.log(sum(m1, m2, m3));
   console.log(average(m1, m2, m3));
} else {
   console.log("Marks are invalid")
}