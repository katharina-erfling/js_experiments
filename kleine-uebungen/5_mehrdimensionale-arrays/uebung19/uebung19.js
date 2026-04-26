'use strict';

// ── Übung 19: Bildbearbeitung – Helligkeit erhöhen ──────────────────────────

console.log('Übung 19: Bildbearbeitung – Helligkeit erhöhen');

// Bilddaten als 3D-Array: [Zeilen][Pixel][RGB-Werte]
const image = [
    [ // Zeile 1
        [100, 150, 200],  // Pixel 1
        [50, 100, 150],   // Pixel 2
    ],
    [ // Zeile 2
        [25, 75, 125],    // Pixel 3
        [200, 225, 250],  // Pixel 4
    ],
];

// Erhöht die Helligkeit jedes Pixels um den angegebenen Wert
const increaseBrightness = (image, value) => {
    // Jede Zeile des Bildes durchlaufen
    return image.map(row => 
        // Jeden Pixel in der Zeile durchlaufen
        row.map(pixel => 
            // Jeden RGB-Wert um 'value' erhöhen, Maximum ist 255
            pixel.map(component => Math.min(component + value, 255))
        )
    );
};

const newImage = increaseBrightness(image, 30);
console.log(newImage);
/* 
Erwartetes Ergebnis:
 [
     [
         [130, 180, 230],
         [80, 130, 180],
     ],
     [
         [55, 105, 155],
         [230, 255, 255],
     ],
 ]
*/