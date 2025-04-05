// 1

function lowerNumber(a, b) {
    if (a > b) {return b};
    return a;
};

// 2

function isEven(n) {
    if (n % 2 == 0) {return 'Число четное'};
    return 'Число нечетное';
};

// 3

function square(n) {
    console.log(n**2);
}

function numSquared(n) {
    result = n ** 2;
    return result;
};

// 4

function welcome(age) {
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (0 <= age && age < 13) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    }
}

// 5

function multiple(a, b) {
    if (isNaN(a) || isNaN(b) || typeof(a) == 'string' || typeof(b) == 'string') {
       console.log('Одно или оба значения не являются числом'); 
    } else {
        let result = a*b;
        return result;
    };
};

// 6

function cube(a) {
    if (isNaN(a) || typeof(a) == 'string') {
        return 'Переданный параметр не является числом';
    } else {
        return `${a} в кубе равняется ${a**3}`;
    };
};

// 7

function getArea() {
    let area = Math.PI * this.radius ** 2;
    return area;
};

function getPerimeter() {
    let perimeter = 2 * Math.PI * this.radius;
    return perimeter
};

circle1 = {
    radius : 12,
    getArea,
    getPerimeter
};

circle2 = {
    radius : 20,
    getArea,
    getPerimeter
};
