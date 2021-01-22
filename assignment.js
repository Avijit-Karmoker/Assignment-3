// https://github.com/Coffee-Ovi/Assignment-3

//Problem-1

function kilometerToMeter(km){
    if(km<0){
        console.log('Error');               ///for nagative value it show a error message.
    }
    else{
        return (km*1000);
    }
}

var meter = kilometerToMeter(20);
//console.log(meter);   for showing output.
