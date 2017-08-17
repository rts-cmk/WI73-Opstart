# WI73 Intro til functions
_Frank Goldmann 17. august 2017_

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

`i flg. øvelser oprettes nye funktioner`

* Opret herefter en variabel kaldet `result` udenfor funktionerne, hvor resultatet løbende opdateres, efterhånden funktionerne anvendes.
* Opret nu en række funktionskald til de forskellige funktioner til dine beregninger og udskriv resultatet.
* Opret evt. et par ekstra funktioner til andre regnefunktioner, pi, kvadratrod etc. 


