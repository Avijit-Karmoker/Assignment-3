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

function hotelCost(days){
    var rent = 0;
    //if we take the days value from 0-10 then here we find out a result
    if (days <= 10) {
        rent = days * 100;
    }
    //if we take the days value from 10-20 then here we find out a result
    else if (days <= 20) {
        var firstHalfDays = 10 * 100;
        var remaining = days - 10;
        var secondHalfDays = remaining * 80;
        rent = firstHalfDays + secondHalfDays;
    }
    //if we take the days value from 20 to more then here we find out a result
    else{
        var firstHalfDays = 10*100;
        var secondHalfDays = 10*80;
        var remaining = days-20;
        var lastHalfDays = remaining*50;
        rent = firstHalfDays + secondHalfDays + lastHalfDays;
    }
    return rent;
}

var totalCost = hotelCost(71);
console.log(totalCost);

//Problem-4

function megaFriend(arr){
    var word = "";
    for (var i=0; i<arr.length; i++){
        if(word.length < arr[i].length){
            word = arr[i];
        }
    }
    return word;
}
var bigWord= megaFriend(["Avijit", "Rezaul", "Deep", "Himel", "Rafiquel", "SharminHarami"]);
console.log(bigWord);
