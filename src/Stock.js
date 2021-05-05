import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// Notazione delle classi
class Stock extends Component {
 constructor(props) {
   super(props);
   this.state = { 
     eta: this.props.eta,
     hobby: this.props.hobby,
     showMsg: false
    }; 
   this.hobbyLocale = ['musica','pallone','disegnare','Tennis','Calcio','ballo','viaggiare','mangiare'];
 }

 aggiornoStato = () => {
  let hobbySingolo = this.hobbyLocale.shift()
  this.state.hobby.push(hobbySingolo)
  if(!this.hobbyLocale.length) {
    clearInterval(this.aumenta)
  }

  this.setState((state,props) => ({
    eta: state.eta + 1,
    hobby: state.hobby
  }))

  if (this.state.eta >= 18) {
    this.props.showEta(this.props.nome)
  }
 }

 realTime = (value) => {
  this.state.hobby.push(value)
  this.aumenta = setInterval(() => {
    this.aggiornoStato()
  }, 1000);  
 }

 mostroMsg = (e) => {
   this.setState({
     showMsg: true
   })
 }

 render() {
    const { nome, fondatore } = this.props;
    // setInterval(() => { 
    //   this.setState((state,props) => ({eta: state.eta +1}))}, 3000
    // );
    return (
      <div>
        <h5>Figlio: {nome} - Età: {this.state.eta}</h5>
        <p>Fondatore: {fondatore}</p>
        <Button variant="contained" color="primary" onClick={ () => this.realTime('PROCEDI') }>AGGIORNO</Button>
        <Button variant="contained" color="primary" onClick={ this.mostroMsg }>MOSTRA</Button>
        { this.state.showMsg && <p>Messaggio Nascosto</p> }
        <p> { this.state.eta>=18 ? 'Sono maggiorenne' : 'Sono minorenne'} </p> 
        <ul>
          { this.hobbyLocale.map(item => <li> {item} </li>) }
        </ul>
        <ul>
          { this.state.hobby.map(item => <li> {item} </li>) }
        </ul>
        {/* <p>Lista Hobby</p>
        <ul>
          { this.hobby.map(item => <li> {item} </li>) }
        </ul> */}
      </div>
    );
  }
}

// Notazione delle funzioni
// const Stock = ({nome, fondatore}) => {
//     const hobby = ['Tennis','Calcio'];
//     return (
//          <div>
//             <h3>Figlio {nome}</h3>
//             <p>Fondatore: {fondatore}</p>
//             <p>Lista Hobby</p> 
//             <ul>
//              { hobby.map(item => <li> {item} </li>) }
//             </ul>
//          </div>
//     );
// }

// Notazione Hook
// const Stock = (props) => {
//  const hobby = ['Tennis','Calcio'];
//  return (
//       <div>
//          <h3>Figlio {props.nome}</h3>
//          <p>Fondatore: {props.fondatore}</p>
//          <p>Lista Hobby</p> 
//          <ul>
//            { hobby.map(item => <li> {item} </li>) }
//          </ul>
//       </div>
//  );
// }

Stock.defaultProps = {
    nome: 'ND',
    fondatore: 'ND'
} 

Stock.propTypes = {
    nome: PropTypes.string,
    fondatore: PropTypes.string,
    eta: PropTypes.number,
    hobby: PropTypes.array
}
   
export default Stock;