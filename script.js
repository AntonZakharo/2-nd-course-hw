
function game1() {
    let randomNumber = Math.floor(Math.random() * 100);
    let userNumber = Number(prompt('Введите число от 1 до 100'));

    if (userNumber == randomNumber) {alert('Правильно')};
    
    while (userNumber != randomNumber && userNumber != 0) {
        if (userNumber < randomNumber) {
            userNumber = Number(prompt('Ваше число меньше загаданного \n Введите число от 1 до 100'));
        } else {
            userNumber = Number(prompt('Ваше число больше загаданного \n Введите число от 1 до 100'));
        };
        if (userNumber == randomNumber) {alert('Правильно')};
    };
};