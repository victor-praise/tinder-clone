import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
              <TinderCards/>
          </Route>
          <Route path="/chat">

          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
