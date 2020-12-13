import React from 'react';
import './App.css';
import Customerlist from './components/customerlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Trainingslist from './components/trainingslist';
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Trainingcalendar from './components/Trainingcalendar';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="secondary">
        <Toolbar color="secondary">
          <Typography variant="h5">
            Kuntokeskus Minna
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
      <div>
  <Link to="/">Asiakkaat</Link>{' '}
  <Link to="/components/trainingslist">Treenit</Link>{' '}
  <Link to="/components/Trainingcalendar">Kalenteri</Link>{' '}

  <Switch>
    <Route exact path="/" component={Customerlist} />
    <Route path ="/components/trainingslist" component={Trainingslist} />
    <Route path ="/components/Trainingcalendar" component={Trainingcalendar} />
    <Route render={() => <h1>Sivua ei löydy.</h1>}/>
    </Switch>
    </div>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
