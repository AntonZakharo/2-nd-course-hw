// 1

for (let i=0; i < 2; i++) {
    console.log('Привет');
};

// 2 
for (let i=1; i <= 5; i++) {
    console.log(i);
};

// 3
for (let i=7; i <= 22; i++) {
    console.log(i);
};

// 4
obj = {    
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
};
for (let key in obj) {
    console.log(`${key} - зарпалата ${obj[key]} долларов`);
}; 

// 5
let n = 1000;
let num = 0
while (n > 50) {
    n /= 2;
    num += 1;
};
console.log(n, num);

// 6 

firstFriday = 4

while (firstFriday <= 31) {
    console.log(`Сегодня пятница, ${firstFriday}-e число. Необходимо подготовить отчет.`)
    firstFriday += 7
}