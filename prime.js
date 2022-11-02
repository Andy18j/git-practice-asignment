function checkPrime(number){
let factor=0;
   
for(let i=0; i<=number; i++){
if(number%i==0){
 factor++;
}
}
if(factor==2){
    return true;
}
  return false;
}
let ans = checkPrime(17);
if (ans==true){
  console.log("prime")
}else { console.log("not prime")
      }

