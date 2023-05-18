/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import cards from "./cards";
import Card from "./Card";

export default function CardContainer({score, highScore, handleGame}){

    const [currCards, setCurrCards] = useState(cards);

    function shuffleCards(array) {
        let newCards = array;
        for (let i = newCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * newCards.length);
            [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
        }
        return newCards
    }
    

    useEffect(()=>{
        const newCards = shuffleCards(cards);
        setCurrCards(newCards)
    }), [score, highScore]

    return (
        <div className="card-container">
            <div className="score-board">
                <p>Score: {score}</p>
                <p>High score: {highScore}</p>
            </div>
            <div className="cards-section">
                {currCards.map(card => {
                    return (
                        <Card key={card.name} image={card.src} text={card.name} handleClick={handleGame}/>
                    )
                })}
            </div>
        </div>
    )
}