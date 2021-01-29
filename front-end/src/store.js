import { createStore,applyMiddleware } from "redux"
import rootReducer from "./reducers"
import { composeWithDevTools} from "redux-devtools-extension"
//middleware to console.log actions and state in the console//
import logger from "redux-logger"
import thunk from "redux-thunk"
const middleware = [thunk,logger]

const store = createStore(rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
  
)

export default store