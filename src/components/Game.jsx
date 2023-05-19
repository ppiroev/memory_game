import { useState } from "react";
import CardContainer from "./CardsContainer";

export default function Game(){
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [selectedCards, SetSelectedCards] = useState([]);


    function reset(){
        setScore(0)    
        SetSelectedCards([])
        const container = document.querySelector(".card-container");
        container.classList.add('flash');
        setTimeout(()=> {
            container.classList.remove('flash');
        }, 1000)
    }

    function checkScore(){
        if (score === 16){
            alert("Congratulations! You beat the Rick and Morty Memory Card!")
        }
    }

    function handleGame(cardName){
        if (!selectedCards.includes(cardName)){
            setScore(score + 1);
            SetSelectedCards([...selectedCards, cardName])
            checkScore()
        } else {
            if (highScore < score){
                setHighScore(score)
            }
            reset();
        }
    }

    return (
        <div>
            <CardContainer score={score} highScore={highScore} handleGame={handleGame}/>
        </div>
    )
}