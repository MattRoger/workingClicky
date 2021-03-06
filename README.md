# Colorado Wildlife Clicky Game :deer: :chipmunk:	:eagle:	
A memory game featuring colorado wild life.

[Play The Game!](https://clickygame9999.herokuapp.com/)

## Motivation
to practice with react.js

## Build Status
Complete :checkered_flag:

## How to use?
Each round the user has to click on a tile without clicking on a previously clicked tile.

## Tech/framework used
* React.js 
* Styled Components

## Features
Artwork by Matt Roger

## Code style

### How the Game Works
![clicky demo](https://github.com/MattRoger/screenshots/blob/master/clicky/demo.gif?raw=true)

#### Animals.json sample
The array that contains all of the tile information.

```javascript
[
    {
      "id": 1,
      "name": "Bison",
      "image":"1.jpg",
      "clicked": false
      //When an image is clicked,"clicked":true
      
    },
    {
      "id": 2,
      "name": "whitetail",
      "image": "2.jpg",
      "clicked": false
    }
    ]
````
#### App.js
Each click, the app checks the boolean value of isClicked. If isClicked = true, the user loses the game. Otherwise boolean value of isClicked is changed to true and the score increases. If the users score is equal to the targetScore of 12 they win.

````javascript
class App extends React.Component {
  state = {
    animals,
    score: 0,
    topScore:0,
    targetScore: 12,
  }
  //Function to updated clicked attr on animal tile
 updateAnimal = id => {
    const animals = this.state.animals.map(animal => {
    
    //If the User selects the same tile twice in once game, they lose and the game is reset
      if (animal.id === id && animal.clicked === true) {
        this.reset()
        alert("You've clicked this animal twice! You lose!")
        
      } else if (animal.id === id && animal.clicked === false) {
        animal.clicked = true
        this.updateScore()
        this.handleCorrectGuess()
      } else if (animal.clicked === false && this.state.score === 15) {
        alert("You win!")
      }
      return animal;
    });

    this.setState({ animals });
    this.shuffleDeck(this.state.animals);
  };
  
  //Shuffles tiles into a new arrangement
  shuffleDeck = (array) => {
    const shuffledDeck = array.sort(function (a, b) { return 0.5 - Math.random() });
    this.setState({ animals: shuffledDeck })
   }

  //Updates The Score
  updateScore = () => {
    this.setState({ score: this.state.score + 1 })
  }
  
  //Resets the game if the player losses
  reset = () => {
    const animals = this.state.animals.map(animal => (animal.clicked = false))
    console.log("game reset")
    this.setState({ animals: animals, score: 0 });
  }
  
  //Function to handle correct guess
  handleCorrectGuess = () => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    this.setState({           
      topScore: newTopScore
    });
  };

````

#### Game Component

```javascript
function Game(props) {
    return (
        <div className="card">
          <div className="img-container d-flex" 
          //Changes a tiles clicked attr to true
          onClick={() => props.updateAnimal(props.id)}>
            <img alt={props.name} 
           src={`${process.env.PUBLIC_URL}/images/${props.image}`}
             />
          </div>
        </div>    
      );
}
````


## Installation
* Install react
* :trident: Fork it
* :sheep: Clone it
* Install the NPMs



## Credits / Contact information
* @MattRoger 
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/

