import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import People from "./components/People"


function App() {
  return (
    <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/people" component={People}/>
          </Switch>
        </div>
    </Router>
  );
}
export default App;
