# WI73 Intro til functions
_v/Frank Goldmann 17. august 2017_
<hr>

### Målsætning for dagen
Du kender til begrebet funktioner og kan anvende dem i fremtidige opgaver, herunder begreberne
> * `funktioner` _functions_
> * `argumenter` _arguments_
> * `instruktioner` _instructions_
> * `returværdier` _return value_
> * `funktionskald` _function call_
> * `hoisting` _hoisting (på dansk "hejse")_
> * `funktioner i funktioner` _functions in functions_
> * **Husk at dokumentere din kode og de begreber du har arbejdet med i løbet af dagen.**

### Anbefalede referencer
><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions" target="_blank">MDN Functions</a>
>
><a href="https://github.com/airbnb/javascript#functions" target="_blank">Airbnb Functions</a>

<hr>

# Introduktion
I dette modul vil vi se på egne funktioner (`functions`) og hvorledes de kan opbygges og anvendes i forskellige sammenhæng.

Javascript har en lang række indbyggede funktioner såsom `console.log()`, hvor **log()** er en function til **console**. 

Helt grundlæggende er en funktion en samling af instruktioner som udføres ved et kald til funktionens navn.

I eksemplet herunder er der oprettet en funktion med navnet **hello**.
* Funktionen kaldes med funktionskaldet `hello()`.
* Instruktionen `console.log("hello...")` udføres og programmet fortsætter nu _efter_ funktionskaldet `hello()`.
``` javascript
// Simpel function uden argumenter og returværdi
function hello() {
    console.log("hello...");
}
hello(); // Udskriver "hello..."
```
<hr>

# Hoisting
Hoisting er et begreb man bør kende til og handler i sin enkelthed om, hvornår en funktion kan kaldes.

I eksemplet herunder kaldes funktionen før den erklæres, samt efter den erklæres -  og det virker grundet begrebet hoisting. Programmet, altså 'javascripten' er i stand til at håndtere kald _før_ erklæringen.

I eksemplet overføres samtidig en værdi (**value**) via funktionskaldet, som modtages i et **argument** i funktions parranteser - for til sidst at blive udskrevet via `console.log`. Udskriften er en sammensætning af teksten **'hello'** samt værdien til argumentet **who**
``` javascript
// Hoisting - funktionen kan kaldes før den er deklareret
// Funktionen kaldes med én værdi og modtages i ét argument
sayHello('hoisting');  // Udskriver "hello hoisting"

function sayHello(who) { // who er et argument
    console.log('hello', who);
}

sayHello('me'); // Udskriver "hello me"
```
### Hoisting har ikke altid effekt...
Hvis funktionen tildeles en variabel som vist herunder fungerer hoisting ikke

Det er variablen `sayHello` og ikke funktionen `sayHello`som kaldes
``` javascript
// Hvis funktionen tildeles en variabel er der ingen hoisting

sayHey('test for hoisting?'); // flyt ned under funktionen

var sayHey = function sayHey(value) {
    console.log(value);
}
```
# Øvelse 1

#### A. Udskriv profil
* Opret en funktion som udskriver dit fornavn, efternavn og fødselsdag.
* Alle tre værdier skal overføres via funktionskaldet til funktions argumenter for derefter at blive udskrevet.
#### B. Regnefunktioner
* Opret en en række funktioner som henholdsvis lægger to tal sammen, trækker to tal fra hinanden, ganger to tal og dividerer to tal.
* Opret herefter en variabel kaldet `result` udenfor funktionerne, hvor resultatet løbende opdateres, efterhånden funktionerne anvendes.
* Opret nu en række funktionskald til de forskellige funktioner til dine beregninger og udskriv resultatet.
* Opret evt. et par ekstra funktioner til andre regnefunktioner, pi, kvadratrod etc. 

<hr>

# Anonyme funktioner
En anonym funktion har som begrebet siger intet navn. Men de kan med fordel anvendes i mange sammenhæng.

I eksemplet herunder oprettes en variabel som tildeles en funktion - her en anonym funktion.

Funktionen kaldes på nøjagtig samme måde, blot ved at anvende variablens navn i stedet for funktiones navn - hvis altå den har et navn (som eksemplet ovenover `sayHey`)
``` javascript
// Anonym funktion
var sayHeyAnonym = function (value) {
    console.log(value); // Udskriver "test af anonym function"
}

sayHeyAnonym('test af anonym funktion');
```
<hr>

# The arrow function expression (=>)
>Lad det være sagt fra starten: Det er ikke hensigten at I skal lave funktioner på denne måde fra start.
>Men I vil støde ind i eksempler som dette, når i kigger på nettet - og det er smart, når du er **helt** fortrolig med funktioner.
>
``` javascript
// Arrow function
var sayWhat = value => console.log(value); // Udskriver teksten fra funktionskaldet

sayWhat('var det lige lidt for smart?');

```
<hr>

# Arguments og default-values
Hvis der er flere arguments i funtionen skal de adskilles af et komma - og ligeledes kaldes komma adskilt.

I eksemplet herunder er der to arguments, et kaldet x og et andet kaldet y.

Funktion har to argumenter med hver en default-value. Nu kan funktionen kaldes _med_ eller _uden_ værdier i funktionskaldet.

I udskrivningen med `console.log` andvendes en tekst-streng indeholdende variablene `${x}` og `${y}`Husk dog at der skal anvendes ( ` ) _Grave Accent_ eller _Angled Apostraphe_
``` javascript
function add(x = 0, y = 0) {
    console.log(`x er lig med ${x} og y=${y}. Sum: `, x + y);
}
 
add(); //Udskriver "x er lig med 0 og y=0. Sum:  0"
add(3, 8); //Udskriver "x er lig med 3 og y=8. Sum:  11"


```
# Øvelse 2

Opret en funktion som kan afkorte og returnere en ny streng
* Gå ind på <a href= "https://www.w3schools.com/js/js_string_methods.asp" target="_blank">W3Schools.com | String Methods</a> og undersøg hvilken javascript-function du kan bruge til at afkorte en streng
* Udbyg funktionen så den både modtager teksten og hvor meget den skal afkortes.
* Du skal sikre, at funktionen ikke fejler, hvis den modtager en tekst som er kortere end det den skal afkortes til.

<hr>

# Array som argument
Funktionen modtager her et array med 3 værdier

Herefter returneres en sammensat streng i stedet for at udskrive i funktionen
``` javascript
// Argumenter kan være af typen array

var profil = function (p) {
    return p[0] + " " + p[1] + ": Født " + p[2]; // Returnerer tekst-strengen "Peter Pedal: Født 1941"
}

var idol = ["Peter", "Pedal", 1941];

console.log(profil(idol)); // Udskriver "Peter Pedal: Født 1941"

```
# Øvelse 3
Opret en funktion som returnerer _din_ profil svarende til eksemplet herover med Peter Pedal - men i en udvidet og meget gerne omskrevet version.

1. Udskriften skal stadig foregå i konsollen
2. Der skal indgå linjeskift i udskriften
3. Der skal ligge en beregning af din alder ud fra din fødselsdag- og år
4. Din profildata skal ligge i et array

#### Ekstra udfordringer
_Det forventes ikke at du kan løse følgende lige nu, men kig på dem og så løser vi dem i grupperarbejde senere._

A. Opret et array med flere profiler

B. Opret en ny funktion som udover arrayet modtager et index (id) for den profil der skal udskrives.

C. Omskriv funktionen, så den udskriver alle profiler - hvis ikke der overføres et index/id

<hr>

# Function in function
(_Avanceret_)

Funktioner kan godt gå hen og blive noget komplekse og svære at forstå, når vi som i eksemplet her skriver funktioner i funktioner.

Selvom det er avanceret ser vi lige på det sammen. I den kommende undervisning går vi i dybden og snakker begreber som f.eks. `closure`.

**Eksemplet forklares i undervisningen!**

``` javascript
// closure - function i function

let eurokurs = function (kurs) {
    return function (kroner) {
        return kroner / kurs;
    }
}

// eller en anden "smart" måde
let smartEurokurs = kurs => kroner => kroner / kurs;

let omregning = eurokurs(7.51);
console.log('kr.', omregning(100).toFixed(2));
console.log('kr.', omregning(500).toFixed(2));

```
<hr>

#  Flere funktioner i samme funktion 

(_Avanceret_)

Øvelsen fra tidligere med flere regnearter kan gøres lidt mere kompleks, som vist i eksemplet herunder.

Eksemplet har én funktion kaldet `calculator`, som tilbyder hele 3 forskellige funktioner - en kaldet `add`, en anden kaldet `sub` og endelig en kaldet `result` 

Efter funktionen oprettes en variabel kaldet `calc` som tildeles funktionen `calculator`. Da variablen nu er en **funktion** kan dens **indbyggede funktioner** tilgås via variablen `calc`
``` javascript

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
```
# Øvelse 4
Udvid funktionen **calculator** med flere funktioner som f.eks.
* Gange
* Dividere
* pi
* kvadratrod
* Udskriv med decimaler
* ... og/eller andre du finder på

<hr>
Ikke mere om funktioner nu - men husk nu din dokumentation i din mark-down fil
<hr> 
