import React, { Component } from 'react';
import './App.css';
import Stock from './Stock';
import StockHook from './StockHook';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMsgPadre: false,
      maggiorenne: ''
    }
  }

  showMaggiorenne = (nome) => {
    this.setState( { maggiorenne: nome } )
  }

  mostroDatiForm = form => {
    console.log('Da componente padre', form);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={this.mostroDatiForm} />
          <p>Maggiorenni sono: {this.state.maggiorenne}</p>    
          <Stock nome="APPLE" fondatore="Jobs" eta={1} hobby={['arte']} showEta={this.showMaggiorenne} />   
          <Stock nome="Pera" fondatore="Viola" eta={11} hobby={['Non So']} showEta={this.showMaggiorenne} />      
        </header>
      </div>
    );
  }
}

export default App;
