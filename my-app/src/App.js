import React from "react";
import cards from "./components/cards";
import "./components/style.css";
import Display from './components/cardDisplay';



class App extends React.Component {

    
  state = {
    score: 0,
    topScore: 0,
    id: Math.floor(Math.random()*8),
    cards
  }


  handleInfo=(id)=>{
    console.log(this.state.id);
  if(id===this.state.id){
    this.setState({ score: this.state.score + 1,id:Math.floor(Math.random()*(cards.length-1))});
    // this.shuffle(this.state.cards);
  }else{
    this.setState({score:0,id:Math.floor(Math.random()*(cards.length-1))});
    if(this.state.score>this.state.topScore){
      this.setState({topScore:this.state.score})
    }
    alert("oops");
    // this.shuffle(this.state.cards);
  }
  };


  render() {


    return (
      <div>
        <nav className="navbar">
          <div>
            <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
            <h1>Find: {cards[this.state.id].question}</h1>
          </div>  
        </nav>
        <div className="container margin-top">
          {cards.map(card => 
           <Display id={card.id} picture={card.picture} key={card.id} onClick={this.handleInfo}/>
          )}

        </div>

      </div>
    );
  }
}

export default App;