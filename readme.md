# Esercizio:
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## STEPS
- Step 1: Creare due tag input e un bottone in html
- Step 2: Dichiarare le variabili in js = input/bottone
- Step 3: Assegnare una variabile a:
    - prezzo/km
    - prezzo pieno (prezzo/km * km)
    - sconti minor e senior
- Step 4: Calcolo prezzo biglietto: prezzo pieno - (prezzo pieno * sconto)
    - SE età < 18:
        - Applicare sconto del 20%
    - SE età > 65:
        - Applicare sconto del 40%
    - ALTRIMENTI (per 18 < età > 65):
        - Applicare prezzo pieno
- Step 5: Stampare il prezzo finale in console
    - limitare il risultato a due cifre decimali
- Step 6: Completare il form
- Step 7: Stampare il biglietto in pagina con i dati inseriti dall'utente e il prezzo finale del biglietto 


## Tools
- Const/let
- getElementByID/querySelector
- addEventListener
- If/else if/else
- toFixed()
- Console.log
- value
- innerHTML