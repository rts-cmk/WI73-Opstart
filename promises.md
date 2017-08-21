# Promises
Callbacks er noget I kommer til at benytte rigtig meget, men det kan hurtigt blive en ordentlig omgang spagettikode... Specielt når der er tale om **askynkronisitet** 

Det er derfor der er introduceret et nyt koncept, kaldet **Promises**

Formålet er at komme væk fra at skulle medsende callbacks. I stedet kan vi **chaine** to nye funktioner **then** og **catch** til koderne.

.then() og .catch() er funktioner JavaScript stiller til rådighed igennem et **Promise**

```javascript
doOneThing().then().catch();
```  
Det er selvfølgelig lidt mere kompliceret end at sætte tre funktioner efter hinanden.

Et Promise benytter faktisk callbacks, men på en lidt speciel måde. Når vi skriver koden, benyttes et nyt JavaScript objekt (Objekter kommer vi mere ind på senere på uddannelsen). Promise objektet oprettes og skal have to callbacks, der populært kaldes **resolve** og **reject** 

**resolve()** bliver til **.then()** og **reject()** bliver til **.catch()**

Et eksempel, det er nok mere tydeligt. Her undlades **reject/catch**
```javascript
let firstPromise = new Promise(function (resolve, reject) {
   resolve('success');
});

firstPromise.then(function (successMessage) {
   console.log(successMessage);
});
```

## Hvorfor er det så smart? .. det ser jo vildt mystisk ud... 

En klar fordel ved Promises, er at vi får en meget tydelig kodestruktur, som er nemmere at vedligeholde end en masse tilfældige callback funktioner.

Lad os se et eksempel der bygger oven på det forrige eksempel, og implemeterer både reject og resolve
```javascript
let secondPromise = new Promise(function (resolve, reject) {
   // her kunne der være masser af kode der skulle udføres
   // og derefter afsluttes med at resolve eller reject
   // alt efter om alting lykkedes eller ej
   if (true) {
      resolve('success');
   } else {
      reject('Det var ikke en succes');
   }
});

secondPromise.then(successMessage => {
   console.log(successMessage);
}).catch(errorMessage => {
   console.log(errorMessage);
});
```
prøv koden af, og skift **true** ud med **false**!



## Funktioner der retunerer et promise

Det sidste koncept I skal se nærmere på, er at have en funktion der lover et **promise**

Dette koncept vil vi arbejde videre på I morgen, hvor vi vil benytte en indbygget funktion der bygger på promises. Så brug tid på at se denne kode igennem.
```javascript
function thirdPromise(someBoolValue) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (someBoolValue) {
            resolve('Denne besked kommer fra "resolve"');
         } else {
            reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
         }
      }, 2000);
   })
}

thirdPromise(true)
   .then((success) => {
      console.log(success);
      //throw new Error('lad os sige noget gik galt!');
      return 'Information sendes videre';
   }).then((nextSuccess) => {
      console.log(nextSuccess);
   }).catch((error) => {
      console.log(error);
   })
```
Læg i øvrigt mærke til hvad der sker når reject funktionen kaldes. Der benyttes **new Error()** til at sende en detaljeret fejlbesked til **.catch()** funktionen. 

En anden detalje der er værd at se nærmere på, er at der er **to** .then() efter hindanden... 
Prøv at fjerne kommentaren så **throw new Error()** bliver udført.


Frygt ej hvis det virker uoverskueligt lige nu! I morgen vil vi arbejde meget mere med konceptet, og det bliver meget mere *hands on* så hav tålmodighed.

Formålet med i dag, er at introducere til konceptet, den dybere forståelse kommer senere igennem mere praktisk arbejde.





