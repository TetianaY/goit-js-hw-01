let credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt("Введите желаемое количество дроидов");
let message;
let totalPrice;


if (userInput === null) {
    message = "Отменено пользователем!";
} else {
    userInput = Number(userInput);    
    totalPrice = userInput * pricePerDroid;        
} 

if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
} else {
    credits = credits - totalPrice;
    console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
}




