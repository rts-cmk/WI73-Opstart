# Blandede opgaver

Du bestemmer selv i hvilken **rækkefølge** du vil lave opgaverne.

Har du **forslag til nye opgaver**, så del dem gerne på Slack.

Vi vil råde dig til at lave en **separat Javascript fil til hver opgave**. Navnet på filen kunne bare være "opgave_" og så de overskrifter vi har givet dem, dog helst uden mellemrum og specialtegn, f.eks.: 
```
opgave_fartboeden.js
opgave_plum_bus.js
opgave_fjern_mellemrum_foer_og_efter_en_tekst.js
```

---

### BMI 
Opret en funktion som beregner BMI ud fra højde og vægt. 
Funktionen skal returnere en af teksterne ud fra formlen du finder på http://www.bmitest.dk/ 
* Undervægtig 
* Normalvægtig 
* Overvægtig 
* Fedme 
* Svær fedme

Test funktionen med forskellige funktionskald

---
### Fartbøden 
Opret en funktion som beregner en fartbøde for personbil under 3.500 kg. 
Du kan læse om taksterne på http://koerekort-guiden.dk/fartboeder 
Funktionen skal modtage flg. informationer: 
* Hastighedsbegrænsning 
* Kørt hastighed 
* Vejarbejde (ja/nej) 
Funktionen skal beregne og returnere bødetaksten, og evtentuelle Klip, betinget- eller ubetinget frakendelsle af kørekorten.

---

### Spritkørsel 
Opret en funktion svarende til Fartbøden som bestemmer bødestørrelse og konsekvens ved forskellige promiller. 
Du kan hente information på http://koerekort-guiden.dk/spirituskoersel-og-straf 

---

### Lær Visual Studio Code Editing
Se, læs og lær en lang række smarte faciliteter i VSCode du helt sikkert har brug for.

Basic Editing: https://code.visualstudio.com/docs/editor/codebasics 

---

### Valuta format 
Opret en funktion som returnerer et tal i valutaformat.

Eksempel: funktionen modtager tallet 3435.5 og returnerer teksten ”kr. 3.435,50”).

OBS: Decimal-tegnet i programmering er punktum, ikke komma. To og en halv skrives således: 2.5 (med punktum).

---

### Fibonacci sekvens
Reglen for Fibonacci sekvensen er at det næste tal i rækken findes ved at lægge de to seneste tal sammen. 
[Fibonacci på wikipedia](https://da.wikipedia.org/wiki/Fibonacci-tal)

Skriv kode der kan udskrive alle Fibonacci tallene, der ligger under 1600, hvis sekvensen starter med 0,1

---

### Palindromer
Skriv en funktion som tager imod en tekststreng og returnerer true eller false afhængigt af om tekststrengen er et palindrom.
[Palindromer på wikipedia](https://da.wikipedia.org/wiki/Palindrom)

---

### Plum Bus
Skriv kode der kan udskrive alle hele tal fra 1 til og med 137, og som følger dette regelsæt:
* når et tal er deleligt med 3, udskrives 'Plum' i stedet for tallet
* når et tal er deleligt med 5, udskrives 'Bus' i stedet for tallet
* når et tal er deleligt med både 3 og 5, udskrives 'Plum Bus' i stedet for tallet

F.eks:

```
1
2
Plum  (3 er deleligt med 3)
4
Bus  (5 er deleligt med 5)
...
13
14
Plum Bus  (15 er deleligt med både 3 og 5)
```

---

### Fjern mellemrum før og efter en tekst
Definér funktionen `fjernMellemrumFoerOgEfter`, der tager imod en tekststreng, fjerner evt. mellemrum før og efter teksten og returnerer den nye tekst.

Eksempler på hvad funktionen forventes at returnere:

```javascript
var tekst = fjernMellemrumFoerOgEfter ("Hej");      // returnerer "Hej"
var tekst = fjernMellemrumFoerOgEfter (" Hej ");    // returnerer "Hej"
var tekst = fjernMellemrumFoerOgEfter (". Hej .");  // returnerer ". Hej ."
```

---

### Lig eller Ulig
Definér funktionen `ligEllerUlig`, der tager imod et tal og returnerer 0 hvis det modtagede tal er lige eller 1  hvis det er ulige.

Kan decimaltal som 3.7 være lige og ulige? Giv et bud på, hvordan man kunne håndtere dette.

Eksempler på hvad funktionen forventes at returnere:

```javascript
var resultat = ligEllerUlig (0);  // returnerer 0
var resultat = ligEllerUlig (1);  // returnerer 1
var resultat = ligEllerUlig (2);  // returnerer 0
var resultat = ligEllerUlig (3);  // returnerer 1

var resultat = ligEllerUlig (-1);  // returnerer 1
var resultat = ligEllerUlig (-2);  // returnerer 0
var resultat = ligEllerUlig (-3);  // returnerer 1

var resultat = ligEllerUlig (3.7);  // returnerer øh... Hvad synes du?
```

---

### Roulette Array
Definér funktionen `rouletteArray (tal, muligheder_array)`, der tager imod et tal og et array af muligheder, og returnerer ét af mulighederne afhængigt af det tal man giver funktionen.

Eksempler på hvad funktionen forventes at returnere:

```javascript
var farve = rouletteArray (0, ["rød", "grøn", "blå"]);  // returnerer "rød"
var farve = rouletteArray (1, ["rød", "grøn", "blå"]);  // returnerer "grøn"
var farve = rouletteArray (2, ["rød", "grøn", "blå"]);  // returnerer "blå"
var farve = rouletteArray (3, ["rød", "grøn", "blå"]);  // returnerer "rød"
var farve = rouletteArray (4, ["rød", "grøn", "blå"]);  // returnerer "grøn"

var style = rouletteArray (0, [".bright", ".dark"]);  // returnerer ".bright"
var style = rouletteArray (1, [".bright", ".dark"]);  // returnerer ".dark"
var style = rouletteArray (2, [".bright", ".dark"]);  // returnerer ".bright"
var style = rouletteArray (3, [".bright", ".dark"]);  // returnerer ".dark"
```
---

### Vinkel 360
Definér funktionen `vinkel360`, der tager imod en vinkel i grader og returnerer en vinkel, der altid er mellem 0 og 360 (ekslusiv 360).

Eksempler på hvad funktionen forventes at returnere:

```javascript
var vinkel = vinkel360 (  0);  // returnerer   0
var vinkel = vinkel360 (360);  // returnerer   0
var vinkel = vinkel360 (720);  // returnerer   0

var vinkel = vinkel360 ( 10);  // returnerer  10
var vinkel = vinkel360 (-10);  // returnerer 350
var vinkel = vinkel360 (365);  // returnerer   5
var vinkel = vinkel360 (725);  // returnerer   5
```

---

### Afstand 2D
Definér funktionen `afstand2d (x1, y1, x2, y2)`, der tager imod 2 punkters X og Y positioner og returnerer afstanden mellem de 2 punkter.

Eksempler på hvad funktionen forventes at returnere:

```javascript
var afstand = afstand2d ( 0,  0,  1,  0);  // returnerer 1
var afstand = afstand2d ( 0,  0,  5,  0);  // returnerer 5
var afstand = afstand2d ( 2,  0,  5,  0);  // returnerer 3

var afstand = afstand2d ( 0,  0,  1,  1);  // returnerer 1.414
var afstand = afstand2d ( 1,  1,  2,  2);  // returnerer 1.414
var afstand = afstand2d ( 2,  2,  3,  3);  // returnerer 1.414

var afstand = afstand2d ( 0,  0,  2,  2);  // returnerer 2.828
var afstand = afstand2d (-1, -1,  1,  1);  // returnerer 2.828
```

---

### Fix koden 1: Fejlbeskeder tekststreng
Problem:<br>
Når den udleverede kode er kørt, indeholder variablen fejlbeskeder kun den sidste fejlbesked, _"Du skal udfylde adresse feltet"_.

Gør det, der skal til, for at alle beskederne bliver lagt ned i variablen fejlbeskeder.

```javascript
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var navn = "";
var alder = "";
var adresse = "";

var fejlbeskeder = "";

if (navn == "")
{
	fejlbeskeder = "Du skal udfylde navn feltet\n";
}

if (alder == "")
{
	fejlbeskeder = "Du skal udfylde alder feltet\n";
}

if (adresse == "")
{
	fejlbeskeder = "Du skal udfylde adresse feltet\n";
}


console.log (fejlbeskeder);
```

---

### Fix koden 2: Fejlbeskeder array
Problem:<br>
Når den udleverede kode er kørt, indeholder fejlbeskeder array'et kun ét element, hvilket er den sidste fejlbesked, _"Du skal udfylde email feltet"_.

Gør det, der skal til, for at vi ender med at have et array der indeholder i alt 3 elementer - ét for hver fejlbesked.

```javascript
// Disse oplysninger kommer selvfølgelig typisk fra en formular
var brugernavn = "";
var password = "";
var email = "";

var fejlbeskeder = [];

if (brugernavn == "")
{
	fejlbeskeder = ["Du skal udfylde brugernavn feltet\n"];
}

if (password == "")
{
	fejlbeskeder = ["Du skal udfylde password feltet\n"];
}

if (email == "")
{
	fejlbeskeder = ["Du skal udfylde email feltet\n"];
}


console.log (fejlbeskeder);
```

---

### Fix koden 3: En simpelt funktion
Problem:<br>
Den viser en fejl, når den udleverede kode udføres. Jeg forsøger bare at definére en helt simpelt funktion, der tager imod to tekster og sætter dem sammen med et mellemrum i mellem dem.

Fix problemet og forklar hvad der var galt - bare skriv en kommentar i koden.

```javascript
function sammensaetTekst ("forste", "anden")
{
	return "forste" + " " + "anden";
}

var resultat = sammensaetTekst ("Mickey", "Mouse");

console.log (resultat); // Forventede resultat: "Mickey Mouse"
```
