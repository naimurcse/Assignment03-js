

// Kilometer To Meter Converter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(3);
console.log(result);



// Budget Calculator
function budgetCalculator(noOfWatch, noOfMobile, noOfLeptop){
    var watchPrice = 50;
    var mobilePrice = 100;
    var leptopPrice = 500;
    var budget = (watchPrice * noOfWatch) + (mobilePrice * noOfMobile) + (leptopPrice * noOfLeptop);
    return budget;
}

var totalAmount = budgetCalculator(8,3,5);
console.log(totalAmount);


// Calculation of Hotel Cost
function hotelCost(noOfDay){
    var roomRate=0;
    if(noOfDay<=10){
        roomRate = noOfDay * 100;
        return roomRate;
    }else if(noOfDay<=20){
        var first10daysCost = 10 * 100;
        var remainingDay = noOfDay - 10;
        var remainingDayCost = remainingDay * 80; 
        roomRate = first10daysCost + remainingDayCost;
        return roomRate;
    }else{
        first10daysCost = 10 * 100;
        second10daysCost = 10 * 80;
        remainingDay = noOfDay - 20;
        remainingDayCost = remainingDay * 50;
        roomRate = first10daysCost + second10daysCost + remainingDayCost;
        return roomRate;
    }
}

var totaHotelCost = hotelCost(22);
console.log(totaHotelCost);



