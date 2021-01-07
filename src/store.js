import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import drinkReducer from "./reducers/drinkReducer"
import listSizeReducer from "./reducers/listSizeReducer"
import sortReducer from './reducers/sortReducer'

const reducer = combineReducers({
    listSize: listSizeReducer,
    drinks: drinkReducer,
    sortOptions: sortReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store