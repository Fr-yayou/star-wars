import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Toggle from "./components/Toggle"
import CardResults from "./components/CardResults"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevTools} from "redux-devtools-extension"


const store = createStore(rootReducer,
  {},
  composeWithDevTools(),

)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar/>
          <Toggle/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/:result" exact component={CardResults}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
