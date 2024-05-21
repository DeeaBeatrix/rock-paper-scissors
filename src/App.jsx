import './App.css';
import paper from '../src/assets/paper.png';
import scissors from '../src/assets/scissors.png';
import rock from '../src/assets/rock.png';
import { useState } from 'react';

const App = () => {
  const [playerOneChoice, setPlayerOneChoice] = useState(null);
  const [playerTwoChoice, setPlayerTwoChoice] = useState(null);
  const [winner, setWinner] = useState('');
  const [showWinner, setShowWinner] = useState(false);
  const [showWinnerButton, setShowWinnerButton] = useState(true);

   const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
  };

  const determineWinner = () => {
   
    if (playerOneChoice === playerTwoChoice) {
      setWinner('Tie');
    } 
    else if ((playerOneChoice === 'rock' && playerTwoChoice === 'scissors') || (playerOneChoice === 'paper' && playerTwoChoice === 'rock') || (playerOneChoice === 'scissors' && playerTwoChoice === 'paper'))
      {setWinner('Player One wins');}
    else {
    setWinner('Player Two wins');
    };
    setShowWinner(true);
    setShowWinnerButton(false);
    setPlayerOneChoice(null);
    setPlayerTwoChoice(null);
  };

  const handlePlayerOneChoice = (choice) => {
    setPlayerOneChoice(choice);
    setShowWinner(false);
    setShowWinnerButton(true);
  };

  const handlePlayerTwoChoice = (choice) => {
    setPlayerTwoChoice(choice);
    setShowWinner(false);
    setShowWinnerButton(true);
  }

  return (
    <section>
      <div className='game-container'>
        <div className='player-one'>
          <p className='player-one-text'>PLAYER ONE</p>
          <div className='images-container'>
            <img className={`images ${playerOneChoice === choices.rock ? 'selected' : ''}`} 
            onClick={() => handlePlayerOneChoice(choices.rock)} src={rock} />
            <img className={`images ${playerOneChoice === choices.paper ? 'selected' : ''}`} 
            onClick={() => handlePlayerOneChoice(choices.paper)} src={paper} />
            <img className={`images ${playerOneChoice === choices.scissors ? 'selected' : ''}`} 
            onClick={() => handlePlayerOneChoice(choices.scissors)} src={scissors} />
          </div>
        </div>

        <div className='winner-container'>
          {showWinnerButton && (
          <button onClick={determineWinner} className='button-winner'> WINNER </button> )}
          <p style={{display: showWinner ? 'block' : 'none'}} className='winner-text'>{winner}</p>
        </div>

        <div className='player-two'>
          <p className='player-two-text'>PLAYER TWO</p>
          <div className='images-container'>
            <img className={`images ${playerTwoChoice === choices.rock ? 'selected' : ''}`} 
            onClick={() => handlePlayerTwoChoice(choices.rock)} src={rock} />
            <img className={`images ${playerTwoChoice === choices.paper ? 'selected' : ''}`} 
            onClick={() => handlePlayerTwoChoice(choices.paper)} src={paper}  />
            <img className={`images ${playerTwoChoice === choices.scissors ? 'selected' : ''}`} 
            onClick={() => handlePlayerTwoChoice(choices.scissors)} src={scissors} />
          </div>
        </div>

      </div>

    </section>
  );
};

export default App
