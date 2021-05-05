import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Versione del componente Stock con notazione Hook

function StockHook(props) {
  const [eta, setEta] = useState(props.eta); 

  // Ogni 3 sec. incremento di uno il valore di eta
  useEffect(()=>{
               const timer = setInterval(() => aggiornoStato(), 3000);
               return () => { clearInterval(timer)}
              }, []);

  function aggiornoStato () {
    setEta(preveta => preveta + 1);
  }

  const { nome, fondatore }  = props;
  return (
    <div>
      <h3>Figlio: {nome} - Età: {eta}</h3>
      <p>Fondatore: {fondatore}</p>
      <p> { eta>=18 ? 'Sono maggiorenne' : 'Sono minorenne'} </p> 
    </div>
  );
}

StockHook.defaultProps = {
    nome: 'ND',
    fondatore: 'ND'
} 

StockHook.propTypes = {
    nome: PropTypes.string,
    fondatore: PropTypes.string,
    eta: PropTypes.number
}
   
export default StockHook;