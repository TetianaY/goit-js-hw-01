let credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt("Введите желаемое количество дроидов");
let totalPrice;
let message;


if (userInput === null) {
    message = "Отменено пользователем!";
} else {
    totalPrice = userInput * pricePerDroid;   
    if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
    } else {
        credits = credits - totalPrice;
        message = `Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`;
    }
    
} 
console.log(message);







