Ukeoppgave JavaScript 2
Oppgave
Det skal lages et personregister hvor det legges inn personer i et array i JavaScript. Disse personene skal opprettes i scriptet, legges inn i arrayet og så listes ut i en HTML-tabell via en <div> i <body>. Dette skal gjøres når en knapp trykkes.

Personobjektene som skal legges inn er JavaScript-objekter som skal inneholde følgende nøkkel/verdi-par: Navn, adresse og telefonnummer.

Innholdet i <body> skal se slik ut:

<body>
    <button onclick="visPersonRegister()"></button>
    <div id="personRegister"></div>
</body>
Resultatet etter at knappen er trykket skal se slik ut:

dfas

Tips: Formater en ut-variabel for å lage HTML-tabellen. Denne kan starte slik før en løkke går igjennom arrayet og legger til én og én person:

let ut = "<table><tr>" +
"<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
"</tr>";

Ekstraoppgaver
Legg til flere personer i personregisteret.
Sortér personregisteret basert på navn og skriv ut både det usortert og det sortert registeret.
La annenhver linje stå med fet skrift (bruk for eksempel <strong></strong>).
Legg til en kolonne med fødselsnummer (11 siffer).
Merk enten kvinner eller menn med fet skrift eller lignende. (Tips: Se på et av sifrene i fødselsnummeret.)