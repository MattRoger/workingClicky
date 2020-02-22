# Colorado Clicky Game :deer: :chipmunk:	:eagle:	
A memory game featuring colorado wild life
[Play The Game!](https://dashboard.heroku.com/apps/clickygame9999)

## Motivation
to practice with react.js

## Build Status
Complete :checkered-flag:

## How to use?
Each round the user has to click on a tile without clicking on a previously clicked tile

## Code style

### How the Game Works
#### Animals.json sample
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

````javascript
<PageWrapper>
          <header>
            <div className="container">
              <h1>Colorado Wildlife Clicky Game</h1>
              <p className="rules">Click all the animals without clicking the same animal twice!</p>
            </div>
            <h2 className="score"> Score: {this.state.score}</h2>
            <h2 className="score"> Best Attempt: {this.state.topScore}</h2>
          </header>
          <div className="gameWrapper">
             //Wrapper component
            <Wrapper>
              {this.state.animals.map(animal => (
                //Game component
                <Game
                  //Rendered from animals.json
                  key={animal.id}
                  id={animal.id}
                  name={animal.name}
                  image={animal.image}
                  updateAnimal={this.updateAnimal}
                />
              ))}
            </Wrapper>
          </div>
        </PageWrapper>
````
#### Wrapper Component
```javascript
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}
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

## Tech/framework used
React.js

## Features

## Installation
* :trident: Fork it
* :sheep: Clone it
* Install the NPMs



## Credits / Contact information
* @MattRoger 
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/


## License
