import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contant } from './Contant';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout'
import { NavBar} from './components/NavBar'
import { Jumbotron} from './components/Jumbotron'

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Jumbotron/>
    <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contant" component={Contant} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
