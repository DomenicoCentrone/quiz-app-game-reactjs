# Quiz React Game 📚

[DEMO](https://magenta-lamington-0e8dad.netlify.app/)

Uno quiz game realizzato con React. Questa app propone domande suddivise per difficoltà e consente agli utenti di selezionare la difficoltà che preferiscono. Ogni domanda ha quattro opzioni di risposta, con una sola risposta corretta.

## Installazione

1. Clona questo repository.
2. Naviga alla directory del progetto.
3. Esegui `npm install` per installare tutte le dipendenze.
4. Esegui `npm start` per avviare l'app.

## Struttura

- **App.js**: File principale che contiene la logica per selezionare la difficoltà e mostrare le domande.
- **Quiz.js**: Componente che visualizza le domande e le risposte.
- **App.css**: Stili globali per l'app.

## Funzionalità

1. **Selezione Difficoltà**: L'utente può scegliere tra tre livelli di difficoltà: facile, medio e difficile.
2. **Visualizzazione Domande**: Una volta selezionata la difficoltà, vengono mostrate le domande relative a quel livello.
3. **Riavvio Gioco**: L'utente ha la possibilità di riavviare il gioco in qualsiasi momento.

## Codice

Il codice principale si trova nel file `App.js`. Qui abbiamo un array `questions` che contiene tutte le domande del quiz. Le domande sono suddivise per difficoltà e contengono sia il testo della domanda che le opzioni di risposta.

La funzione `App` è il componente principale dell'applicazione. Utilizza lo stato `selectedDifficulty` per tenere traccia della difficoltà selezionata dall'utente. Se una difficoltà non è stata ancora selezionata, vengono mostrati i pulsanti di selezione. Una volta scelta una difficoltà, vengono visualizzate le domande corrispondenti e un pulsante per riavviare il gioco.

## Contribuire

Se desideri contribuire al progetto, sentiti libero di inviare una Pull Request!

---

È importante notare che alcuni dei caratteri nel tuo codice sembrano corrotti o non correttamente visualizzati (come `Qual Ã¨`). Potresti voler controllare il codice sorgente e assicurarti che tutti i caratteri siano visualizzati correttamente.
