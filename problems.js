// Write a function called getTriangleAngle which receives the values of two angles and returns the
// value of the third. Remember that the total of all three angles is 180 degrees.
// Example: getTriangleAngle(45, 45); // should return 90


function getTriangleAngle(fA, sA) {
    return (fA + sA > 180 ? false : 180 - fA - sA);
}


//    1. Գրել ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի true, եթե թիվը զույգ է և false՝
//    հակառակ դեպքում։ Օր՝ isEven(20) // պետք է վերադարձնի 

function isEven(num) {
    return !(num % 2);
}


// 2. Գրել ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի true, եթե թիվը կենտ է և մեծ 100-ից,
// և false, մնացած դեպքերում։ Օր` isOdd(57) // պետք է վերադարձնի false

function isOdd(num) {
    return ((num % 2) && (num > 100));
}

// 3. Գրել ֆունկցիա, որը կվերցնի թիվ, և կվերադարձնի &quot;Hi teenager&quot;, եթե թիվը մեծ է կամ
// հավասար 13 և փոքր կամ հավասար 19, կվերադարձնի &quot;Hi, I&#39;m 25 too&quot;, եթե թիվը
// հավասար է 25, և կվերադարձնի &quot;Hello&quot; մնացած բոլոր դեպքերում։ Օր՝ greetPeople(17) //
// պետք է վերադարձնի &quot;Hi teenager&quot;


function greetPeople(num) {
    if (num >= 13 && num <= 19) return "Hi teenager";
    else if (num === 25) return "Hi, I'm 25 too";
    else return "Hello";
}


// 4. Գրել ֆունկցիա, որը կվերցնի տողային արժեքներ ունեցող զանգված և կվերադարձնի
// այդ զանգվածի ամենաերկար բառը։ Օր՝ getLongest ([“I”, “love”, “js”]); // պետք է
// վերադարձնի “love”


function getLongest(arr) {
    let maxLength = "";
    arr.forEach((item) => {
        if (item.length > maxLength.length) {
            maxLength = item;
        }
    })
    return maxLength;
}


// 5. Գրել ֆունկցիա, որը կվերցնի տարբեր տիպերի արժեքներ ունեցող զանգված և
// կվերադարձնի նոր զանգված, որում սկզբնական զանգվածի միայն տողային՝ “string”
// տիպի արժեքներն են։ Օր՝ getStrings([“a”, 2, false, “b”]); // պետք է վերադարձնի [“a”, “b”]


function getStrings(arr) {
    return arr.filter((val => typeof val === 'string'));
}


// 6. Գրել ֆունկցիա, որը կընդունի որպես պարամետր 2 զանգված և կվերադարձնի նորը՝
// որը իր մեջ կպարունակի առաջին զանգվածի էլեմենտների մեջտեղում դրված 2րդ
// զանգվածի էլեմենտները։


function margeArr(arr1, arr2) {
    let margedArr = [];
    arr1.forEach((item, index) => {
        if (index === Math.floor(arr1.length / 2)) {
            arr2.forEach((item) => margedArr.push(item));
        }
        margedArr.push(item)
    })
    return margedArr;
}


// Գրել ֆունկցիա, որը մուտքում կստանա երեք թիվ, և պետք է ստուգել, թե հնարավոր է
// արդյոք այդ երեք երկարություններով կառուցել եռանկյունի: Եթե՝ այո, վերադարձնել
// true, այլապես վերադարձնել false: Օրինակ՝ canBeATriangle(10,10,10) // պետք է
// վերադարձնի true; canBeTriangle(100,10,10) // պետք է վերադարձնի false:


function canBeTriangle(x, y, z) {
    return (x + y > z) && (x + z > y) && (y + z > x);
}


// 8. Գրել ֆունկցիա, որը մուտքում կստանա 1000-ից ոչ մեծ ամբողջ թիվ և կստուգի՝ պարզ
// է այդ թիվը, բաղադրյալ, թե ոչ պարզ, ոչ բաղադրյալ: Բացասական թվերն ու 0-ն
// ընդունենք ոչ պարզ, ոչ բաղադրյալ: Եթե թիվը պարզ է, վերադարձնել “prime”, եթե
// բաղադրյալ է՝ “composite”, եթե ոչ պարզ է ոչ էլ բաղադրյալ՝ &quot;neither prime nor composite&quot;:
// Եթե թիվը մեծ է 1000-ից, վերադարձնել &quot;too big number&quot;:


function isPrime(num) {
    if (num <= 1) return "neither prime nor composite";
    else if (num > 1000) return "too big number";
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return "composite";
        }
    }
    return "prime";
}


// 9. Գրել ֆունկցիա, որը կստանա մուտքում օբյեկտ, և եթե այն իր մեջ պարունակում է
// name ու age property-ներ, որոնք դատարկ, undefined, 0 կամ null չեն, կվերադարձնի “Hi,
//     my name is [name], I am [age] years old”, իսկ հակառակ դեպքում կվերադարձնի “Hi, what
// is your name?”

function sayHi(obj) {
    if (obj.name && obj.age) return `Hi, my name is ${obj.name}, I am ${obj.age} years old`;
    return "Hi, what is your name?";
}


// 10. Գրել ֆունկցիա, որը կընդունի որպես պարամետր 0ից մեծ թիվ ու կտպի բուրգ՝ այդ
// բարձրությամբ։

function draw(num) {
    if (num < 0) return false;
    let result = "";
    let sign = "*";
    for (let i = 0; i < num; i++) {
        result += `${sign} \n`;
        sign += "*";
    }
    return result;
}


// 11. Գրել ֆունկցիա, որը կհաշվի տրված դրական թվի բաժանարարների գումարը.
//     Թվի բաժանարար են կոչվում այն թվերը, որոնց վրա բաժանվում է տրված թիվը։
// Օր.՝ 12-ի բաժանարարներն են 1, 2, 3, 4, 6, 12, նրանց գումարը կլինի 28.

function sumDivider(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) sum += i;
    }
    return sum;
}


// 12. Գրել ծրագիր, որը կպահի հեռախոսահամարների զանգված: Օգտագործողը
// շարունակաբար կկարողանա նոր հեռախոսահամարներ ներմուծել, և եթե դրանք դեռ
// գրված չեն զանգվածում, ծրագիրը դրանք կավելացնի և կտպի “Thank you.”: Հակառակ
// դեպքում, այն կտպի “Phone number already exists”, և օգտագործողին նոր
// հեռախոսահամար գրելու հնարավորություն կտա: Եթե ներմուծված է դատարկ string
// կամ null, ծրագիրը նորից կհարցնի: Եթե նա ուզենա կանգ առնել, պետք է տպի “stop”, և
// ծրագիրը կանգ կառնի: Կարևոր՝ հեռախոսահամարները կարող են սկսվել 0-ով:

function mobNumArr() {
    let mobNumP = prompt('Please, input a phone number.');
    let mobNumArr = [];
    if (mobNumP[0] === '0' && typeof +mobNumP.substr(1, mobNumP.length) === 'number'
        && mobNumP.length === 9) {
        alert("Thank you");
        mobNumArr = [mobNumP];
    }
    while (true) {
        mobNumP = prompt('Please, input a phone number.');
        if (mobNumP[0] === '0' && typeof +mobNumP.substr(1) === 'number'
            && mobNumP.length === 9 && mobNumArr.length === 0) {
            alert("Thank you");
            mobNumArr = [mobNumP];
            continue;
        }
        if (mobNumP === 'stop') break;
        if (mobNumP) {
            for (let i = 0; i < mobNumArr.length; i++) {
                if (mobNumArr[i] === mobNumP) {
                    alert("Phone number already exists");
                    break;
                } else if (i === mobNumArr.length - 1) {
                    if (mobNumP[0] === '0' && typeof +mobNumP.substr(1) === 'number'
                        && mobNumP.length === 9) {
                        alert("Thank you");
                        mobNumArr.push(mobNumP);
                        break;
                    }
                }
            }
        }
    }
    return mobNumArr;
}


// 13. Գրել ֆունկցիա, որը ստանալով որպես պարամետր 2 զանգված, կասի, թե քանի
// ընդհանուր անդամ ունեն նրանք։


function sameElemCount(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[0] === arr2[i]) {
            count = 1;
        }
    }

    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] === arr1[0]) continue;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

// 14. Գրել ֆունկցիա, որը մուտքում կստանա մեկական տառերից կազմված զանգված, և
// կվերադարձնի այն տառը, որը ամենաշատն է հանդիպել: Եթե կան մեկից ավելի
// առավելագույն անգամ հանդիպած տառեր, վերադարձնել այն, որը հանդիպել է
// առաջինը:

function commonLetter(arr) {
    let maxCount = 0;
    let printLetter = "";
    let letterObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(letterObj[arr[i]])) {
            letterObj[arr[i]] = 1;
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) letterObj[arr[i]]++;
        }
        if (letterObj[arr[i]] > maxCount) {
            maxCount = letterObj[arr[i]];
            printLetter = arr[i];
        }
    }
    return printLetter;
}

commonLetter(["a", "b"]);


// 15. Ունենալով անվերջ լայնությամբ ու անվերջ երկարությամբ շախմատի տախտակ,
//     գրել ծրագիր, որը կասի՝ տրված կոորդինատներով վանդակը սև է թե սպիտակ: Կարող եք
// ընդունել, որ տողերի ու սյուների հաշվարկը սկսում ենք 0ից ու (0, 0) վանդակը սպիտակ
// է։ Փակագծերում գրված զույգի առաջին անդամը ցույց է տալիս վանդակի տողը, 2րդը՝
// սյունը։ (Բայց տեղերը փոխելիս լուծումը չի փոխվի :) )


function chessBoard(row, col) {
    return (row + col) % 2 ? 'black' : 'white';
}

// 16. Գրել ֆունկցիա, որը մուտքում կստանա զանգված, որը կազմված կլինի 3
// զանգվածից՝ յուրաքանչյուրը՝ 2 երկարությամբ: Դրանք կլինեն եռանկյան
// կոորդինատներ (x,y) ֆորմատով: Ֆունկցիան պետք է հաշվի այդ կետերով կազմված
// եռանկյան մակերեսը: Կլորացնել մինչև 1 նիշ ստորակետից հետո:

function triangleArea(arr) {
    let pro1 = Math.sqrt(Math.pow(arr[0][0] - arr[1][0], 2) + Math.pow(arr[0][1] - arr[1][1], 2));
    let pro2 = Math.sqrt(Math.pow(arr[0][0] - arr[2][0], 2) + Math.pow(arr[0][1] - arr[2][1], 2));
    let pro3 = Math.sqrt(Math.pow(arr[1][0] - arr[2][0], 2) + Math.pow(arr[1][1] - arr[2][1], 2));
    let per = (pro1 + pro2 + pro3) / 2;
    return (Math.sqrt((per) * (per - pro1) * (per - pro2) * (per - pro3))).toFixed(1)
}


// 17. Գրել ֆունկցիա, որը կստանա մուտքում թվերի զանգված և կվերադարձնի օբյեկտ:
//     Այս օբյեկտը պետք է պարունակի ամենամեծ թիվը, ամենափոքր թիվը, ամենաշատը
// հանդիպող թիվն ու թվերի միջին թվաբանականը՝ համապատասխանաբար min, max,
//     mode, mean անվանումներով: Եթե կան նույն քանակով հանդիպող թվեր, տպել բոլորը՝
// զանգվածի տեսքով: Միջին թվաբանականի արժեքը կլորացնել մինչև 1 նիշ ստորակետից
// հետո:


function numberInfo(arr) {
    let obj = {
        min: Infinity,
        max: -Infinity,
        mode: [],
        mean: 0
    }
    let helperObj = {};

    for (let i = 0; i < arr.length; i++) {
        if (!helperObj[arr[i]]) helperObj[arr[i]] = 1;
        else helperObj[arr[i]]++;
        if (obj.min > arr[i]) {
            obj.min = arr[i];
        }
        if (obj.max < arr[i]) {
            obj.max = arr[i];
        }
        obj.mean += arr[i];
    }

    obj.mean = obj.mean / arr.length;
    let maxMean = Math.max(...Object.values(helperObj));
    for (let key in helperObj) {
        if (helperObj[key] === maxMean) {
            obj.mode.push(+key)
        }
    }
    return obj;
}










