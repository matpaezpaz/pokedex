import React from 'react';
import { Switch, Route } from 'react-router-dom'; //Importamos dos componentes importantes, Switch y Routes.
import Home from './pages/Home'; //Importamos componente HomePage
import Detail from './pages/Detail';
//import Detail from './pages/Detail'; //Importamos componente DetailPage
const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:idPokemon" component={Detail} />
        <Route path='*' component={() => <h1> Pagina de error. 404 Not found</h1>} />
    </Switch>
)

export default Routes;