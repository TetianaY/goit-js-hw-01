let total = 0;

while (true) {
    let userInput = prompt("Введите число");

    if (userInput === null) {
        console.log("Отмена пользователем");
        break;
    }

    userInput = Number(userInput);

    const notANumber = Number.isNaN(userInput);

    if (notANumber) {
        console.log("Было введено не число, попробуйте еще раз");
        continue;
    }

    total += userInput;
}

console.log(`Общая сумма чисел равна ${total}`)