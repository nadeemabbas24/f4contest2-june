import { createStore } from "redux";

const reducer = (state={id:null, data:null, erro:''}, action)=>{
   switch(action.type){
    case 'LOGIN' :  return {...state, id:action.payload}
    case 'SUCCESS' : return {...state, data:action.payload}
    case 'ERROR' : return {...state, error:action.payload}
    default: return state
   }
}

const store = createStore(reducer)

export default store;