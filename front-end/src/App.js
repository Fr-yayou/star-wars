import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import { Provider } from "react-redux"


import store from "./store"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
