# groep react slack

Stijn
Yesterday at 3:16 PM
Een goedemiddag. Ik ben bezig met de dentist exercise. Ik snap een aantal dingen aan deze functie niet in utils.js:
const generateRandomAppointments = num =>
Array(num)
.fill(0)
.map(\_ => generateRandomAppointment());

export default generateRandomAppointments;
1 Voor mij is het nieuw om in een fuctie: Array te gebruiken. Verwijst deze naar de array names met de objects erin?
2 Wat houd .fill precies in?
3 .map(_ Wat houd de _ hier in?
4 => generateRandomAppointment()) Wat gebeurd hier precies? Het lijkt wel of de functie generateRandomAppointments de functie generateRandomAppointments aanroept. Dit kan normaal toch niet?
5 export default generateRandomAppointments Word hiermee meteen ook de array names geexporteerd? En hoe zit dat met de formules die erboven staan?
Ik hoor het graag, bedankt alvast!
4 replies

Stijn
19 hours ago
vraag 4 is opgelost. Ik las over de s heen. Zie nu dat erboven een aparte functie staat zonder s.

Jip Sterk
:winc-round: 2 hours ago
Goedemorgen Stijn ik hoop dat de volgende punten je vragen beantwoorden
je bent gewent om arrays te declareren met: [] maar het heeft ook een class equivalent namelijk Array. deze gebruik je eigenlijk nooit behalve als je een array wilt instancieeren met een bepaalde lengte. hier de documentatie
Array.fill geeft alle elementen een waarde in dit geval is dit het getal 0
de \_ discard de parameter van map deze heeft namelijk meerdere parameters

- als je functionaliteit/variabele in andere bestanden wilt gebruiken dan het bestand waar ze gedeclareerd zijn moet je het keyword export gebruiken. hier kun je meer lezen over (default) exports
  developer.mozilla.orgdeveloper.mozilla.org
  Array() constructor - JavaScript | MDN
  The Array() constructor is used to create Array objects. (24 kB)
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

developer.mozilla.orgdeveloper.mozilla.org
Array.prototype.fill() - JavaScript | MDN
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
It returns the modified array. (24 kB)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

developer.mozilla.orgdeveloper.mozilla.org
export - JavaScript | MDN
The export declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the import declaration or dynamic import. The value of an imported binding is subject to change in the module that exports it — when a module updates the value of a binding that it exports, the update will be visible in its imported value.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export#description

Stijn
2 hours ago
Helemaal top Jip, bedankt! Over punt 5: Ik heb de export natuurlijk al vaak gebruikt. Vaak was dit voor een component. Wat ik hier niet helemaal snap is dat er in utils.js eerst een groot object staat. Nu exporteer je alleen de functie die gebruik maakt van het object of niet? Dus het object zelf wordt niet geexporteerd..? En als je dan deze functie oproept met een getal zoals in App.js: generateRandomAppointments(70), komt er een array met 70 afspraken met namen etc. toch? Wat is dan wijsheid met State.. Kan ik UseState dan het beste gebruiken in de App.js, en gebruik maken van die array?

Jip Sterk
:winc-round: 2 hours ago
De variabele names word zelf niet geëxporteerd maar wel een functie die hier gebruik van maakt (generateRandomAppointments) wel. dus daar heb je gelijk! ook maakt hij een x aantal afspraken aan die je opgeeft bij de functie. volgens mij hoef je dit niet in state te plaatsen aangezien je de data later niet aanpast.

## deel 2 persoonlijk chat:

Stijn
11:13 AM
Hoi Jip, heel toevallig tijd om even te kijken naar een opdracht vegetable garden? Hij staat al op Github. Geen doen om in vragenbak te gooien, dan zou ik de hele assignment veraden.

11:13
Hij is eigenlijk al af, maar er zit een schoonheidsfoutje in waar ik al 2 dagen mee bezig ben. Ik kom er gewoon echt niet uit om dat op te lossen.

Jip Sterk
:winc-round: 11:20 AM
zeker! heb je een linkje

Stijn
11:21 AM
https://github.com/Stijn-IT/4_assignment_tdd_vegetable_garden

Stijn-IT/4_assignment_tdd_vegetable_garden
Language
JavaScript
Last updated
12 minutes ago
Added by GitHub
11:21
Het probleem zit bij de console log van de laatste functie: getProfitForCrop.
11:22
Hij roept daar 2 x volledig de console log van de eerste functie: getYielForPlant op.
11:25
Ik wil bij getProfitForCrop dus eigenlijk alleen de uitkomst van de functie getYieldForPlant gebruiken! Dus stel de uitkomst van getYieldForPlant is 2,8 kilo... dan wil ik alleen die 2,8 kilo gebruiken, en niet de complete functie get YieldForplant inclusief de console log oproepen. Ziet er slordig uit. Ik roep hem bij getProfitForCrop op bij forEach en .map.. maar wil eigenlijk alleen die waarde van 2,8 gebruiken.
11:28
Dit gaat allemaal over het farm.js bestand

Jip Sterk
:winc-round: 11:31 AM
check! kijken of dit mogelijk is

Jip Sterk
:winc-round: 11:38 AM
Goed nieuws! je kunt beide “mergen” tot 1 functie call. als je op regel 159 forEach in een map veranderd en dan regels 182 tot en met 185 verwijderd. dan heb je zowel de log als de berekening!

Stijn
11:43 AM
HET IS GELUKT!!!!!!!!
:raised_hands::skin-tone-2:
1

11:44
My god, was 10 uur aan het zoeken (gelukkig ondertussen veel van geleerd haha).
11:45
Moest alleen nog even van de .map een constant maken met naam arrayTotalProfit
11:45
Ziet het er verder netjes uit?
11:45
Dan ga ik hem mooi inleveren

Stijn
11:46 AM
Is het niet erg om meerdere expects in 1 test te hebben?

2 replies
Last reply 2 months agoView thread

Stijn
12:27 PM
Ga hem inleveren. Super bedankt Jip.
:raised_hands::skin-tone-2:
1

12:27
:heart:

Stijn
3:52 PM
Hoi Jip, ik had een vraag gesteld in de React vragenbak.

Stijn
11:59 AM
Jip toch even hier.. ik dacht dat state juist heel belangrijk was in deze opdracht
12:00
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Calendar from "./Calendar";
import Day from "./Day";
import Home from "./Home";

import generateRandomAppointments from "./utils";

const appointments = generateRandomAppointments(70);

console.log("HALLLOOO:", appointments)

const App = () => {
const [inputTitle, setTitle] = useState("");

useEffect(() => {
console.log("Ik ben Useffect")
}, [inputTitle]);

function onButtonPress() {
setTitle(appointments.map(x => x.patient))
console.log("INPUTTITLE", inputTitle)
}

return (

    <Router>
      <div>
      <button onClick={onButtonPress}> Array button </button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>

12:00
Ik had App.js nu aangepast. En heb een test button gemaakt. Maar is het niet handig die Array in app.js in state te zetten.. en vanuit daar aan te passen?
12:01
Ik heb bij deze opdracht echt moeite met... Hoe ga ik het opzetten.
12:02
Want je moet ook afspraken kunnen verwijderen.. is dat niet handig als dit in state gebeurd?

Jip Sterk
:winc-round: 12:03 PM
ik ga nog even de opdracht goed doorlezen! misschien is het makkelijker als je het linkje van je github deelt ipv snippets

Stijn
12:03 PM
Ja gezien het een exercise is staat het niet op Git.
12:04
En ik heb nog weinig aangepast, gedaan.. dit is tot nu toe mijn enige aanpassing omdat ik niet weet hoe te beginnen.
12:08
Het enige wat ik gedaan heb is in App.js useState en useEffecte geimporteerd, een onButtonPress functie gemaakt om te testen, en die button toegevoegd. Maar weet dus überhaupt niet eens of het slim is vanuit App met useState te werken.

Jip Sterk
:winc-round: 12:16 PM
als ik de opdracht goed begrijp heb je nu al veel mockdata naam, achternaam, etc… nu zijn er extra velden die op deze objecten moeten komen zoals een 06 nummer en email. deze hoeven niet echt te zijn het is immers mockdata. ook is er onderscheid tussen patienten, tandartsen en assistenten die ieder een eigen stukje extra data nodig hebben. dit kun je allemaal toevoegen in het utils.js bestand met eigen geschreven functies. daarna wil je deze ook weergeven in je components dus zul je deze data daar moeten renderen. maar verder is er geen input van gebruikers

Stijn
12:19 PM
Ahh... en als ik iets in state wil verwerken... met useState.. wat is dan de handigste locatie?
12:19
utils.js of App.js

Jip Sterk
:winc-round: 12:21 PM
waar zou je state voor willen gebruiken?

Stijn
12:24 PM
Als je een afspraak wil verwijderen... en de functies die een willekeurig telefoonnummer / emailadres maken in Utils.js.. dat deze in de Array/state toegevoegd worden... telefoonnummer: .... email: ....
12:26
Beetje zelfde structuur als Songsaver zoals deze functie:
12:26
addSong = (title, artist, genre, rating) => {
this.setState({
songs: [
...this.state.songs,
{
id: this.state.songs.length +
1,
title: title,
artist: artist,
genre: genre,
rating: rating,
},
],
12:26
Alleen dan met UseState.. dat je zeg maar een teloonnr toevoegd aan state.. en email toevoegd aan state.. gezien deze niet in het Object staan... of is dit krom gedacht?
12:30
Ik dacht te lezen dat State juist erg belangrijk was in deze oefening. Vind het sowieso fijn daar mee te oefenen.. gezien het zo belangrijk is. Heb nog weinig gedaan met useState.. deed alles voorheen met setState
12:31
Volgens mij is het met een toekomstige baan erg handig als je goed bent met Hooks
12:34
Maar vind het sowieso beetje vage opdracht.. Eerst een heel verhaal over API voor mockup data.. dus dacht dat je moest Fetchen.. en vervolgens is in de geclonede map, zoals jij ook zegt 3 kwart al gegenereerd door die functie die er al staat: namen etc.
12:36
Maar dit is een citaat uit de opdracht: "You will get function calls but the implementation of the function still has to be built. The implementation will depend on how you deal with the state in the app." Dus ze gaan er wel vanuit dat je state gebruikt.

Stijn
1:55 PM
Je bent echt "weer" mijn held als je een paar tips kan geven. Dan kan ik het hopelijk dit weekend afronden en aan de eindopdracht beginnen!

Jip Sterk
:winc-round: 2:01 PM
state is hier misschien niet de juiste benaming aangezien er geen input gegeven hoeft te worden binnen de website. en er ook geen fetch/toevoegingen op de data gedaan hoeft te worden. ik weet niet zo goed welke opdrachten hooks vereisen en of state.
2:03
je hebt de functie generatePerson die geeft wat basisgegevens. omdat je dus 3 type personen hebt wil je misschien voor ieder een eigen functie schrijven die dan weer generatePerson voor de basis gegevens. die dus eigenschappen toevoegen voor die specifieke rol de emails bijvoorbeeld. het ziek zetten van personen kun je doen met bijvoorbeeld een Math.random

Stijn
2:09 PM
Dat zijn iig al hele fijne tips Jip!
2:11
Alleen als ik toch met State zou willen werken.. dus alle afspraken in state.. deze renderen.. En als er een afspraak verwijderd wordt.. deze uit state halen.. blijft voor mij een raadsel in welke file ik het beste state kan opbouwen met Usestate
2:11
En als ik bijvoorbeeld de email... die nu geen onderdeel van object is.. dan in die state zou willen toevoegen.
2:13
Het leek me ook leuk om in Home... met een tekstveld een afspraak BIJ een van die 70 afspraken te kunnen zetten... dan is State toch ook handig?
2:15
Als je de array wil manipuleren.. dus een afspraak verwijderen.. een afspraak toevoegen.. Of een naam wijzigen.. dan zou state toch juist ideaal zijn?
2:15
Ik zie het misschien gewoon helemaal verkeerd.

Jip Sterk
:winc-round: 2:27 PM
nee je hebt gelijk in die situatie is het handig om dit bij te houden in state en deze te updaten wanneer een input veld aangepast word en dus een email een nieuwe waarde krijgt.

Stijn
2:29 PM
Super! Dus waar kan ik heb best state bewaren als ik useState wil gebruiken. Utitls.js. App.js.. of ergens anders?
2:30
Dus als ik de Array wil opslaan in state.. om te kunnen bewerken. Normaal deed je dit in App.js in class based component. Maar gezien ik hooks wil oefenen.. En Usestate wil gebruiken vroeg ik me dus af wat dan wijsheid is
2:31
Nu dacht ik het dus hier in state te doen... maar vraag me af wat jij adviseert :grinning:
2:32
Met hier in state bedoelde ik deze: import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Calendar";
import Day from "./Day";
import Home from "./Home";
import generateRandomAppointments from "./utils";
const appointments = generateRandomAppointments(70);
console.log("HALLLOOO:", appointments)
const App = () => {
const [inputTitle, setTitle] = useState("");
useEffect(() => {
console.log("Ik ben Useffect")
}, [inputTitle]);
function onButtonPress() {
setTitle(appointments.map(x => x.patient))
console.log("INPUTTITLE", inputTitle)
}
return (
<Router>

<div>
<button onClick={onButtonPress}> Array button </button>
<nav>
<ul>
<li>
<Link to="/">Home</Link>

Jip Sterk
:winc-round: 2:46 PM
op de docs website van react vind je veel uitgebreide documentatie ook het voorbeeld in een class component en een soort gelijk function component. source. als je de opdracht met state wil gebruiken zou ik het volgende doen:
const App = () => {
const [appointments, setAppointments] = useState(generateRandomAppointments(70)); // hierna kun je appointments meegeven aan child components
return (...jsx code)
}
reactjs.orgreactjs.org
Using the State Hook – React
A JavaScript library for building user interfaces (11 kB)
https://reactjs.org/docs/hooks-state.html

Stijn
2:51 PM
GEWELDIG!!
2:51
const [appointments, setAppointments] = useState(generateRandomAppointments(70))
2:51
Dat zocht ik!
2:52
En met return jsx code bedoel je gewoon de code die er nu al staat... met Router enzo=
2:52
?
2:52
Mega bedankt iig!!
New

Jip Sterk
:winc-round: 2:55 PM
yes! geen probleem :) het heet JSX wanneer je html code (div, p, etc…) in javascript gebruikt. hier meer info

Stijn
2:55 PM
Ja precies dat dacht ik al
2:55
En dit.. hierna kun je appointments meegeven aan child components
2:55
<Route
path="/day"
element={
<Day appointments={appointments.filter((app) => app.day === 1)} />
}
/>
2:55
Doe je dat in een Element?
2:56
Het meegeven van de appointments
2:56
Of zo:
<Route
path="/calendar"
element={<Calendar appointments={appointments} />}
/>
2:57
Dan ben je van me af haha

Jip Sterk
:winc-round: 2:59 PM
bij het Day component wil je enkel de afspraken die voor diezelfde dag zijn. en bij Calendar alle afspraken. maar bij beide is het een prop voor het component

Stijn
3:01 PM
Precies. En stel je wil uit kalender iets verwijderen.. wijzig je dan de state in App.js of in Calendar.js?

Jip Sterk
:winc-round: 3:02 PM
ik zou in dat geval een callback functie meegeven aan het component die setAppointments aanroept met bijvoorbeeld het element wat je zou willen verwijderen. die kun je er uit filteren met Array.filter

Stijn
3:02 PM
Nu moet ik er wel uit gaan komen denk ik. Je bent van me af! hahah. Super fijn weekend Jip!!
