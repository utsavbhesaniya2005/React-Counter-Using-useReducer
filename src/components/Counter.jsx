import { useReducer } from "react"
import CounterReducer from "../helper/CounterReducer";

const initialValue = {
    count : 1
}

const Counter = () => {
   
    // useReducer Can do a component a free and give all its work to reducer, it can only sends action to reducer so it can not do any work instead of these it can sends action to the reducer
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