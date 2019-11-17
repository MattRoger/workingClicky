import React from "react";

function Game(props) {
    return (
        <div className="card">
          <div className="img-container d-flex" 
          onClick={() => props.updateAnimal(props.id)}>
            <img alt={props.name} 
           src={`${process.env.PUBLIC_URL}/images/${props.image}`}
             />
          </div>
        </div>    
      );
}
export default Game;
