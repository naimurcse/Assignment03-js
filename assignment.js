

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

var totalAmount = budgetCalculator(3,5,2);
console.log(totalAmount);


