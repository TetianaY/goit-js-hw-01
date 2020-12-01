let costOfDelivery;
let userInput = prompt("Введите страну");
let message;

if (userInput === null) {
    message = "Отменено пользователем!";   

} else {
    userInput = userInput.toLowerCase();
    console.log(userInput); 
    switch (userInput) {
    
        case 'китай':
            costOfDelivery = 100;
            message = `Доставка в ${userInput} будет стоить ${costOfDelivery} кредитов`;
        break;

        case 'чили':
            costOfDelivery = 250;
            message = `Доставка в ${userInput} будет стоить ${costOfDelivery} кредитов`;
        break;

        case 'австралия':
            costOfDelivery = 170;
            message = `Доставка в ${userInput} будет стоить ${costOfDelivery} кредитов`;
        break;
                    
        case 'индия':
            costOfDelivery = 80;
            message = `Доставка в ${userInput} будет стоить ${costOfDelivery} кредитов`;
        break;
                    
                
        case 'ямайка':
            costOfDelivery = 120;
            message = `Доставка в ${userInput} будет стоить ${costOfDelivery} кредитов`;
        break;        
                
                
        default:
        message = 'В вашей стране доставка не доступна';  
    }
}
alert(message);










