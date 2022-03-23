// 2nd HomeWork for INC4   
//  https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/
// 1.Вытянуть домен из названия сайта   
const url =  'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/';

let domen = url.slice(8, 16);

//console.log(domen);

// 2. Вытянуть название статьи 

let Article = url.slice(17, 61);

//console.log(Article);

// 3. Убрать дефисы
let ArticleName = Article.match(/[^_\W]+/g).join(' ');

//console.log(ArticleName);
// 4. Каждая первая буква заглавная
const Result = ArticleName.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
//console.log(Result);

// Results
console.log("Домен:" + domen + " " + "Название статьи без дефисов с заглавных букв: " + Result);


// Методы строк 
var a = "Hello, everyone!";
console.log(a.charAt(0),        //первый символ 
a.charAt(a.length-1),           //последний символ
a.substring(12,15),             //с х по у позицию вырезает обьекты 
a.slice(7,12),                  // то же самое
a.slice(-4),                    // вырезает с конца
a.indexOf(1),                   
a.lastIndexOf(1),
a.indexOf(1, 3),
a.split("Hello", "everyone"),
a.replace("H", "h"),
a.toUpperCase(),
a.match(),
a.replace());

//Методы чисел


// Геттеры Сеттеры, 3 функции рекурсии + презентация по Date
// Function Declaration ( Объявление функции)
//function name (parametrs) {
    // тело (код) функции
//}

/*
Как правило в имени используются префиксыБ обозначающие дейсвтие, после которых следует объект действия

Например
showSmth- что-то показывают
getSmth- возвращают значение 
calcSmth- что-то вычитсляют 
createSmth- что-то создают 
checkSmth- что-то проверяют 
*/

//Функция рекурсия 
//1. Common recursion 
let b = 1;

function rec() {
    b = b + 2;
    console.log(b);
    if (b > 99) {
        return b;
    }
    rec();
}

rec();


//2. Рекурсия, которая позволяет нажатием на кнопку, двигаться объекту самостоятельно с заданной задержкой и длиной пути

let offset = 0;

function move() {
    offset = offset + 10;
    document.querySelector('.square').style.left = offset + 'px';
    if (offset > 500) {
        return true;
    }
    setTimeout(move, 200);

}



document.querySelector('button').onclick = move;


//3. Более сложная рекурсия, программа-попрошайка 
// генерация целового случайного числа в заданном диапазоне
function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min)
        return Math.floor(rand)
}

let sum1 = 0

function wallet () {
    let money = randomInteger(0, 100)
    console.log('add: ' + money);
    sum1 += money;
    console.log('sum: ' + sum1);
    if (sum1 >= 300) return;
    wallet();
}

wallet();

function count(number){
    switch (number){
        case 0:
            return true
        case 1:
            return false
        default:
            return count(number - 2)
    }
}

console.log(count(68));

