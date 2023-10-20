function computeDifference(number1, number2){
    return Math.abs(number1 - number2);
}

const positiveInteger1 = 10;
const positiveInteger2 = 58;

const difference = computeDifference( positiveInteger1, positiveInteger2);

console.log(`Difference between ${positiveInteger1} and ${positiveInteger2} is : ${difference}`);