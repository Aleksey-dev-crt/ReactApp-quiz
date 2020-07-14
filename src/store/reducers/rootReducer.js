import {combineReducers} from 'redux'
import quizReducer from "./reducerQuiz"
import createReducer from "./reducerCreate"
import authReducer from "./reducerAuth";

export default combineReducers({
    quiz: quizReducer,
    create: createReducer,
    auth: authReducer
})