# Betingede sætninger, Operatorer og Løkker 
Forventninger til eleverne
(I forbindelse med betingede sætninger, operatorer og løkker bl.a.)

## Når dagen er omme
* Du kan genbruge kode, der skal opstiller en betinget kodeblok (if sætning).
* Du kan genbruge kode, der skifter (switches) alt efter en variabels indhold.
* Har du en ide om hvad en operator er. 
* Du kan genbruge kode, der udføres flere gange igennem en løkke (while og for).
* Du kan genbruge kode, løber et array igennem og udfører kode for hvert element (foreach).

## Efter ca. en måned på hovedforløbet
* Udenad kan du anvende betingede sætninger.
* Udenad kan du konsturere løkker der løber igennem array data.
* Udenad kan du kende forskel på de mest almindeligt benyttede operatorer.
* Udenad kan du kombinere betingelser, operatoerer og løkker.

## Afleveringer
Alle opgaverne udføres i et repository på github, så enten skal du oprette et nyt eller fortsætte med at arbejde i **igang-med-github** projektet.

Opret nye filer så det er nemt for digselv at finde rundt efterfølgende, f.eks. en fil pr emne **betingelser**,**operatoerer**, og **løkker** 

### <a id="menu"></a>
# Indhold 
* [Betingelser](#conditions)
   * [Øvelser](#condition_tasks)
* [Operatorer](#operators)
   * [Øvelser](#operator_tasks)
* [Løkker del 1](#loops_1)
   * [Øvelser](#loop_tasks_1)
* [Løkker del 2](#loops_2)
   * [Øvelser](#loop_tasks_2)

#### <a id="conditions"></a>
# Oplæg - betingelser 
## if 
```javascript
if(true){
   console.log('kodeblokken udføres');
}
```

## if - else 
```javascript
if(true){
   console.log('kodeblokken udføres');
}else{
   console.log('kodeblokken springes over');
}
```


## ternary operator 
```javascript
var work_harder = true;
var result = work_harder ? "Jep, der skal arbejdes hårdere" : "Nope, der arbejdes fint";
console.log(result);
```



## if - else if - else
```javascript
var navn = "Carl";

if(navn == "Albert"){
   console.log('lander kun her hvis navn er Albert');
}else if(navn == "Benny"){
   console.log('lander kun her hvis navn er Benny');
}else{
   console.log('lander her hvis navn noget andet end Albert eller Benny');
}
```


## switch - case
```javascript
var name = "Egon";
switch (name) {
   case "Egon":
      console.log('Han har en plan');
      break;
   case "Finn":
      console.log('Ønsker medvind på cykelstierne');
      break;
   case "Georg":
      console.log('Får en lys ide');

   case "Hjælper":
      console.log(' er lille');
      break;
   default:
      console.log('ukendt');
      break;
}
```

Læs mere, hvis man har lyst eller er lidt i tvivl om syntax:

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/js_switch.asp

:arrow_up: [gå til indeks](#menu)

#### <a id="condition_tasks"></a>
# Øvelser - betingelser
Det er ok hvis man ikke når igennem alle øvelserne inden det næste oplæg, I har tid efter frokost til at fordybe jer i emnet, og til at nå alle opgaverne igennem.

## øvelse 1 
1. opret en boolean variabel, med værdien **true**
1. skriv en betinget sætning der console-logger 'hej verden' hvis variablens værdi er sand
1. ret variablens værdi til **false** og se om der logges i konsollen.


## øvelse 2
https://www.w3schools.com/js/js_random.asp

1. opret en variabel og tildel den et tilfældigt tal mellem 0 og 10
1. udskriv variablens værdi med en console.log
1. opret en if-sætning der udskriver 'højere end 5' hvis variablens værdi er  højere end 5 
1. tilføj en else-blok til if-sætningen, hvor der udskrives 'lavere end 5' 


## øvelse 3
Løs samme problem som i øvelse 2, men benyt en **ternary operator** i stedet for **if - else**


## øvelse 4
1. opret en variabel med navnet på din favorit læskedrik
1. opret en **if - else if - else** struktur hvor du udskriver en selvvalgt tekst, alt efter hvad variablen indeholder. 
1. lav mindst 2 **else if** blokke



## øvelse 5
Løs øvelse 4, men benyt **switch - case** istedet



## øvelse 6
Benyt markdown til at beskrive hvordan en if-else sætning fungerer i praksis. 
Sørg samtidig for at beskrive alle de tegn der skal benyttes i if-else strukturen.


:arrow_up: [gå til indeks](#menu)

#### <a id="operators"></a>
# Oplæg - operatorer
I de fleste programmerings sprog, og der i blandt også JavaScript, arbejder man med "operatoerer"

En operator, er et eller flere symboler der har en helt specifik betydning.

Der er flere af dem I allerede har benyttet, men det er vigtigt at I kan forklare hvad de forskellige operatorer gør og hvilken type operator det er.


F.eks. når i opretter variabler, og giver variablen en værdi, så benyttes et enkelt lighedstegn **=** 
Det er en **tildelings operator** eller på engelsk **assignment operator**

Når vi i en **if-sætning** ønsker at se om en variabel er lig med en bestemt værdi, benyttes to lighedstegn **==** det kaldes en **sammenlignings operator** eller på engelsk **comparison operator**

Der er også en tredje type operator, som udfører matematisk handlinger. f.eks. da I udregnede moms benyttede I en *stjerne* __*__ også kaldet **asterisk** det er et **gange tegn** 

En logisk operator, er den fjerde type operator I skal kende til. Det er en måde at udtrykke **og**, **eller**, og **ikke** 
f.eks. if(name != '' && name == 'albert')
**!** udråbstegnet vender et true om til at blive læst som false, eller omvendt. (udtales **Not Equal**)
**and** og  **or** benyttes til f.eks. at 2 udtryk sammen, hvor enten begge skal være true (and), eller hvor mindst 1 af dem skal være true (eller)



Det er vigtigt at kende til de forskellige logiske, tildelings, sammenlignigns, og matematiske operatorer, når der arbejdes med løkker og betingelser.

:arrow_up: [gå til indeks](#menu)

#### <a id="operator_tasks"></a>
# Øvelser - operatorer

## øvelse 1
inde på https://www.w3schools.com/js/js_operators.asp under afsnittet **JavaScript Arithmetic Operators** er der vist 7 operatorer.

1. opret to variabler med to forskellige tal værdier
1. console.log resultatet af at lægge de to variabler sammen, benyt **+**
1. console.log resultatet af af at trække dem fra hinanden, benyt **-**
1. console.log resultatet af at gange dem med hinanden, benyt __*__
1. console.log resultatet af at dividere dem med hinanden, benyt **/**
1. console.log hvor mange hele gange den første variabel går op i den anden variabel, benyt modulus **%**
1. console.log den første variabel, efter du har lagt 1 til med **++** operatoren.
1. console.log den anden variabel, efter du har trukket 1 fra med **--** operatoren.


## øvelse 2
inde på https://www.w3schools.com/js/js_operators.asp under afsnittet **JavaScript Assignment Operators** er der 6 operatorer.
1. opret en variabel med et valgfrit tal
1. opret en anden variabel med et andet valgfrit tal
1. lav 5 eksempler, hvor du skriver det som det står under **Example** i tabellen med operatorerne:
```javascript
var y = 5;
var x = 2;

x += y;
console.log(x);
```

## øvelse 3
opret en if sætning der kræver 2 betingelser er opfyldt, du må gerne benytte variabler så du kan afprøve med forskellige værdier.
_betingelserne kunne være 2 variabler med tal, hvor f.eks. det ene er mindre en 10 og det andet større en 10_


## øvelse 4
Gør som i øvelse 3, men denne gang skal bare 1 af betingelserne være opfyldt.

## øvelse 5
Benyt markdown til kort at beskrive hvad hver af de følgende operatoerer gør, kom med et eksempel på hvor hver af operatorene kan benyttes.

* =
* == 
* === 
* !
* != 
* !==
* <
* \>
* <=
* \>=
* \+
* \-
* \*
* /
* %
* &&
* || 


:arrow_up: [gå til indeks](#menu)

#### <a id="loops_1"></a>
# Oplæg - løkker (del 1)

**pas lidt på med løkker** 
```javascript
// DETTE SKABER ET EVIGHEDS LOOP! LAD VÆRE MED AT KØR KODEN!!!
while(true){
   console.log('Jep, dette sker igen og igen');
}
```


```javascript
// DETTE SKABER ET EVIGHEDS LOOP! LAD VÆRE MED AT KØR KODEN!!!
do{
   console.log('Jep, dette sker igen og igen, men mindst 1 gang');
} while(true);

```


```javascript
for(var i = 0; i < 10; i++){
   console.log(i);
}
```

:arrow_up: [gå til indeks](#menu)

#### <a id="loop_tasks_1"></a>
# Øvelser - løkker


## øvelse 1
med en do-while, lav en løkke der altid udføres mindst 1 gang eller indtil en tælle variabel er nået til en bestemt værdi


## øvelse 2
benyt en løkke til at udskrive alle tallene fra 1 til og med 25
_løs opgaven 3 gange, en med hver af løkkerne vi har været igennem nu_


## øvelse 3
benyt en for-løkke til at udskrive alle år fra 2017 og ned til 1917, i den faldende rækkefølge


## øvelse 4
benyt markdown til at beskrive hvordan en for-løkke fungerer, husk at få alle tegn med.



:arrow_up: [gå til indeks](#menu)

#### <a id="loops_2"></a>
# Oplæg - løkker (del 2)
```javascript
var farver = ['rød','grøn','blå'];
farver.forEach(function(farve){
   console.log(farve);
});
```

```javascript
var farver = ['rød','grøn','blå'];
farver.forEach(function(farve, index, arr){
   console.log(farve + ' har placering ' + index);
});
```

:arrow_up: [gå til indeks](#menu)

#### <a id="loop_tasks_2"></a>
## øvelse 1
1. opret et array med 8 navne
1. med en forEach skal du løbe igennem array'et og udskrive hvert navn.

## øvelse 2
1. opret et nyt array, denne gang med 4 forskellige musikkere/kunstnere
1. udskriv alle navn, samt hvilken position navnet har i arrayet.


## øvelse 3
1. opret et array med 10 tilfældige tal du selv vælger.
1. løb igennem arrayet med en forEach og for hvert element skal du udskrive om elementets værdi er større eller mindre end det næste element i arrayet.
1. tag højde for om der findes et **næste element** 

