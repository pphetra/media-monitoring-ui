/**
 * Created by pphetra on 11/10/2017 AD.
 */
import diseaseStore from './Disease'
import { combineReducers, createStore } from "redux"

const reducer = combineReducers({
    diseaseStore,
})

const store = createStore(
    reducer,
    {},
)

export default store