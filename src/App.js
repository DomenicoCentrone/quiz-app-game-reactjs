import React from 'react';
import Quiz from './Quiz';
import "./App.css";

const questions = [
  {
      difficulty: 'facile',
      question: 'Qual è la capitale dell Italia?',
      options: [
          { text: 'Roma 🏛', isCorrect: true },
          { text: 'Milano 🏙', isCorrect: false },
          { text: 'Napoli 🌋', isCorrect: false },
          { text: 'Torino 🚗', isCorrect: false }
      ]
  },
  {
      difficulty: 'facile',
      question: 'Qual è la moneta ufficiale dell Italia?',
      options: [
          { text: 'Dollaro 💵', isCorrect: false },
          { text: 'Sterlina 💷', isCorrect: false },
          { text: 'Euro 💶', isCorrect: true },
          { text: 'Lira 🪙', isCorrect: false }
      ]
  },
  {
    difficulty: 'facile',
    question: 'Quale isola è la più grande d’Italia?',
    options: [
        { text: 'Ischia 🌊', isCorrect: false },
        { text: 'Elba ⛰', isCorrect: false },
        { text: 'Sardegna 🏝', isCorrect: true },
        { text: 'Sicilia 🍊', isCorrect: false }
    ]
  },
  {
      difficulty: 'facile',
      question: 'Quale pasta ha la forma di piccoli grani di riso?',
      options: [
          { text: 'Penne 🍝', isCorrect: false },
          { text: 'Rigatoni 🍜', isCorrect: false },
          { text: 'Orzo 🌾', isCorrect: true },
          { text: 'Fusilli 🌀', isCorrect: false }
      ]
  },
  {
      difficulty: 'medio',
      question: 'Quale regione è conosciuta come "il tallone dello stivale" dell\'Italia?',
      options: [
          { text: 'Calabria 🌶', isCorrect: false },
          { text: 'Sicilia 🍊', isCorrect: false },
          { text: 'Puglia 🏖', isCorrect: true },
          { text: 'Liguria 🌊', isCorrect: false }
      ]
  },
  {
      difficulty: 'medio',
      question: 'Chi è l autore della Divina Commedia?',
      options: [
          { text: 'Leonardo da Vinci 🎨', isCorrect: false },
          { text: 'Dante Alighieri 📖', isCorrect: true },
          { text: 'Petrarca 📜', isCorrect: false },
          { text: 'Boccaccio 📚', isCorrect: false }
      ]
  },
  {
      difficulty: 'medio',
      question: 'In quale città si trova il Colosseo?',
      options: [
          { text: 'Venezia 🛶', isCorrect: false },
          { text: 'Firenze 🖼', isCorrect: false },
          { text: 'Roma 🏛', isCorrect: true },
          { text: 'Milano 🏙', isCorrect: false }
      ]
  },
  {
    difficulty: 'medio',
    question: 'Quale compositore italiano è famoso per le Quattro Stagioni?',
    options: [
        { text: 'Ludwig van Beethoven 🎵', isCorrect: false },
        { text: 'Johann Sebastian Bach 🎼', isCorrect: false },
        { text: 'Wolfgang Amadeus Mozart 🎶', isCorrect: false },
        { text: 'Antonio Vivaldi 🎻', isCorrect: true }
    ]
  },
  {
      difficulty: 'medio',
      question: 'Qual è la montagna più alta d’Italia?',
      options: [
          { text: 'Gran Paradiso 🏔', isCorrect: false },
          { text: 'Monte Rosa 🌹', isCorrect: true },
          { text: 'Monte Cervino 🗻', isCorrect: false },
          { text: 'Monte Bianco ⛄', isCorrect: false }
      ]
  },
  {
      difficulty: 'difficile',
      question: 'Quale fiume attraversa Firenze?',
      options: [
          { text: 'Tevere 🏞', isCorrect: false },
          { text: 'Arno 🌅', isCorrect: true },
          { text: 'Po 🚤', isCorrect: false },
          { text: 'Adige ⛵', isCorrect: false }
      ]
  },
  {
      difficulty: 'difficile',
      question: 'Dove si trova la Torre Pendente?',
      options: [
          { text: 'Venezia 🛶', isCorrect: false },
          { text: 'Pisa 🗼', isCorrect: true },
          { text: 'Torino 🚗', isCorrect: false },
          { text: 'Napoli 🌋', isCorrect: false }
      ]
  },
  {
      difficulty: 'difficile',
      question: 'Chi ha dipinto la Cappella Sistina?',
      options: [
          { text: 'Raffaello 🎨', isCorrect: false },
          { text: 'Michelangelo 🖌', isCorrect: true },
          { text: 'Botticelli 🖼', isCorrect: false },
          { text: 'Caravaggio 🕯', isCorrect: false }
      ]
  },
  {
    difficulty: 'difficile',
    question: 'Quale storico italiano ha scritto "Storia d’Italia" nel Rinascimento?',
    options: [
        { text: 'Niccolò Machiavelli 📜', isCorrect: true },
        { text: 'Francesco Guicciardini 📖', isCorrect: false },
        { text: 'Leonardo Bruni 📚', isCorrect: false },
        { text: 'Giovanni Villani 🗞', isCorrect: false }
    ]
  },
  {
      difficulty: 'difficile',
      question: 'Chi era il re d’Italia durante la Seconda Guerra Mondiale?',
      options: [
          { text: 'Vittorio Emanuele III 👑', isCorrect: true },
          { text: 'Umberto II 🎩', isCorrect: false },
          { text: 'Vittorio Emanuele II 🏰', isCorrect: false },
          { text: 'Carlo Alberto 🕌', isCorrect: false }
      ]
  }
];



function App() {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(null);
  const filteredQuestions = questions.filter(q => q.difficulty === selectedDifficulty);

  const restartGame = () => {
    setSelectedDifficulty(null); // Reset the selected difficulty to start the game over
  };

  return (
      <div className="App">
        <h1>Quiz React Game</h1>
          {!selectedDifficulty && ( // mostra i pulsanti solo se non è stata selezionata una difficoltà
              <div className="difficulty-buttons">
                  <button className="facile" onClick={() => setSelectedDifficulty('facile')}>Facile</button>
                  <button className="medio" onClick={() => setSelectedDifficulty('medio')}>Medio</button>
                  <button className="difficile" onClick={() => setSelectedDifficulty('difficile')}>Difficile</button>
              </div>
          )}
          {selectedDifficulty && <Quiz questions={filteredQuestions} />}
          {selectedDifficulty && ( // Show the restart button only if a difficulty has been selected
              <div className="restart-game-button">
                  <button onClick={restartGame}>Riavvia gioco 🔁</button>
              </div>
          )}
      </div>
  );
}

export default App;

