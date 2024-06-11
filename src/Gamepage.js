import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons'; 

function Gamepage({ toggleMode, mode }) {
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
  const [wmsg, setwmsg] = useState("Welcome, Try a Game Bruh \n(You are X)! ");
  const [startGame, setstartGame] = useState(false);

  const handleclick = (index) => {
    if (gamestate[index] === null && winner === null && player === "X") {
      makeMove(index, "X");
      setPlayer("O");
    }
  };

  const makeMove = (index, currentPlayer) => {
    const newGame = [...gamestate];
    newGame[index] = currentPlayer;
    setGamestate(newGame);
    const gameWinner = checkWinner(newGame);
    if (!gameWinner) {
      setwmsg(`It's your turn ${currentPlayer === "X" ? "O" : "X"}!`);
    }
    setWinner(gameWinner);
  };

  useEffect(() => {
    if (player === "O" && !winner) {
      const computerMove = getComputerMove();
      if (computerMove !== null) {
        makeMove(computerMove, "O");
        setPlayer("X");
      }
    }
  }, [player, winner]);

  const getComputerMove = () => {
    const availableMoves = gamestate
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);
    return availableMoves.length > 0
      ? availableMoves[Math.floor(Math.random() * availableMoves.length)]
      : null;
  };

  const checkWinner = (newGame) => {
    for (let i = 0; i < winnerComb.length; i++) {
      const [a, b, c] = winnerComb[i];
      if (
        newGame[a] &&
        newGame[a] === newGame[b] &&
        newGame[a] === newGame[c]
      ) {
        setwmsg("We have a Winner, Hurrahh !!!");
        setstartGame(false);
        return newGame[a];
      }
    }
    if (!newGame.includes(null)) {
      setwmsg(" OOPPPSSSSS!!! It's A Draw Match, Hit Reset Game");
      setstartGame(false);
      return "Draw";
    }
    return null;
  };

  const resetGame = () => {
    setGamestate(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setwmsg("All right lets see who wins, Let's start player X ");
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
              <p >Alright its your turn player''{player}'' Make a Move!</p>
            )}
          </div>

          <div className="buttons">
            <button
              className="btn btn-outline-danger px-4 py-0 "
              onClick={resetGame}
            >
            <FontAwesomeIcon icon={faArrowRotateLeft} />  {winner ? "New Game" : "Reset Game"}
            </button>
            {/* <button
              className="btn btn-outline-danger px-4 py-0 "
              onClick={resetGame}
            >
              {winner ? "Reset Game" : "New Game"}
            </button> */}
          </div>
          
          {winner && (
            <div className="winnerBoard text-danger fs-2 fst-italic fw-7600">
              {winner === "Draw" ? "Draw Match" : "The winner is : " + winner}
            </div>
          )}
        </section>
        <section className="right">
          {!winner && (
            <div className="cube">
              {gamestate.map((bot, index) => (
                <div
                  key={index}
                  className={`bot bot-${
                    index + 1
                  } player-${bot} border border-1 text-center p-0 m-0 fs-1 fw-100 hover-text-success hover-bg-danger`}
                  onClick={() => handleclick(index)}
                >
                  {bot}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Gamepage;
