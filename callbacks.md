# Callbacks i JavaScript
Den korte forklaring: 
**Callbacks, er funktioner der sendes med som argument, til en anden funktion.**


I har allerede stiftet bekendtskab med callbacks i javascript:
```javascript
var data = [1, 2, 3, 4, 5, 6];
data.forEach(function (element) {
   console.log(element);
});
```
I det eksempel, er funktionen inde i forEach paranteserne, en anonym callback funktion.

En funktion kan lægges ned i en variabel, det er 
```javascript
var data = function handling(){
   // noget kode...
};
data(); // dette udfører "handling()"
```
Det er samme princip der benyttes, når en callback funktion sendes med som argument.


```javascript
// tænk på dette som den primære funktion der kaldes fra vores kode
function doSomething(someValue, callback){
   callback(someValue);
}
// denne funktion vil blive udført som en callback FRA doSomething funktionen
function outputSomething(value){
   console.log(value);
}
```
funktionen **outputSomething** kan kaldes uafhængigt af andre funktioner, mens **doSomething** skal have en funktion sendt med som argument.

```javascript
doSomething('text', outputSomething);
```


## Opgaver

### øvelse 1

* Opret en funktion som kan modtage en enkelt værdi, og console.logge værdien.
* Omskriv et forEach kald, så det ikke benytter en anonym funktion, men så det i stedet modtager den navngivet funktion du lige har oprettet.


### øvelse 2

Skriv din egen funktion, der kalder en callback funktion.

* første funktion modtager en streng, og en callback funktion. funktionen skal tilføje et html \<p\> tag omkring strengen.
* callback funktionen modtager den ændrede streng, og console.log'er den. men kaldet skal ske fra den første funktion.


## Asynkronitet

Javascript kan have flere bolde i luften på en gang, det er super smart.
F.eks kan man sætte programmet igang med at hente data fra en databaseserver, og alt imens det sker, kan programmet fortsætte frem for at gå i stå mens der hentes data. 
```javascript
function getData(dataURI, callback) {
   console.log('første linje i getData funktionen...');
   var timer = setTimeout(function () {
      console.log('Her der der gået 2 sekunder.');
      var dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
      callback(dataArray);
   }, 2000);
}

function outputData(myData) {
   console.log('Dette er funktionen der udskriver det hentede data: ' + myData);
}

getData('http://www.domain.com/something', outputData);
console.log("Denne kode linje burde være den sidste.");
```

### Opgave
Afprøv ovenstående kode, og forsøg med egne ord at beskrive hvad det er der sker.
Bryd kode eksemplet op i små bidder og benyt markdown til at beskrive det.
