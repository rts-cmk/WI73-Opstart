// profilopgaven
var profilopgave = function (p, id = -1) {
    var profil = "";
    if (id === -1) {
        profil = "alle profiler\n";
        p.forEach(function (element, index) {
          element.forEach(function (item) {
                profil += `${item} `;
            });
            profil += "\n";
        });
    }
    else {
        profil = "\nEn profil\n";
        p[id].forEach(function (element, index) {
            profil += element + ' ';
        });
    }
    return profil
}

var personliste = [["Jens", "Hansen", 1970], ["Tina", "Jensen", 1982]];

console.log(profilopgave(personliste));
console.log(profilopgave(personliste, 1));
