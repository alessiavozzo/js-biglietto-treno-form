// Variables connected to html
const userKm = document.getElementById("user-km");  
const userAge = document.getElementById("user-age");
const userBtn = document.getElementById("user-btn");

console.log(userKm.value);

// Price variables
const costPerKm = 0.21;
const fullPrice = costPerKm * userKm.value;
const minorDiscount = 0.2;
const seniorDiscount = 0.4;

/* let ticketPrice;

if(userAge.value < 18){
    ticketPrice = (fullPrice - (fullPrice * minorDiscount)).toFixed(2);
}
else if(userAge.value > 65){
    ticketPrice = (fullPrice - (fullPrice * seniorDiscount)).toFixed(2);
}
else{
    ticketPrice = fullPrice.toFixed(2);
}

 */

// Click-btn
/* userBtn.addEventListener('click', function(){
    alert(ticketPrice)
}) */