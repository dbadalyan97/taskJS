// Write a function called getTriangleAngle which receives the values of two angles and returns the
// value of the third. Remember that the total of all three angles is 180 degrees.
// Example: getTriangleAngle(45, 45); // should return 90


// function getTriangleAngle(fA, sA) {
//     return (fA + sA > 180 ? false : 180 - fA - sA);
// }
//
// console.log(getTriangleAngle(45, 50));

//    1. Գրել ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի true, եթե թիվը զույգ է և false՝
//    հակառակ դեպքում։ Օր՝ isEven(20) // պետք է վերադարձնի

// function isEven(num) {
//     return !(num % 2);
// }
//
// console.log(isEven(50));

// 2. Գրել ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի true, եթե թիվը կենտ է և մեծ 100-ից,
// և false, մնացած դեպքերում։ Օր` isOdd(57) // պետք է վերադարձնի false

// function isOdd(num) {
//     return !!((num % 2) && (num > 100));
// }
//
// console.log(isOdd(151));

// 3. Գրել ֆունկցիա, որը կվերցնի թիվ, և կվերադարձնի &quot;Hi teenager&quot;, եթե թիվը մեծ է կամ
// հավասար 13 և փոքր կամ հավասար 19, կվերադարձնի &quot;Hi, I&#39;m 25 too&quot;, եթե թիվը
// հավասար է 25, և կվերադարձնի &quot;Hello&quot; մնացած բոլոր դեպքերում։ Օր՝ greetPeople(17) //
// պետք է վերադարձնի &quot;Hi teenager&quot;


// function greetPeople(num) {
//     if (num >= 13 && num <= 19) return "Hi teenager";
//     else if (num === 25) return "Hi, I'm 25 too";
//     else return "Hello";
// }
//
// console.log(greetPeople(17));

// 4. Գրել ֆունկցիա, որը կվերցնի տողային արժեքներ ունեցող զանգված և կվերադարձնի
// այդ զանգվածի ամենաերկար բառը։ Օր՝ getLongest ([“I”, “love”, “js”]); // պետք է
// վերադարձնի “love”


// function getLongest(arr) {
//     let maxLength = "";
//     arr.forEach((item) => {
//         if (item.length > maxLength.length) {
//             maxLength = item;
//         }
//     })
//     return maxLength;
// }
//
// console.log(getLongest(["I", "love", "js"]));

// 5. Գրել ֆունկցիա, որը կվերցնի տարբեր տիպերի արժեքներ ունեցող զանգված և
// կվերադարձնի նոր զանգված, որում սկզբնական զանգվածի միայն տողային՝ “string”
// տիպի արժեքներն են։ Օր՝ getStrings([“a”, 2, false, “b”]); // պետք է վերադարձնի [“a”, “b”]


// function getStrings(arr) {
//     return arr.filter((val => typeof val === 'string'));
// }
//
// console.log(getStrings(["a", 2, false, "b"]));


// 6. Գրել ֆունկցիա, որը կընդունի որպես պարամետր 2 զանգված և կվերադարձնի նորը՝
// որը իր մեջ կպարունակի առաջին զանգվածի էլեմենտների մեջտեղում դրված 2րդ
// զանգվածի էլեմենտները։


// function margeArr(arr1, arr2) {
//     let margedArr = [];
//     arr1.forEach((item, index) => {
//         if (index === Math.floor(arr1.length / 2)) {
//             arr2.forEach((item) => margedArr.push(item));
//         }
//         margedArr.push(item)
//     })
//     return margedArr;
// }
//
// console.log(margeArr([0, 1, 2, 7, 8, 9], [3, 4, 5, 6]));

// 7. Գրել ֆունկցիա, որը մուտքում կստանա երեք թիվ, և պետք է ստուգել, թե հնարավոր է
// արդյոք այդ երեք երկարություններով կառուցել եռանկյունի: Եթե՝ այո, վերադարձնել
// true, այլապես վերադարձնել false: Օրինակ՝ canBeATriangle(10,10,10) // պետք է
// վերադարձնի true; canBeTriangle(100,10,10) // պետք է վերադարձնի false:


// function canBeTriangle(x, y, z) {
//     return (x + y > z) && (x + z > y) && (y + z > x);
// }
//
// console.log(canBeTriangle(100, 10, 10));

// 8. Գրել ֆունկցիա, որը մուտքում կստանա 1000-ից ոչ մեծ ամբողջ թիվ և կստուգի՝ պարզ
// է այդ թիվը, բաղադրյալ, թե ոչ պարզ, ոչ բաղադրյալ: Բացասական թվերն ու 0-ն
// ընդունենք ոչ պարզ, ոչ բաղադրյալ: Եթե թիվը պարզ է, վերադարձնել “prime”, եթե
// բաղադրյալ է՝ “composite”, եթե ոչ պարզ է ոչ էլ բաղադրյալ՝ &quot;neither prime nor composite&quot;:
// Եթե թիվը մեծ է 1000-ից, վերադարձնել &quot;too big number&quot;:


// function isPrime(num) {
//     if (num <= 1) return "neither prime or composite";
//     else if (num > 1000) return "too big number";
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return "composite";
//         }
//     }
//     return "prime";
// }
//
// console.log(isPrime(1001));

// 9. Գրել ֆունկցիա, որը կստանա մուտքում օբյեկտ, և եթե այն իր մեջ պարունակում է
// name ու age property-ներ, որոնք դատարկ, undefined, 0 կամ null չեն, կվերադարձնի “Hi,
//     my name is [name], I am [age] years old”, իսկ հակառակ դեպքում կվերադարձնի “Hi, what
// is your name?”

// function sayHi(obj) {
//     if (obj.hasOwnProperty('name') && obj.hasOwnProperty('age')) return `Hi, my name is ${obj.name}, I am ${obj.age} years old`;
//     return "Hi, what is your name?";
// }
//
// console.log(sayHi({name: "Ann"}));

// 10. Գրել ֆունկցիա, որը կընդունի որպես պարամետր 0ից մեծ թիվ ու կտպի բուրգ՝ այդ
// բարձրությամբ։

// function draw(num) {
//     if (num < 0) return false;
//     let result = "";
//     let sign = "*";
//     for (let i = 0; i < num; i++) {
//         result += `${sign}`;
//         sign += "*";
//         i !== num - 1 ? result += '\n' : result;
//     }
//     return result;
// }
//
// console.log(draw(4));

// 11. Գրել ֆունկցիա, որը կհաշվի տրված դրական թվի բաժանարարների գումարը.
//     Թվի բաժանարար են կոչվում այն թվերը, որոնց վրա բաժանվում է տրված թիվը։
// Օր.՝ 12-ի բաժանարարներն են 1, 2, 3, 4, 6, 12, նրանց գումարը կլինի 28.

// function sumDivider(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) sum += i;
//     }
//     return sum;
// }
//
// console.log(sumDivider(12));

// 12. Գրել ծրագիր, որը կպահի հեռախոսահամարների զանգված: Օգտագործողը
// շարունակաբար կկարողանա նոր հեռախոսահամարներ ներմուծել, և եթե դրանք դեռ
// գրված չեն զանգվածում, ծրագիրը դրանք կավելացնի և կտպի “Thank you.”: Հակառակ
// դեպքում, այն կտպի “Phone number already exists”, և օգտագործողին նոր
// հեռախոսահամար գրելու հնարավորություն կտա: Եթե ներմուծված է դատարկ string
// կամ null, ծրագիրը նորից կհարցնի: Եթե նա ուզենա կանգ առնել, պետք է տպի “stop”, և
// ծրագիրը կանգ կառնի: Կարևոր՝ հեռախոսահամարները կարող են սկսվել 0-ով:

// function mobNumArr() {
//     let mobNumP = prompt('Please, input a phone number.');
//     let mobNumArr = [];
//     if (mobNumP[0] === '0' && typeof +mobNumP.substr(1, mobNumP.length) === 'number'
//         && mobNumP.length === 9) {
//         alert("Thank you");
//         mobNumArr = [mobNumP];
//     }
//     while (true) {
//         mobNumP = prompt('Please, input a phone number.');
//         if (mobNumP[0] === '0' && typeof +mobNumP.substr(1) === 'number'
//             && mobNumP.length === 9 && mobNumArr.length === 0) {
//             alert("Thank you");
//             mobNumArr = [mobNumP];
//             continue;
//         }
//         if (mobNumP === 'stop') break;
//         if (mobNumP) {
//             for (let i = 0; i < mobNumArr.length; i++) {
//                 if (mobNumArr[i] === mobNumP) {
//                     alert("Phone number already exists");
//                     break;
//                 } else if (i === mobNumArr.length - 1) {
//                     if (mobNumP[0] === '0' && typeof +mobNumP.substr(1) === 'number'
//                         && mobNumP.length === 9) {
//                         alert("Thank you");
//                         mobNumArr.push(mobNumP);
//                         break;
//                     }
//                 }
//             }
//         }
//     }
//     return mobNumArr;
// }
//
// console.log(mobNumArr());

// 13. Գրել ֆունկցիա, որը ստանալով որպես պարամետր 2 զանգված, կասի, թե քանի
// ընդհանուր անդամ ունեն նրանք։

// function sameElemCount(arr1, arr2) {
//     let count = 0;
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1[0] === arr2[i]) {
//             count = 1;
//         }
//     }
//     for (let i = 1; i < arr1.length; i++) {
//         if (arr1[i] === arr1[0]) continue;
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 count++;
//                 break;
//             }
//         }
//     }
//     return count;
// }
//
// console.log(sameElemCount(["a", "a", "b", "c", "c"], ["a", "d", "c"]))

// 14. Գրել ֆունկցիա, որը մուտքում կստանա մեկական տառերից կազմված զանգված, և
// կվերադարձնի այն տառը, որը ամենաշատն է հանդիպել: Եթե կան մեկից ավելի
// առավելագույն անգամ հանդիպած տառեր, վերադարձնել այն, որը հանդիպել է
// առաջինը:

// function commonLetter(arr) {
//     let maxCount = 0;
//     let printLetter = "";
//     let letterObj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (!(letterObj[arr[i]])) {
//             letterObj[arr[i]] = 1;
//         }
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) letterObj[arr[i]]++;
//         }
//         if (letterObj[arr[i]] > maxCount) {
//             maxCount = letterObj[arr[i]];
//             printLetter = arr[i];
//         }
//     }
//     return printLetter;
// }
//
// console.log(commonLetter(["a", "b"]));


// 15. Ունենալով անվերջ լայնությամբ ու անվերջ երկարությամբ շախմատի տախտակ,
//     գրել ծրագիր, որը կասի՝ տրված կոորդինատներով վանդակը սև է թե սպիտակ: Կարող եք
// ընդունել, որ տողերի ու սյուների հաշվարկը սկսում ենք 0ից ու (0, 0) վանդակը սպիտակ
// է։ Փակագծերում գրված զույգի առաջին անդամը ցույց է տալիս վանդակի տողը, 2րդը՝
// սյունը։ (Բայց տեղերը փոխելիս լուծումը չի փոխվի :) )


// function chessBoard(row, col) {
//     return (row + col) % 2 ? 'black' : 'white';
// }
//
// console.log(chessBoard(39,1024));

// 16. Գրել ֆունկցիա, որը մուտքում կստանա զանգված, որը կազմված կլինի 3
// զանգվածից՝ յուրաքանչյուրը՝ 2 երկարությամբ: Դրանք կլինեն եռանկյան
// կոորդինատներ (x,y) ֆորմատով: Ֆունկցիան պետք է հաշվի այդ կետերով կազմված
// եռանկյան մակերեսը: Կլորացնել մինչև 1 նիշ ստորակետից հետո:

// function triangleArea(arr) {
//     let pro1 = Math.sqrt(Math.pow(arr[0][0] - arr[1][0], 2) + Math.pow(arr[0][1] - arr[1][1], 2));
//     let pro2 = Math.sqrt(Math.pow(arr[0][0] - arr[2][0], 2) + Math.pow(arr[0][1] - arr[2][1], 2));
//     let pro3 = Math.sqrt(Math.pow(arr[1][0] - arr[2][0], 2) + Math.pow(arr[1][1] - arr[2][1], 2));
//     let per = (pro1 + pro2 + pro3) / 2;
//     return (Math.sqrt((per) * (per - pro1) * (per - pro2) * (per - pro3))).toFixed(1)
// }
//
// console.log(triangleArea([[1, 1], [1, 3], [3, 1]]));

// 17. Գրել ֆունկցիա, որը կստանա մուտքում թվերի զանգված և կվերադարձնի օբյեկտ:
//     Այս օբյեկտը պետք է պարունակի ամենամեծ թիվը, ամենափոքր թիվը, ամենաշատը
// հանդիպող թիվն ու թվերի միջին թվաբանականը՝ համապատասխանաբար min, max,
//     mode, mean անվանումներով: Եթե կան նույն քանակով հանդիպող թվեր, տպել բոլորը՝
// զանգվածի տեսքով: Միջին թվաբանականի արժեքը կլորացնել մինչև 1 նիշ ստորակետից
// հետո:


// function numberInfo(arr) {
//     let obj = {
//         min: Infinity,
//         max: -Infinity,
//         mode: [],
//         mean: 0
//     }
//     let helperObj = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!helperObj[arr[i]]) helperObj[arr[i]] = 1;
//         else helperObj[arr[i]]++;
//         if (obj.min > arr[i]) {
//             obj.min = arr[i];
//         }
//         if (obj.max < arr[i]) {
//             obj.max = arr[i];
//         }
//         obj.mean += arr[i];
//     }
//     obj.mean = obj.mean / arr.length;
//     let maxMean = Math.max(...Object.values(helperObj));
//     for (let key in helperObj) {
//         if (helperObj[key] === maxMean) {
//             obj.mode.push(+key)
//         }
//     }
//     return obj;
// }
//
// console.log(numberInfo([1, 2, 3, 45, 6]));

// 18. Գրել ծրագիր, որը օգտագործողից կհարցնի ցանկացած երկարության string: Եթե դրա
// երկարությունը 20-ից մեծ է, ծրագիրը ուղղակի կտպի տողը նույնությամբ: Հակառակ
// դեպքում պետք է տպվի նույն տողը, բայց բոլոր «կենտ-երորդ» (1,3,5...-րդ տառերը)
// տառերը կլինեն մեծատառով, իսկ բոլոր «զույգ-երորդ» (2, 4, 6...-րդ տառերը) տառերը՝
// փոքրատառով: Չշփոթել ինդեքսի հետ:
//     Օրինակ՝
// 1. Program: “Please, enter a string.”
// User: “abcde”
// Program: “AbCdE”
// 2. Program: “Please, enter a string.”
// User:
//     “aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa”
// Program:
//     “aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa”

// let str = prompt("Please, enter a string.");

// const changeStr = (str) => {
//     if (str.length > 20) {
//         console.log(str);
//         return;
//     }
//     ;
//     let arr = str.split("");
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].charCodeAt(0) % 2 && arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
//             arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 32);
//         }
//     }
//     console.log(arr.join(""))
// }

// changeStr("abcdepqrtuvwxyz");


//19. Գրել ֆունկցիա, որը կվերադարձնի տվյալ թվի ֆակտորիալը, իսկ եթե այն մեծ է 20-
// ից, կվերադարձնի -1:

// const factorial = (num) => {
//     if (num > 20 || num < 0) return -1;
//     else if (num <= 1) return 1;
//     return num * factorial(num - 1)
// }
//
// console.log(factorial(3));

// 20. Գրեք ֆունկցիա, որը կաշխատի պարզ հաշվիչի պես: Օգտագործողը կներմուծի երկու
// թվից և մի գործողությունից կազմված արտահայտություն, դրանք տարանջատելով մեկ և
// ավելի բացատներով, և հաշվիչը դրանք կհաշվի: Թույլատրված գործողություններ՝
// գումարում, հանում, բազմապատկում և բաժանում: Ցանկացած սխալ ներմուծված
// արժեքի համար ծրագիրը տպում է “error”: Զրոյի վրա բաժանելիս նույնպես տպվում է
// “error”: Ճիշտ արժեքների դեպքում տպվում է արդյունքը:

// const calculate = (action) => {
//     let arr = action.trim().split(' ');
//     if (arr.length < 3) return "error";
//     for (let i = 0; i < arr.length; i++) {
//         if (isNaN(parseInt(arr[i])) && arr[i] !== "+" && arr[i] !== "-" && arr[i] !== "*" && arr[i] !== "/") {
//             return "error";
//         }
//         if (arr[i] === '/' && arr[arr.length - 1] === '0') return "error";
//         switch (arr[i]) {
//             case '+':
//                 return arr[0] + arr[arr.length - 1];
//             case '-':
//                 return arr[0] - arr[arr.length - 1];
//             case '*':
//                 return arr[0] * arr[arr.length - 1];
//             case '/':
//                 return arr[0] / arr[arr.length - 1];
//         }
//     }
// }

// console.log(calculate('10 / 5'));


// 21. Գրել ֆունկցիա, որը մուտքում ստանալով հայերեն տեքստ, կվերադարձնի այդ
// տեքստում եղած ձայնավորների քանակը։


// const vowelCount = (word) => {
//     let arr = ['ա', 'ի', 'ւ', 'օ', 'է', 'ը'];
//     let arrWord = word.split("");
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (arr.indexOf(arrWord[i]) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowelCount("բառակապակցություն"));

// 22. Գրել ֆունկցիա, որը մուտքում ստանալով բառ, կստուգի թե արդյոք այդ բառը
// պալինդրոմ է։ Պալինդրոմ է համարվում այն տեքստը, որը թե՛ սկզբից, թե՛ վերջին նույն
// կերպ է կարդացվում։


// const isPalindrome = (str) => {
//     let arr = str.split("");
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPalindrome("madam"));

// 23․ Ունեք երկու թվային արժեքով փոփոխական: Գրել ծրագիր, որը առանց
// օգտագործելու որևէ երրորդ փոփոխական, նրանք արժեքները տեղերով կփոխի։
// Օրինակ եթե a === 4 և b === 7, ծրագիրը պետք է a-ն սարքի 7, իսկ b-ն 4։


// const changeValue = (num1, num2) => {
//     num2 = num1 + num2;
//     num1 = num2 - num1;
//     num2 = num2 - num1;
//     console.log(num1, num2)
// }
//
// changeValue(4, 7);

// 24. Գրել ֆունցկիա, որը մուտքում ստանալով շրջանի շառավիղ, կվերադարձնի մի
// օբյեկտ, որը պարունակում է այդ շրջանի մակերեսի և շրջանագծի արժեքները։
//
// const circle = (r) => {
//     let obj = {
//         area: 0,
//         length: 0
//     }
//
//     obj.area = Math.PI * Math.pow(r, 2);
//     obj.length = 2 * Math.PI * r;
//     return obj;
// }
// console.log(circle(2));

// 25․ Գրել ֆունկցիա, որը ստանալով տրված հոդվածների օբյեկտների զանգվածը,
//     սորտավորում է նրանց ըստ տարեթվի։

// const sortByYear = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let isSwap = true;
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j + 1].year < arr[j].year) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//                 isSwap = false;
//             }
//         }
//         if (isSwap) return arr;
//     }
//     return arr;
// }

// console.log(sortByYear([
//     {
//         title: "Veganism",
//         author: "Poghos",
//         year: 2005
//     },
//     {
//         title: "Modern Philosophy",
//         author: "Petros",
//         year: 2019
//     },
//     {
//         title: "The Invention of the Internet",
//         author: "Karapet",
//         year: 1995
//     }
// ]))


// 26․ Գրել ֆունկցիա, որը ստանալով 2 թիվ, վերադարձնում է նրանց ամենամեծ
// ընդհանուր բաժանարարը։


// const getGCD = (num1, num2) => {
//     while (num1 !== num2) {
//         num1 > num2 ? num1 -= num2 : num2 -= num1;
//     }
//     return num2;
// }
//
// console.log(getGCD(5, 15));

// 27. Գրել ֆունկցիա, որը ստանալով 2 թիվ, վերադարձնում է նրանց ամենափոքր
// ընդհանուր բազմապատիկը։

// const getLCD = (num1, num2) => {
//     let dup = num1 * num2;
//     while (num1 !== num2) {
//         num1 > num2 ? num1 -= num2 : num2 -= num1;
//     }
//     return dup / num2;
// }
//
// console.log(getLCD(5, 15));

// 28․ Գրել ֆունկցիա, որը ստանալով թիվ, ստուգում է, արդյոք այդ թիվը 2-ի աստիճան է։

// const isPowerTwo = (num) => {
//     return !!num && Math.log2(num) === Math.floor(Math.log2(num));
// }
//
// console.log(isPowerTwo(16));

// 29․ Գրել ֆունկցիա, որը ստանալով 2 կոորդինատներ, հաշվում է նրանց միջև
// հեռավորությունը։ Կետերը ֆունկցիային փոխանցվում են որպես օբյեկներ, որոնք ունեն
// x և y կոորդինատներ։

// const calculateDistance = (point1, point2) => {
//     return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
// }

// console.log(calculateDistance(
//     {
//         x: 1,
//         y: -4
//     }, {
//         x: 0,
//         y: -4
//     })
// )

// 30․ Գրել ֆունկցիա, որը մուքում ստանալով ամբողջ թիվ, վերադարձնում է նրա
// թվանշանների քանակը։

// const digitsCount = (num) => {
//     return (num + '').length
// }
//
// console.log(digitsCount(12112));

// 31․ Գրել ֆունկցիա, որը կսորտավորի տրված օբյեկներով զանգվածը ըստ id - ների։

// const sortById = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let isSwap = true;
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j + 1].id < arr[j].id) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//                 isSwap = false;
//             }
//         }
//         if (isSwap) return arr;
//     }
//     return arr;
// }

// console.log(sortById([
//     {
//         name: "Davit",
//         id: 3
//     },
//     {
//         name: "Lina",
//         id: 1
//     }, {
//         name: "Narine",
//         id: 3
//     }
// ]))


//32. Գրել allLongestStrings() ֆունկցիան, որը կընդունի տողերի(string) զանգված և
// կվերադարձնի նոր զանգված, որը պարունակում է նախնական զանգվածի ամենաերկար
// տողերը։


// const allLongestStrings = (arr) => {
//     let maxElemLength = 0;
//     return arr.map((elem) => {
//         if (elem.length > maxElemLength) maxElemLength = elem.length;
//         return elem;
//     }).filter((elem => elem.length === maxElemLength));
// }

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));


// 33. Գրել mutateTheArray() ֆունկցիան, որը կընդունի որպես արժեք թվերի
// զանգված(array) և կվերադարձնի նոր զանգված, որի յուրաքանչյուր տարր կլինի
// նախնական զանգվածի յուրաքանչյուր տարրի, նախորդի և հաջորդի գումարը: եթե
// նախորդ կամ հաջորդ արժեքները գոյություն չունեն, փոխարինել 0-ով։


// const mutateTheArray = (arr) => {
//     let newArr = [];
//     let a, b;
//     for (let i = 0; i < arr.length; i++) {
//         a = arr[i - 1] || 0;
//         b = arr[i + 1] || 0
//         newArr.push(arr[i] + a + b);
//     }
//     return newArr;
// }

// console.log(mutateTheArray([4, 0, 1, -2, 3]))


// 34. Գրել ֆունկցիա, որը կվերցնի տողային արժեք (string) և սիմվոլ,
// և կվերադարձնի թե քանի անգամ է տրված սիմվոլը
// կրկնվում այդ տողային արժեքում։ Օր․՝ getSymbolsCount(‘Ooo my god’, ‘o’) // պետք է
// վերադարձնի 3;

// const getSymbolsCount = (str, sym) => {
//     let arr = str.split("");
//     let repeatCount = 0;
//     arr.forEach((elem => elem === sym ? repeatCount++ : repeatCount))
//     return repeatCount;
// }

// console.log(getSymbolsCount("Ooo my god", "o"));

// 35. Գրել ֆունկցիա, որը կվերցնի զանգված, և կվերադարձնի true, եթե զանգվածի որևէ
// անդամ հավասար է իրեն նախորդող 2 անդամների գումարին։


// const isFib = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1] + arr[i - 2]) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(isFib([1, 3, 5, 8, 235, 34, 5]));


// 36. Գրել ֆունկցիա, որը կվերցնի զանգված, կհամեմատի այդ զանգվածի կենտ թվերի
// գումարը այդ զանգվածի զույգ թվերի գումարի հետ։ Ֆունկցիան կվերադարձնի true, եթե
// զույգ թվերի գումարը մեծ է կենտ թվերի գումարից, հակառակ դեպքում կվերադարձնի
// false։


// const checkSumEquality = (arr) => {
//     let sumOdd = 0;
//     let sumEven = 0;
//     arr.forEach(elem => elem % 2 ? sumOdd += elem : sumEven += elem);
//     return sumEven > sumOdd
// }


// console.log(checkSumEquality([1, 3, 5, 8, 235, 34, 5]));


// 37․ Գրել ֆունկցիա, որը կվերցնի տողային արժեք (string) և թիվ, և կվերադարձնի
// տողային արժեք, որը տրված տողային արժեքի կրկնությունն է տրված թվի քանակով։

// const repeatString = (str, num) => {
//     return str.repeat(num);
// }

// console.log(repeatString("foo", 10));

// 38. Գրել ֆունկցիա, որը կվերցնի թիվ, և կվերադարձնի ֆունկցիա, որը նույնպես կվերցնի
// թիվ, և կվերադարձնի այդ թվերի գումարը։ Ֆունկցիայի կանչը պետք է ունենա հետևյալ
// տեսքը՝ sum(a)(b), որը կվերադարձնի (a + b)-ի արժեքը։ Օր․՝ sum(5)(7) // պետք է
// վերադարձնի 12


// const sum = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(sum(5, 7));


// 39. Գրել ֆունկցիա, որը կվերցնի թիվ որպես վարկյաններ, կհաշվի և կվերադարձնի, թե
// քանի օր է։


// const getDays = (second) => {
//     return second / 86400;
// }

// console.log(getDays(54845));


// 40. Գրել ֆունկցիա, որը կվերցնի զանգված և ֆունկցիա որպես արգումենտ,
// կվերադարձնի նոր զանգված, որի անդամները փոխանցված ֆունկցիայի արդյունքն են՝
// փոխանցված ֆունկցիան սկզբնական զանգվածի համապատասխան էլեմենտով
// աշխատացնելուց հետո։


// const map = (arr, func) => {
//     let newArr = [];
//     arr.forEach(elem => newArr.push(func(elem)));
//     return newArr;
// }

// console.log(map([1, 2, 3], function (num) {
//     return num * 2;
// }))


// const getNegative = (num) => {
//     return ~num + 1;
// }

// console.log(getNegative(10));


// 42. Գրել ֆունկցիա, որը կվերցնի զանգված և որևէ արժեք, և զանգվածի այն տարրերը,
// որոնք բաժանվում են 3-ի, կփոխարինի ֆունկցիային որպես 2-ռդ արգումենտ տրված
// արժեքով։


// const replaceNums = (arr, val) => {
//     return arr.map(elem => elem % 3 === 0 ? val : elem);
// }

// console.log(replaceNums([1, 2, 3, 4], "foo"));


// 43. Գրել ֆունկցիա, որը կվերցնի ցանկացած արժեք որպես առաջին արգումենտ, և թիվ,
// որպես երկրորդ։ Ֆունկցիան կվերադարձնի զանգված, որի անդամները կլինեն
// ֆունկցիային տրված առաջին արգումենտի արժեքը, զանգվածի երկարությունը կլինի
// ֆունկցիային որպես երկրորդ արգումոնտ տրված թվի չափով։


// const getFailedArray = (val, num) => {
//     let arr = [];
//     for (let i = 0; i < num; i++) arr.push(val);
//     return arr;
// }

// console.log(getFailedArray("srt", 3));




//44.There’s a ladder object that allows to go up and down:
// Now, if we need to make several calls in sequence, can do it like this:
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Modify the code of up, down and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep(); // 1


// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function () { // shows the current step
//         console.log(this.step);
//     }
// };
//
// console.log(ladder.up().up().down().showStep());


//45.Ստեղծել sum անունով ֆունկցիա, որը գումարվում է զանգվածի բոլոր արժեքները: 
// Նշենք, որ զանգվածը որպես արժեք կարող է ունենալ զանգված:


// const sumElems = (arr) => {
// //
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (Array.isArray(arr[i])) {
// //             sum += sumElems(arr[i]);
// //         } else {
// //             sum += arr[i];
// //         }
// //     }
// //     return sum;
// // }
// //
// // console.log(sumElems([4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9]))
