import React, { Component } from 'react';
// import { Router, Route} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


// Components
import NavBar from './layout/NavBar';

// Pages
import main from './pages/main.js'
import results from './pages/results.js';

import themeFile from './Util/theme.js'

// MUI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme(themeFile);

class App extends Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <NavBar/>
          <div className="App-container">
              <Route exact path="/" component={main}/>
              <Route path="/:query" component={results}/>
          </div>

          </Router>
          
       </MuiThemeProvider>
    );

  }
}

export default App;
