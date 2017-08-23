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
> Det her er blot et ekempel på hvordan man _kan_ sende html til browseren.<br>
> I kommende undervisning lærer vi andre og smartere måder
