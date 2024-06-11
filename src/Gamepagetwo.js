import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';
function Gamepagetwo({toggleMode , mode}) {
    const winnerComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    const [gamestate, setGamestate] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [wmsg, setwmsg] = useState("Welcome, Try a Game Bruh  !");
    const [startGame, setstartGame] = useState(false);
  
    const handleclick = (index) => {
      setwmsg("All right lets see who wins !!");
      setstartGame(true);
      if (gamestate[index] === null && winner === null) {
        const newGame = [...gamestate];
        newGame[index] = player;
        setGamestate(newGame);
        checkWinner(newGame);
        setPlayer(player === "X" ? "O" : "X");
      }
    };
  
    const checkWinner = (newGame) => {
      for (let i = 0; i < winnerComb.length; i++) {
        const [a, b, c] = winnerComb[i];
        if (
          newGame[a] &&
          newGame[a] === newGame[b] &&
          newGame[a] === newGame[c]
        ) {
          setWinner(newGame[a]);
          setwmsg("We have a Winner, Hurrahh !!!");
          setstartGame(false);
          return;
        }
      }
      if (!newGame.includes(null)) {
        setWinner("Draw");
        setwmsg(" OOPPPSSSSS!!! It's A Draw Match, Hit Reset Game" );
        setstartGame(false);
      }
    };
  
    const resetGame = () => {
      setGamestate(Array(9).fill(null));
      setPlayer("X");
      setWinner(null);
              setwmsg("All right lets see who wins !!");
          setstartGame(false);
    };
  
    return (
      <>
        <div className="area d-sm-flex flex-row flex-wrap w-100 p-0 mx-0  justify-content-center align-items-center">
          <section className="left">
            <div className="greet text-danger fs-2 fst-italic fw-400">
              {wmsg}
              <br />
              {!winner && startGame && (
                <p>Its your turn player ''{player}'' Make a Move !</p>
              )}
            </div>
  
            <div className="buttons">
              {winner && (
                <button
                  className="btn btn-outline-danger px-4 py-0 "
                  onClick={resetGame}
                >
                  <FontAwesomeIcon icon={faArrowRotateLeft} />   New Game
                </button>
              )}
              {!winner && (
                <button
                  className="btn btn-outline-danger px-4 py-0 "
                  onClick={resetGame}
                >
                 <FontAwesomeIcon icon={faArrowRotateLeft} />    Reset Game
                </button>
              )}
            </div>
            {winner && (
              <div className="winnerBoard  text-danger fs-2 fst-italic fw-7600 ">
                { winner === 'Draw' ? 'Draw Match ' : 'The winner is : ' + winner }
              </div>
            )}
          </section>
          <section className="right">
            {!winner && (
              <div className="cube">
                {gamestate.map((bot, index) => (
                  <div
                    key={index}
                    className={` bot bot-${
                      index + 1
                    } player-${bot} border border-1 text-center p-0 m-0 fs-1 fw-100 hover-text-sucess hover-bg-danger`}
                    onClick={() => handleclick(index)}
                  >
                    {bot}
                  </div>
                ))}
              </div>
            )
          }
          </section>
        </div>
      </>
    );
  }
  
  export default Gamepagetwo;


