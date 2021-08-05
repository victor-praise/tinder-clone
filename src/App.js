import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
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
          <Route path="/chat" exact>
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/chat/:person/:picture" children={
            <div>
              <Header backButton="/chat" />
              <ChatScreen />
            </div>
          } />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
