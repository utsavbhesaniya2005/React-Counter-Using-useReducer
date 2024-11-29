import { useReducer } from "react"
import CounterReducer from "../helper/CounterReducer";

const initialValue = {
    count : 1
}

const Counter = () => {

    // useReducer is a global state management techniques and used in small projects and if we have big projects we use Redux.js
    // useReducer Can do a component a free and give all its work to reducer, it can only sends action to reducer so it can not do any work instead of these it can sends action to the reducer
    // dispatch is method/Function which can sends action type to our useReducer
    const [rec, dispatch] = useReducer(CounterReducer, initialValue);

    const handleInc = () => {
        dispatch({type:"INC"})
    }

    const handleDec = () => {
        if(rec.count > 1){
            dispatch({type:"DEC"})
        }
    }

    return(
        <>
            <button onClick={handleInc}>+</button>
            <h1>{rec.count}</h1>
            <button onClick={handleDec}>-</button>
        </>
    )
}
export default Counter;
