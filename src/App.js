import React from 'react';
import Game from "./components/Game";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import animals from "./animals.json";
import styled from "styled-components";

const PageWrapper = styled.section`
background:#AD6E39;
color:#F6FEDB;
header{
  background:#709255;
  display: block;
  padding:1.5em;
  border-bottom:3px solid #FCCD00;
  text-align:center
}
h1{
  padding:0
  margin:0
  padding-bottom:.25em
}
p{ 
}
.container{
  font-size:1.5em;
  padding:0
}
.score{
  padding:.5em 1em .15em 1em; 
  font-size:2.5em; 
  display:inline 
}
}
img{
  width:250px;
  margin:1em;
  padding:0;
  border:2px solid #FCCD00;
  -webkit-box-shadow: 9px 13px 13px 3px rgba(51,51,51,0.62);
-moz-box-shadow: 9px 13px 13px 3px rgba(51,51,51,0.62);
box-shadow: 9px 13px 13px 3px rgba(51,51,51,0.62);
}
`

class App extends React.Component {
  state = {
    animals,
    score: 0,
    topScore:0,
    targetScore: 12,
  }

  updateAnimal = id => {
    const animals = this.state.animals.map(animal => {
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

  shuffleDeck = (array) => {
    const shuffledDeck = array.sort(function (a, b) { return 0.5 - Math.random() });
    this.setState({ animals: shuffledDeck })

  }

  updateScore = () => {
    this.setState({ score: this.state.score + 1 })
  }

  reset = () => {
    const animals = this.state.animals.map(animal => (animal.clicked = false))
    console.log("game reset")

    this.setState({ animals: animals, score: 0 });
  }
  handleCorrectGuess = () => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    this.setState({           
      topScore: newTopScore
    });
  };


  render() {
    return (
      <>
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
            <Wrapper>
              {this.state.animals.map(animal => (
                <Game
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
        <Footer/>
      </>
    );
  }
}
export default App;