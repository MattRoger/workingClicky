# Colorado Clicky Game :deer: :chipmunk:	:eagle:	
A memory game featuring colorado wild life

## Motivation
to practice with react.js

## Build Status
Complete :checkered-flag:

## How to use?
Each round the user has to click on a tile without clicking on a previously clicked tile

## Code style

### How the Game Works
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
