// Variables connected to html
//user
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");
const createBtn = document.getElementById("create-btn");
const userName = document.getElementById("user-name");

//ticket
const ticketName = document.querySelector(".ticket-name > p");
const ticketOffer = document.querySelector(".ticket-offer > p");
const ticketPrintPrice = document.querySelector(".ticket-print-price > p");
const ticketCode = document.querySelector(".random-code > p");
const ticketWagon = document.querySelector(".wagon > p");
const resetBtn = document.getElementById("reset-btn")

// Price variables
const costPerKm = 0.21;
const minorDiscount = 0.2;
const seniorDiscount = 0.4;

createBtn.addEventListener('click', function () {

    const fullPrice = costPerKm * userKm.value;
    
    let ticketPrice;


    if (userAge.value < 18) {
        ticketPrice = (fullPrice - (fullPrice * minorDiscount)).toFixed(2);
        ticketOffer.innerHTML = "Junior ticket";
    }
    else if (userAge.value > 65) {
        ticketPrice = (fullPrice - (fullPrice * seniorDiscount)).toFixed(2);
        ticketOffer.innerHTML = "Senior ticket";
    }
    else {
        ticketPrice = fullPrice.toFixed(2);
        ticketOffer.innerHTML = "Standard ticket";
    }

    // console.log(ticketPrice);

    ticketName.innerHTML = userName.value; 
    ticketCode.innerHTML = Math.ceil(Math.random() * 100000);
    ticketWagon.innerHTML = Math.ceil(Math.random() * 10);
    ticketPrintPrice.innerHTML = `${ticketPrice} €`;

})


resetBtn.addEventListener("click", function(){
    console.log("Btn cancel");
    userName.value = " "
    userKm.value = null
    userAge.value = null
})


