module.exports = function toReadable (number) {
//создаю объект для чисел от нуля до девяти
  const oneToNine= {
    1: 'one', 
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

//создаю объект от 11 до 19
 const elevenToNineteen = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
 };

//создаю объект для десятков
 const dozens = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
 };

 const dozenForHungreds = 10*Math.floor((number-(Math.floor(number/100)*100))/10);
 const numberToString = number.toString();
 

if (number === 0) {
    return 'zero';
}  

//числа от единицы до девяти----------------------------------------------------------------
if ((number < 10) && (number !== 0)) { 
    return oneToNine[number];
}

//круглые десятки--------------------------------------------------------------------------
if ((number%10) === 0 && number<100) { 
    return dozens[number];
} 
//круглые сотни-------------------------------------------------------------------------
if (number%100 === 0 && number !==0){
    return oneToNine[Math.floor(number/100)] + ' hundred';
}

//числа от 11 до 19---------------------------------------------------------------------- 
if ((number > 10) && (number < 20)) {
    return elevenToNineteen[number];
}  

//числа от 21 до 99----------------------------------------------------------------------
if ((number >= 20) && (number < 100)) {
    return dozens[(Math.floor(number/10))*10] + ' ' + oneToNine[number%10];

//Трехзначные числа-------------------------------------------------------------------------------------------------------

//506-----------------------------------------------------------------------------------------------------------------------
} if (number > 100 && Number(numberToString[1]) == 0 && Number(numberToString[2]) !== 0) {
    return oneToNine[Math.floor(number/100)] + ' hundred ' + oneToNine[number%10];

//516-------------------------------------------------------------------------------------------------------------------------
} if (number > 100 && Number(numberToString[1]) == 1 && Number(numberToString[2]) > 0) { 
    return oneToNine[Math.floor(number/100)] + ' hundred ' + elevenToNineteen[Number(numberToString.slice(-2))];
} 
//560-----------------------------------------------------------------------------------------------------------------------
if ((number%10) === 0 && number>=100) {
    return oneToNine[Math.floor(number/100)] + ' hundred ' + dozens[dozenForHungreds];
}  
//561-----------------------------------------------------------------------------------------------------------------------
if (number > 100 && Number(numberToString[1]) > 1 && Number(numberToString[2]) !== 0) {
    return oneToNine[Math.floor(number/100)] + ' hundred ' + dozens[dozenForHungreds] + ' ' + oneToNine[number%10]; 
};

};