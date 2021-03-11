import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/Project1' component={Project1} />
          <Route exact path = '/Project2' component={Project2} />
          <Route exact path = '/Project3' component={Project3} />
          <Route exact path = '/Project4' component={Project4} />
          <Route exact path = '/Project5' component={Project5} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
