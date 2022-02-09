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


