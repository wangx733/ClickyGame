import React from "react";
// import React, { useState } from 'react';
import cards from "./components/cards";
import "./components/style.css";
// import $ from 'jquery';
import Getvalue from './components/getvalue';
import Randomshow from './components/randomshow';



class App extends React.Component {

  state={
    score:0,
    topScore:0
    

  }
  incrementRight = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // checkHighest = () => {
  //   this.setState({ topScore: this.state.topScore = this.state.score});
  // };

  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <a href="/">Clicky Game</a>
            {/* <li className="">{whetherCorrect}</li> */}
            <li>Score: {this.state.score} | Top Score: {this.state.topScore}</li>
            <h2>Find: <Randomshow image={cards} /></h2>
          </ul>

        </nav>
        <div className="container">
          {cards.map(card => {
            return <div key={card.id} className="images" onClick={() => { console.log((<Getvalue value={card.id} />).props.value) }}>
              <img src={card.picture} alt="bird"></img>
            </div>
          })}

        </div>

      </div>
    );
  }
}

export default App;