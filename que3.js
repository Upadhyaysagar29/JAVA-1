// QUESTION 3

// a>=1
// b<= 100001

let a = 10;
let b = 1000;

function check(x,y){
    if( (x%10 == 0) && (y%10 == 0)){
        return true;
    }

    else if( (x%10!=0) && (y%10!=0)){
        return false;
    }

    else if(((x%10!=0) && (y%10==0)) || ((x%10==0) && (y%10!=0) )){
        return true;
    }
} 
if(a>=1 && b <= 10000){
    console.log((check(a,b)));
} else{
    console.log("value not defind");
    
}
