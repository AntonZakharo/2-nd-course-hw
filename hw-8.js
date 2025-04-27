// 1
let people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
 
 // Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort(callback));
function callback(a, b) {
    return a['age'] - b['age']
}

// 2
function filter(arr, ruleFunction) {
    const output = [];
 
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i])
       };
    }
 
    return output;
}
function isPositive(a) {
    if (a > 0) {
        return true
    } else {
        return false
    }
}
function isMale(human) {
    // писать код тут
    if (human['gender'] == 'male') {
        return true
    } else {
        return false
    }
}
    
console.log(filter([3, -4, 1, 9], isPositive));
    
people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people, isMale));

// 3

let intervalId = setInterval(() => {
    console.log(new Date)
}, 3000)
setTimeout(() => {
    clearInterval(intervalId)
    console.log('30 секунд прошли')
}, 30000)

// 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {
    sayHi('Глеб')
})