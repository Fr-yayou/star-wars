import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import { Provider } from "react-redux"
import People from "./components/Result/People"
import Planet from "./components/Result/Planet"
import Movie from "./components/Result/Movie"
import Species from "./components/Result/Species"
import Vehicles from "./components/Result/Vehicles"
import Starship from "./components/Result/Starship"


import store from "./store"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/people" exact component={People}/>
            <Route path="/planet" exact component={Planet}/>
            <Route path="/movie" exact component={Movie}/>
            <Route path="/species" exact component={Species}/>
            <Route path="/vehicles" exact component={Vehicles}/>
            <Route path="/starship" exact component={Starship}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
