import React, { useState } from "react";
import IndivGame from "./indivGame";

const GameList = ({ state }) => {
    let games = Array.from(Object.entries(state));
    let num = 0;
    const [imgClass, setImgClass] = useState('');
    let handleSetImgClass = () => {
        setImgClass('img-border');
    }
  return (
  <>
    {
        games.map((key) => {
            return (
                <React.Fragment key={num++}>
                    <div className="group1" aria-level={1} role="heading" aria-label={`${key[1].name} fixtures`}>
                        <img 
                            src={key[1].img} 
                            className={imgClass} 
                            alt={`${key[1].name} logo`} 
                            aria-label={`${key[1].name} logo`} 
                            onLoad={handleSetImgClass}
                        />
                        <div><span aria-label="League country">{key[0]}</span>&nbsp;-&nbsp;<span aria-label="League name">{key[1].name}</span></div>
                    </div>
                    <ul>
                        <IndivGame state={key[1].game} />
                    </ul>
                </React.Fragment>
            )
        })
    }</>
  )
}

export default GameList