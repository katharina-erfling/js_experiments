'use strict';

// ── Übung 23: Fetch API – Einfache Datenabfrage ──────────────────────────

console.log('Übung 23: Fetch API – Einfache Datenabfrage');


// async: macht die Funktion asynchron → sie gibt immer ein Promise zurück
// und erlaubt die Verwendung von await darin
async function fetchUsers() {
  try {
    // fetch() startet einen HTTP-GET-Request zur URL
    // await pausiert die Funktion, bis die Antwort des Servers da ist
    // (ohne await würde response sofort ein unerfülltes Promise sein)
    const response = await fetch('https://dummyjson.com/users');

    // response.ok ist true bei HTTP-Statuscodes 200–299
    // fetch wirft bei 404/500 etc. KEINEN automatischen Fehler → manueller Check nötig
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // .json() liest den Response-Body und parst ihn als JSON
    // auch das ist asynchron → nochmal await
    const data = await response.json();

    console.log(data); // gibt das fertige JS-Objekt aus
  } catch (error) {
    // fängt zwei Arten von Fehlern ab:
    // 1. Netzwerkfehler (kein Internet, Server nicht erreichbar)
    // 2. der manuell geworfene Error bei !response.ok
    console.error('Problem with the fetch operation:', error);
  }
}


fetchUsers(); // Funktion aufrufen – startet den Request