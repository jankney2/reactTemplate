import {createStore} from 'redux'


const initialState={
greeting:''
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case 'HELLO':
            return {
                ...state, 
                greeting:action.payload
            }

        default:
            return state
    }
}

export default createStore(reducer)

