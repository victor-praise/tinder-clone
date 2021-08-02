import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/" exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
