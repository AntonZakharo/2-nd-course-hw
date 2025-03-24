// 1

let password = '4399402';
let userPassword = prompt('Введите пароль');
if (userPassword == password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
};

// 2

let c = 5;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
};


// 3

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// 4
let monthNumber = 12;
switch (monthNumber) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 12:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    default:
        break;
};