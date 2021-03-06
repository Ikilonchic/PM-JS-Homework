console.log(2 + "2" == "2" + 2);                 // True,  с обеих сторон конкатенация строк, "22" == "22"
console.log(2 + "3" == "3" + 2);                 // False, тут тоже конкатенация, но строки "23" == "32"
console.log("3" + "2" == 3 + 2);                 // False, сравнение строки "32" с числом 5, неявное преобразование строки "32" в число 32 и затем их сравнение
console.log("3" + "2" == "3" + 2);               // True,  сравнение строк "32" и "32"
console.log("3" + "2" == 2 + "3");               // False, сравнение строк "32" и "23"
console.log(2 + Number("3") == Number("3") + 2); // True,  строка "3" явно приводится к числу, сравнение чисел 5, 5

console.log(12 / "6");                           // 2,           неявное приведение к числу, т.к. используем математиескую операцию
console.log("number" + 15 + 3);                  // 'number153', конкатенация строк: "number" + 15 + 3 = "number15" + 3 = 'number153' - порядок
console.log(15 + 3 + "number");                  // '18number',  сначала сумма двух чисел, а потом конкатенация
console.log([1] > null);                         // True,        обьявление массива со значением 1 и по идее массив преобразуется в число 1, а null в 0 :)
console.log("foo" + + "bar");                    // 'fooNaN',    Nan потому что второй плюс пытается привести строку "bar" к числу
console.log('true' == true);                     // False,       'true' конвертируется в NaN
console.log(false == 'false');                   // False,       'false' конвертируется в NaN
console.log(null == '');                         // False,       при нестрогом null равен только самому себе
console.log(!!"false" == !!"true");              // True,        тут по идее непустые строки приводятся к true, а потом двойное отрицание ничего значение не меняет и сравниваются true, true
console.log(['x'] == 'x');                       // True,        тут раскрывается массив

const enemy = {
    name: "Bob",
};

const friend = {
    name: "Alex",
};

const me = friend;

me.name = "Bob";

console.log(friend.name);   // "Bob", у объекта friend значение свойства name меняется в строчке 29 через ссылку me, которая ссылается на него
console.log(me === friend); // True,  сравнение ссылок на один объект, то есть объект сравнивают сам с сабой
console.log(me === enemy);  // False, объект один, но сравниваются ссылки, которые отличаются


function counter() {
    let n = 0;

    let count = function() { n++; };
    let print = function() { console.log(n); }

    let obj = new Function;
    obj.bind(this);

    return obj;
}

let c = counter();

console.log(counter.count());

c.count();
c.this.print();