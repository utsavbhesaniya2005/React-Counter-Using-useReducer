// action always return object like action{
//      type : ,   [Compulsory]
//      payload : ,[optional]
// }
const CounterReducer = (initialState, action) => {

    switch(action.type){
        
        case 'INC': 
            return {
                count : initialState.count+1
            };
        
        case 'DEC':
            return {
                count : initialState.count-1
            };

        default: 
            return initialState.count;
    }

}
export default CounterReducer;