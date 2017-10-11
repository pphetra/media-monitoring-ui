/**
 * Created by pphetra on 11/10/2017 AD.
 */
import diseaseStore from './Disease'
import groupStore from './Group'
import { combineReducers, createStore } from "redux"

const reducer = combineReducers({
    diseaseStore,
    groupStore,
})

const store = createStore(
    reducer,
    {},
)

export default store