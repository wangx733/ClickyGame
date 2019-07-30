import React from "react";
import cards from "./components/cards";
import "./components/style.css";
import Getvalue from './components/getvalue';
// import Randomshow from './components/randomshow';
import Resultshow from './components/resultshow';

function shuffle(cards) {
  var ctr = cards.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = cards[ctr];
      cards[ctr] = cards[index];
      cards[index] = temp;
  }
  return cards;
}


class App extends React.Component {

    
  state = {
    score: 0,
    topScore: 0,
    id: 0,
    clickedId:0,
    cardsshuffle:cards
  }

  
  increment=()=>{

      if(this.state.clickedId===this.state.id&&this.state.id<7){
        console.log(this.state.clickedId);
        this.setState({ score: this.state.score + 1,id:this.state.id+1});
        }else if(this.state.clickedId!==this.state.id&&this.state.id<7){
          this.setState({score:0,id:this.state.id+1});
          alert("oops");
          console.log(this.state.clickedId);
        }else{
          this.setState({ score: this.state.score + 1,id:0});
        }
    
      if(this.state.score>this.state.topScore){
        this.setState({topScore:this.state.score})
      }
  };
  


  // checkHighest = () => {
  //   this.incrementRight();
  //   this.setState({ topScore: this.state.score });
  // };


  render() {


    return (
      <div>
        <nav className="navbar">
          <ul>
            <li>Score: {this.state.score} | Top Score: {this.state.topScore}</li>
            <h2>Find: {cards[this.state.id+1].question}</h2>
            <Resultshow clickedId={this.state.clickedId} idSuppose={this.state.id} />
          </ul>

        </nav>
        <div className="container">
          {this.state.cardsshuffle.map(card => {
            return <div key={card.id} className="images" onClick={() => { this.setState({clickedId:(<Getvalue value={card.id} />).props.value});this.increment();shuffle(this.state.cardsshuffle);}}>
              <img src={card.picture} alt="bird"></img>
            </div>
          })}

        </div>

      </div>
    );
  }
}

export default App;