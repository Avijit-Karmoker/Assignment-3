// https://github.com/Coffee-Ovi/Assignment-3

//Problem-1

function kilometerToMeter(km) {
    if (km < 0) {
        console.log('Error'); ///for nagative value it show a error message.
    } else {
        return (km * 1000);
    }
}

var meter = kilometerToMeter(20);
console.log(meter); //for showing output.

//Problem-2

function budgetCalculator(clock, phone, laptop) {

    //for clock price
    if (clock < 0 || phone < 0 || laptop < 0) {
        console.log('Error');                       ///for nagative value it show a error message.
    }
    else {
        //find out clock total price
        var totalClockPrice = clock * 50;

        //find out phone total price
        var totalPhonePrice = phone * 100;

        //find out laptop total price
        var totalLaptopPrice = laptop * 500;

        //finally here find out the all total price for these three product
        var totalPrice = totalClockPrice + totalPhonePrice + totalLaptopPrice;
        return (totalPrice);
    }

}
var totalAmount = budgetCalculator(7, 5, 2);
console.log(totalAmount);

//Problem-3

function

