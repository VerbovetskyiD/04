//вариант через while

let height = 5; //высота треугольника
let str = '';
let sign = '';

while (height) {
    sign += '*';
    str += sign + '\n';
    height--;
}

console.log(str); //проверка

//вариант через for

let height = 5; //высота треугольника
let str = '';

for (let sign = ''; height > 0; height--) {
    sign += '*';
    str += sign + '\n';
}

console.log(str); //проверка

//по центру

let height = 5; //высота треугольника
let str = '';

for (let sign = ''; height > 0; height--) {
    for (let i = height - 1; i > 0; i--) {
        str += ' ';
    }
    sign += '*';
    str += sign + '\n';
}

console.log(str); //проверка

//по центру в два ряда

let height = 5; //высота треугольника
let str = '';

for (let sign = ''; height > 0; sign += '*', height--) {
    for (let i = height - 1; i > 0; i--) {
        str += ' ';
    }
    sign += '*';
    str += sign + '\n';
}

console.log(str); //проверка

//одним циклом используя repeat

let height = 5; //высота треугольника
let str = '';

for (let i = 1; i < height + 1; i++) {
    let space = ' '.repeat(height - i);
    let sign = '*'.repeat( (i * 2) - 1 );
    str +=  space + sign + `\n`;
}

console.log(str); //проверка