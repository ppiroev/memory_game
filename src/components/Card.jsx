/* eslint-disable react/prop-types */

export default function Card({image, text, handleClick}){


    return (
        <div className="card" onClick={() => handleClick(text)}>
            <img src={image} alt={text} />
            <p>{text}</p>
        </div>
    )
}