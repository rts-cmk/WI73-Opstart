# Github

Til at starte med fokuseres der på meget grundlæggende principper som:
* Organisationer
* Repository
* Clone to desktop
* Commit
* Sync
* Markdown

Med de værktøjer kan vi komme rigtig langt her i starten af uddannelsen.

## Tilmeldelse til organisationen.

På Github arbejder man i organisationer. En organisation er et sted på github.
f.eks. er rts-cmk en organisation: http://github.com/rts-cmk

Vi har valgt at dele 73'er årgangen op i 3 organisationer, en for hvert hold.

* https://github.com/wi73a-praktisk-web
* https://github.com/wi73b-praktisk-web
* https://github.com/wi73c-praktisk-web

Det er her de første 2 ugers opgaver, og alle praktisk web opgaver igennem resten af uddannelsen, skal oprettes som repositories. 
I løbet af uddannelsen vil der også være enkelte fag, hvor der bliver oprettet en ny orgnisation, specifikt til de opgaver det fag omhandler. 

I skal tilmeldes den organisation der er oprettet til jeres hold. Vi sender en invitation på jeres rts-365.dk email.
Vi har en regel på WI-HF, at man skal oprettes med sit rigtige navn. dvs du opretter din konto med dit **fornavn+efternavn** (f.eks. er mit: JackBaltzer).

Ligeledes har vi en regel for navngivning af repositories.
navnet skal være **projektet/opgavens navn + dit eget navn** (f.eks. hej-verden-jack-baltzer), hvis dit navn indeholder tegn ud over a-z, så benyt det der kommer tættest på (f.eks. *ae* for *æ*).


*Vi forbeholder os retten til at slette brugere og repo's der ikke opfylder de krav.*

## Github Desktop
Hent og installer [Github Desktop](https://desktop.github.com/)
Det program benyttes til at holde styr på dine lokale repo's


## Første opgave.
Nu hvor du er tilmeldt den korrekte organisation, skal du prøve at oprette et repository under den organisation.

Inde på Githubs side, i den wi73 praktisk web organisation der hører til dit hold, skal du klikke på **new Repository** knappen og oprette et nyt repo med navnet **igang-med-github** (husk at tilføje dit navn til sidst).

Under oprettelsen sætter du flueben i **Initialize this repository with a README** samt vælger **Node** under **Add .gitignore** 

TIlsidst, klik på **Create Repository**


Når repo er oprettet, klikkes på **Clone or download** hvor der vælges **open in desktop**.
Sørg for at placere klonen et sted der giver mening.



Åben Visual Studio Code, og åben den nye mappe der indeholder dit repo.


Tilføj en ny fil, kald den **app.js**


tilføj denne console.log linje i toppen af den nye fil:
```javascript
console.log('Hej verden!');
```

her kan man selvfølgelig lige prøve at åbne konsollen i VScode, og skrive **node app** og se om den skriver **Hej verden!**

## Commit og Sync
Vælg **source control** i visual studio code, og skriv en besked, f.eks. **Første commit!** og vælg **Commit All** fra menuen der gemmer sig under de tre ... 


Gå tilbage til browseren, og opdater siden emd dit repo. (der burde ikke være nogle ændringer endnu).

Commit All synkroniserer ikke med github, til det skal vi tilbage i Visual Studio Code, og vælge **Sync** fra samme menu hvor **Commit All** lå.

Så kan du prøve at opdatere github siden igen, og se at nu ligger der en app.js.


## Markdown
En af de arbejdsopgaver du kommer til at bruge meget tid på, er at dokumentere og beskrive dine koder. 
Du skal i **readme.md** filen lave din egen beskrivelse af hvordan du opretter et repository under wi73-github organisationen, så det opfylder de regler vi har været igennem.

Du vælger selv om du vil sidde i Visual Studio Code, eller om du gør det via browseren på github.com 

Du skal benytte **headers**, **emphasis**, **lists**, **links** samt **falvored markdown** (syntaks highlight) 
Til syntakshightlight, der beskriver du kort, hvad console.log koden gør :+1: . 

Husk at Commit (og Sync hvis du sidder i Visual Studio Code), så din readme.md bliver opdateret.

Her er en online beskrivelse af [Github Markdown](https://guides.github.com/features/mastering-markdown/)
