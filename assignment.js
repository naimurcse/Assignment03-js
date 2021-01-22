// https://github.com/naimurcse/Assignment03-js


// Kilometer To Meter Converter
function kilometerToMeter(kilometer){
    if(kilometer<0){
        return "Please Enter Valid Number";
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}

var getResultInMeter = kilometerToMeter(5);       // Enter positive value
console.log(getResultInMeter);




// Budget Calculator
function budgetCalculator(noOfWatch, noOfMobile, noOfLeptop){
    var watchPrice = 50;
    var mobilePrice = 100;
    var leptopPrice = 500;

    if((noOfWatch < 0) || (noOfWatch % 1 != 0)){
        return "Please Enter Valid Number of Watch";
    }else if((noOfMobile < 0) || (noOfMobile % 1 != 0)){
        return "Please Enter Valid Number of Mobile";
    }else if((noOfLeptop < 0) || (noOfLeptop % 1 != 0)){
        return "Please Enter Valid Number of Leptop";
    }else{
        var budget = (watchPrice * noOfWatch) + (mobilePrice * noOfMobile) + (leptopPrice * noOfLeptop);
        return budget;
    }
}

var totalAmount = budgetCalculator(5,3,4);          // Don't Enter Negative or Float Number.
console.log(totalAmount);




// Calculation of Hotel Cost
function hotelCost(noOfDay){
    var roomRate=0;

    if((noOfDay < 1) || (noOfDay%1 != 0)){
        return "Please put the valid number!";
    }
    else{

        if(noOfDay<=10){
            roomRate = noOfDay * 100;
        }
        else if(noOfDay<=20){
            var first10daysCost = 10 * 100;
            var remainingDay = noOfDay - 10;
            var remainingDayCost = remainingDay * 80; 
            roomRate = first10daysCost + remainingDayCost;
        }
        else{
            first10daysCost = 10 * 100;
            second10daysCost = 10 * 80;
            remainingDay = noOfDay - 20;
            remainingDayCost = remainingDay * 50;
            roomRate = first10daysCost + second10daysCost + remainingDayCost;
        }
        return roomRate;
    }
}

var totaHotelCost = hotelCost(22);     // Enter Number of Days
console.log(totaHotelCost);





// Mega Friend Function
function megaFriend(friendsName){
    
    if(friendsName.length === 0){
        return "Your list is empty";
    }
    else{
        var largestName = friendsName[0];
        for(i=0; i<friendsName.length; i++){
            var name = friendsName[i];
            if(name.length>largestName.length){
                largestName = name;
            }
        }
        return largestName;
    }
}

var friendsName = ["Abul", "Babul", "Jamal", "Kamal", "Rumi", "Mehnaz", "Shahrima", "Wasfia"];
var findLargestName = megaFriend(friendsName);     // Array should be at least one element or you'll face error.
console.log(findLargestName);



