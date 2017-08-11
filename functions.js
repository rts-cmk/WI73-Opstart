// Simpel function uden argumenter og returværdi
function hello() {
    console.log("hello...");
}
//* hello(); 

// Hoisting - funktionen kan kaldes før den er deklareret
// Funktionen kaldes med én værdi og modtages i ét argument
//sayHello('hoisting');

function sayHello(who) { // who er et argument
    console.log('hello', who);
}

//* sayHello('me');

// Hvis funktionen tildeles en variabel er der ingen hoisting

//* nonHoisting('is it hoisting?'); // flyt ned under funktionen

nonHoisting = function nonHoisting(value) {
    console.log(value);
}

// Function med to argumenter med hver en default-value
// herved kan funktionen kaldes med eller uden værdier
// Funktionen returnerer her en værdi i stedet for at udskive den i funktionen

function add(x = 0, y = 0) {
    console.log(`x=${x} y=${y} => x+y=`, x + y);
}
//* add();
//* add(3, 8);

// Argumenter kan være et array

var fullname = function (name) {
    return name[0] + " " + name[1];
}

var person = ["Frank", "Goldmann"];
//*  console.log(fullname(person));

// closure - function i function

let eurokurs = function (kurs) {
    return function (kroner) {
        return kroner / kurs;
    }
}

// eller en anden "smart" måde
//*let smartEurokurs = kurs => kroner => kroner / kurs;

let omregning = eurokurs(7.51);
//* console.log('kr.', omregning(100).toFixed(2));
//* console.log('kr.', omregning(500).toFixed(2));

// closure og callback
let pause = function (sekunder) {
    setTimeout(function () {
        console.log(`...der er nu gået ${sekunder}sekunder`)
    }, sekunder * 1000);
};
/*console.log('start');
pause(2);
console.log('end');
*/
// closure - flere functions i en function
function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.add(2);
calc.add(5);
calc.add(3);
calc.sub(4);
console.log(calc.result());