# Node-server helt basic
Opsætning af webserver uden Express eller andre frameworks
Eksempel hentet fra https://nodejs.org/api/synopsis.html#synopsis_example 

1. Hent http modulet
2. Angiv hostname (ip-adresse eller "localhost")
3. Angiv port
4. Opret en server og lad den sende (response) teksten "Hello from server" til browseren (client)
5. Lad serveren lytte til "127.0.0.1:3000", og evt. udskrive til konsollen på serveren
 ```javascript
const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from server');
});

server.listen(port, hostname, function () {
    console.log(`serveren kører på http://${hostname}:${port}/`);
});
``` 
* Eksekver app.js og åben browseren for at se resultatet

![Vist i browser](./documentation/images/browser-1.png)

### Ændre udskriften
* Prøv at sæt h1-tag omkring teksten - `<h1>Hello from server</h1>`
* udskift 'text/plain' med 'text/html'
* Prøv at udskrive med **res.write()** og lukke af med **res.end()**, som vist herunder
```javascript
const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello from server</h1>');
    res.end();
});
```
> Det her var blot et ekempel på hvordan man _kan_ sende html til browseren.<br>
> I det følgende skal vi udvide eksemplet, så der kan håndteres flere "sider"

------------------------------------------

# Routes helt basic
Vi kan sjældent nøjes med at have én side kørende med alt kode.<br>
Hvis vi indsætter en navigation med links til andre sider på sitet bruger vi typisk et a-tag<br>`<a href="about.php">About</a>`

Det gør vi ikke i node - i stedet anvender vi begrebet `routes` som _i stedet for at referere til et filnavn_, refererer til et _route_ således `<a href="/about">About</a>`

I urlen skriver vi `http://127.0.0.1:3000/forside` hvis vi har lavet et **route** kaldet forside.

Altså, vi skal ikke lave fysiske sider til de "sider" vores site består af - vi skal lave **controllere**, som skal håndtere indholdet der sendes med **response** til klienten (browseren).

I eksemplet herunder er der oprettet en **const** kaldet **router**, som sættes lig med `require('./controllers/routesController')`. Det betyder at der ligger en mappe kaldet **controllers** og i den mappe ligger en js-fil kaldet **routesController**. I filen **routesController.js** ligger nu den kode (en funktion kaldet init) som skal anvendes i metoden `createServer`
> Læg også lige mærke til at metoden `listen` er kædet til `createServer` (chain)

_server.js_
```javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const router = require('./controllers/routesController');

http.createServer(function (req, res) {
    router.init(req, res);
}).listen(port, hostname);

console.log(`serveren kører på http://${hostname}:${port}/`);
```
_routesController.js_<br>
```javascript
const url = require('url');

module.exports = {
	init: function (req, res) {
		var pathname = url.parse(req.url, true).pathname;
		if (pathname === '/forside') {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.write("Forside");
			res.end();
		} else {
			res.statusCode = 404;
			res.end("ups...");
		}
	}
};
```
