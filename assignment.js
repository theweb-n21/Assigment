function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
console.log(kilometerToMeter(50));



function budgetCalculator(watchUnit, mobileUnit, laptopUnit) {
    var perWatchValue = 500;
    var totalWatchValue = watchUnit * perWatchValue;
    var permobileValue = 10000;
    var totalMobileValue = mobileUnit * permobileValue;
    var perLatopValue = 50000;
    var totalLaptopValue = laptopUnit * perLatopValue;
    var totalCost = totalWatchValue + totalMobileValue + totalLaptopValue;

    return totalCost;
}

console.log(budgetCalculator(8, 5, 2));


function hotelCost(day) {
    if (day <= 10) {
        var totalCost = day * 100;
    } 
    else if (day <= 20) {
        var first10DayCost = 10 * 100;
        var remainingDay = day - 10;
        var remainingDayCost = remainingDay * 80;
        totalCost = first10DayCost + remainingDayCost;

    }
     else {
        first10DayCost = 10 * 100;
        var second10DayCost = 10 * 80;
        remainingDay = day - 20;
        remainingDayCost = remainingDay * 50;
        totalCost = first10DayCost + second10DayCost + remainingDayCost;
    }
    return totalCost;
}

console.log(hotelCost(2));


function megaFriend(arr){
    var largestName = arr[0];
    for( var i = 0; i < arr.length; i++){
        var element = arr[i];
        if(element.length > largestName.length){
            largestName = element;
        }
    }
    return largestName;
}

var friendName = ["sunny", "sagor", "shohidul", "leon", "roni", "mikchan", "jahid"];
console.log(megaFriend(friendName));
