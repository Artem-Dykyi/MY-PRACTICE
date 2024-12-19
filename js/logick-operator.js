console.dir(Boolean);

console.log(Boolean(0));
console.log(Boolean(1));

const message = "Цей рядок не можливо перевести до числа";
console.log(Number(message));
console.log(Boolean(message));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(0));

// Логічний оператор і and - && 
// Запинається на неправді, вертає те на чому запнулось або останній операннт 

console.log(5 && "99" && 77);
console.log(1 && 0 && "88");
console.log(" " && 12 && undefined);
console.log("artem" && 18 && !null && 2);



// Логічне НЕ (оператор !);

console.log(!0);
console.log(!12);
console.log(!"");
console.log(!undefined);
console.log(!false);
console.log(!NaN);
console.log(!"888");


// Логічний оператор АБО запинається на правді чи останній операнд
console.log(1 || 9);
console.log(0 || "8");
console.log(null || undefined || "66");
console.log("null" || undefined || 76);
console.log(0 || NaN || undefined);


console.log("55" && 0 || 2);
console.log(2 || 0 && 55);
console.log(null || "66" && !"88" && 3);
console.log(!8 || !2 && "77" || !9 && 73 && "1");



// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2

// const x1 = 10;
// const x2 = 30;
// const number = 45;


const x1 = 10;
const x2 = 30;
const number = 45;

console.log(x1 > number);
console.log(x1 < number);
console.log(x1 < number && number < x2);
console.log(x1 > number || number > x2);



// Напиши скрипт який перевіряє можливість відкрити чат з користувачем.
// Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати
// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

const isOnline = false;
const isFriend = true;
const isDnd = false;
console.log(`Чи можемо розпочати чат з користувачем ${isOnline && isFriend && !isDnd}`);