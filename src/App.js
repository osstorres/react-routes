import React from 'react';
import Loadable from 'react-loadable'
import { Route } from 'react-router-dom'
import './App.css';



const Loader = load => Loadable ({
    loading: () => 'Cargando...',
    loader: load

})

const Prueba = Loader(() => import('./components/Prueba'))
const Invoices = Loader(() => import('./components/Invoices'))


function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Prueba}/>
        <Route exact path={'/invoices'} component={Invoices}/>
    </div>
  );
}

export default App;
