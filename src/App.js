import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Home from './components/Home';
import WorkContainer from './containers/WorkContainer'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/Work' component={WorkContainer}/>
          <Route exact path = '/' component={Home} />
          <Route path = '/Project1' component={Project1} />
          <Route path = '/Project2' component={Project2} />
          <Route path = '/Project3' component={Project3} />
          <Route path = '/Project4' component={Project4} />
          <Route path = '/Project5' component={Project5} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
