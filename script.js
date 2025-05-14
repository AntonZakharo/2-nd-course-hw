
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

function doOperation(a, b, operator) {
    if (operator == '-') {
        return (a - b); 
    } else if (operator == '+') {
        return (a + b);
    } else if (operator == '*') {
        return (a * b);
    } else if (operator == '/') {
        return (a / b);
    };
};

function game2() {
    let quantity = Number(prompt('Напишите количество вопросов:'));

    if (Number.isInteger(quantity)) {
        game2Logic(quantity)
    } else {
        while (!Number.isInteger(quantity)) {
            if (quantity == "") {
                break
            }
            quantity = Number(prompt('Вы ввели некорректное число. \n Напишите количество вопросов:'));
        }
        if (quantity != "") {
            game2Logic(quantity)
        }
    };
};

function game2Logic(quantity) {
    const symbols = ['+', '-', '*', '/'];
    let score = 0;
    for (let i = 1; i <= quantity; i++) {
        
        let firstNumber = Math.floor(Math.random() * 20); 
        let secondNumber = Math.floor(Math.random() * 20);
        
        let chosenSymbol = symbols[Math.floor(Math.random() * 4)];
        if (chosenSymbol == '/' && (secondNumber > firstNumber || (secondNumber % firstNumber != 0) || secondNumber == 0)) {
            while (secondNumber > firstNumber || (secondNumber % firstNumber != 0) || secondNumber == 0) {
                secondNumber = Math.floor(Math.random() * 20);
            };
        };

        let answer = doOperation(firstNumber, secondNumber, chosenSymbol);
        let userAnswer = Number(prompt(`Вопрос ${i} \n ${firstNumber} ${chosenSymbol} ${secondNumber}`));
        if (userAnswer == '') {
            break
        }
        let result = userAnswer == answer ? 'Правильно' : 'Неправильно';
        if (result == 'Правильно') {
            score++;
        };
        alert(result);
    };
    alert(`Ваш результат: ${score} / ${quantity}`);
};

function game3() {
    alert(`Перевернутый текст: ${prompt('Введите текст, который будет перевернут:').split('').reverse().join('')}`);
};

function game4() {
    const userChoice = prompt('Напишите ваш выбор\n Камень, ножницы или бумага?').toLowerCase();
    const variants = ["камень", "ножницы", "бумага"];
    const computerChoice = variants[Math.floor(Math.random() * 3)];
    if (userChoice) {
        if (userChoice == 'камень') {
            switch (computerChoice) {
                case 'камень':
                    alert('Ничья, компьютер выбрал камень')
                    break;
                case 'бумага':
                    alert('Ты проиграл! Компьютер выбрал бумагу')
                    break;
                case 'ножницы':
                    alert('Ты выиграл! Компьютер выбрал ножницы')
                    break;
            }
        } else if (userChoice == 'бумага') {
            switch (computerChoice) {
                case 'бумага':
                    alert('Ничья, компьютер выбрал бумагу')
                    break;
                case 'ножницы':
                    alert('Ты проиграл! Компьютер выбрал ножницы')
                    break;
                case 'камень':
                    alert('Ты выиграл! Компьютер выбрал камень')
                    break;
            }
        } else if (userChoice == 'ножницы') {
            switch (computerChoice) {
                case 'камень':
                    alert('Ты проиграл!, компьютер выбрал камень')
                    break;
                case 'бумага':
                    alert('Ты выиграл! Компьютер выбрал бумагу')
                    break;
                case 'ножницы':
                    alert('Ничья, компьютер выбрал ножницы')
                    break;
            }
        } else {
            alert('Вы написали что-то не то')
        }
    };
};

function game5() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let score = 0
    for (let i=0; i < quiz.length; i++) {
        let question = quiz[i].question
        let options = quiz[i].options
        let correctAnswer = quiz[i].correctAnswer
        let userAnswer = Number(prompt(`${i} вопрос\n${question}\nВарианты ответа:\n${options.join(' ')}`))
        score += userAnswer === correctAnswer ? 1 : 0
        alert(`${userAnswer === correctAnswer ? 'Правильно' : 'Неправильно'}\nУ вас ${score} очко/а`)
    }
    alert(`Ваш результат: ${score} очко/а`)
}

function game6() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256) 
    const blue = Math.floor(Math.random() * 256)
    const header = document.querySelector('header')
    const games = document.querySelector('.games')
    const miniGames = document.querySelector('.mini-games')
    header.style.background = `rgb(${red}, ${green}, ${blue})`
    games.style.background = `rgb(${red}, ${green}, ${blue})`
    miniGames.style.background = `rgb(${red}, ${green}, ${blue})`
}