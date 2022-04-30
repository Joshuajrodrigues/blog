import React, { useState } from "react";
import { Button, Col, Row, Select } from "antd";

const App = () => {
  const [totalPlayers, setTotalPlayers] = useState(2);
  const [cards, setCards] = useState(52);
  const [isPlaying, setIsPlaying] = useState(false);

  const distributeCards = () => {
    setIsPlaying(true);
    let cardLeft = cards - totalPlayers * 5;
    setCards(cardLeft);
  };

  const endGame = () => {
    setIsPlaying(false);
    setCards(52);
    setTotalPlayers(2);
  };

  return (
    <div className="board-container">
      {!isPlaying ? (
        <>
          <Select
            value={totalPlayers}
            defaultValue={2}
            onChange={(num) => setTotalPlayers(num)}
          >
            <Select.Option value={2}>2</Select.Option>
            <Select.Option value={3}>3</Select.Option>
            <Select.Option value={4}>4</Select.Option>
          </Select>
          <Button onClick={() => distributeCards()}>
            Start a Game of {totalPlayers} Players
          </Button>
        </>
      ) : (
        <div className="arena">
          <Row gutter={12}>
            <Col>
              <img
                className="deck-card"
                alt="reserve deck"
                src="cardImages/back_light.png"
              ></img>
            </Col>
            <Col>
              <Row>
                <span>Cards in deck {cards} </span>
              </Row>
              <Row>
                <span>
                  <Button onClick={() => endGame()}>End Game</Button>
                </span>
              </Row>
            </Col>
          </Row>
          {/**render Number of players conditionally, 2 by default */}
          {totalPlayers === 2 ? (
            <>
              <div className="player1">Player 1</div>
              <div className="player3">Player 3</div>
            </>
          ) : totalPlayers === 3 ? (
            <>
              <div className="player2">Player 2</div>
              <div className="player3">Player 3</div>
              <div className="player4">Player 4</div>
            </>
          ) : (
            <>
              <div className="player1">Player 1</div>
              <div className="player2">Player 2</div>
              <div className="player3">Player 3</div>
              <div className="player4">Player 4</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
