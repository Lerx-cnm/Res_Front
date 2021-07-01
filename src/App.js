import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Project4 from './components/projects/Project4';
import Project5 from './components/projects/Project5';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WorkContainer from './containers/WorkContainer'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path = '/Work' component={WorkContainer}/>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/about' component={About} />
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
