// action always return object like action{
//      type : ,   [Compulsory]
//      payload : ,[optional]
// }
const CounterReducer = (state, action) => {

    switch(action.type){
        
        case 'INC': 
            return {
                count : state.count+1
            };
        
        case 'DEC':
            return {
                count : state.count-1
            };

        default: 
            return state;
    }

}
export default CounterReducer;
