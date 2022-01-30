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