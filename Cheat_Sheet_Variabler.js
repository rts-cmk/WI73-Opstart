
// ====================================================

// Filen skal kan bruges som opslagsværk.
// Det er IKKE meningen, at du bare skal køre filen og kigge konsollen.


// ====================================================

// Deklarerer en variabel (betyder at oprette)
var tekst = "God arbejdslyst";

// Udskriver indholdet i konsollen
// (Du får ofte brug for at udskrive variabler i konsollen)
console.log (tekst);


// ====================================================
// Variabel   |  Værdi      |      Datatype

var antal      = 10;            // Number
var pris       = 20.75;         // Number

var besked1    = "Hej med dig"; // String vha. dobbeltplinger
var besked2    = 'Hej med dig'; // String vha. enkeltplinger

var erKlog     = true;          // Boolean (kan kun indeholde true eller false)
var erBindegal = false;         // Boolean (kan kun indeholde true eller false)


// ====================================================
// Sammensætning af variablers værdier

var postnr = 4000;
var by     = "Roskilde";
var sammensatForkert  = postnr + by;       // "4000Roskilde" (mangler et mellemrum)
var sammensatKorrekt1 = postnr + " " + by; // "4000 Roskilde"
var sammensatKorrekt2 = `${postnr} ${by}`  // "4000 Roskilde" ved hjælp af back-ticks (de skrå apostroffer)


// ====================================================
// Matematiske beregninger

var addition        =  4 + 7;      // 11
var subtraktion     = 20 - 5;      // 15
var division        =  1 / 3;      // 0.33333...
var multiplikation  =  6 * 2;      // 12

var prisMedMoms     = 16 * 1.25;   // 20
var prisUdenMoms    = 20 / 1.25;   // 16

var udenParenteser  =  3 + 2  * 4; // 11  (2 * 4 udregnes først)
var medParenteser   = (3 + 2) * 4; // 20  (3 + 2 udregnes først)

var rundNed         = Math.floor (3.7)     // 3
var rundOp          = Math.ceil  (3.7)     // 4  ("ceil" betyder "ceiling")
