'use strict';

// Wandelt ein Brett-Array in einen lesbaren String um (jede Zeile = eine Schachbrettzeile)
const board2string = (board) => board.map(row => row.join('')).join('\n')

// Gibt für jede gespielte Partie den Brettzustand nach diesem Zug zurück
// Beispiel: ['e2e4', 'e7e5'] → [Brett nach e2e4, Brett nach e7e5]
const positionHistoryForMoves = (moves) =>
    moves.map((move, i) => moves.slice(0, i + 1)).map(execMoves);

// Führt eine Liste von Zügen ab der Startposition aus und gibt das Ergebnisbrett zurück
const execMoves = (moves) => moves.reduce(execMove, boardInStartPosition());

// Führt einen einzelnen Zug auf dem Brett aus (z.B. 'e2e4')
const execMove = (board, move) => {
    const originX = fieldToXPosition(originField(move));
    const originY = fieldtoYPosition(originField(move));
    const targetX = fieldToXPosition(targetField(move));
    const targetY = fieldToYPosition(targetField(move));

    board[targetY][targetX] = board[originY][originX];
    board[originY][originX] = emptyBoard()[originY][originX];
    return board;
}

// Schachbrett in der Ausgangsposition mit allen Figuren
const boardInStartPosition = () => [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
];

// Leeres Schachbrett (nur das Karomuster, keine Figuren)
const emptyBoard = () => [
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],
    ['◻', '▦', '◻', '▦', '◻', '▦', '◻', '▦'],
    ['▦', '◻', '▦', '◻', '▦', '◻', '▦', '◻'],    
];

// Extrahiert das Startfeld aus einem Zug-String (z.B. 'e2e4' → 'e2')
const originField = (move) => move.substr(0, 2);
// Extrahiert das Zielfeld aus einem Zug-String (z.B. 'e2e4' → 'e4')
const targetField = (move) => move.substr(2);

// Wandelt einen Buchstaben (a–h) in einen Array-Index (0–7) um 
const fieldToXPosition = (field) => letterToChessIndex(field.charAt(0));

// Wandelt eine Zahl (1–8) in einen Array-Index (0–7) um
const fieldToYPosition = (field) => numberToChessIndex(field.charAt(1));

// 'a' → 0, 'b' → 1, ..., 'h' → 7
const letterToChessIndex = (letter) => 'abcdefgh'.indexOf(letter);

// '8' → 0, '7' → 1, ..., '1' → 7 (Schachbrett ist von oben nach unten gespeichert)
const numberToChessIndex = (num) => 8 - num;

// Testzüge: Königsbauer weiß, Königsbauer schwarz, Königsspringerbauer weiß (Königs-Gambit)
const history = positionHistoryForMoves(['e2e4', 'e7e5', 'f2f4']);
console.log(history);
history.forEach((position) => console.log(board2string(position), '\n'));