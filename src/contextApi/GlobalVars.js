import React, {createContext,useReducer} from 'react';
import red from './ReducerApp';

const initialState = {
    eventData: [
   

    ]
}

export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(red, initialState);

   const removeEvent = (id) => {
     dispatch({
         type:'REMOVE_EVENT',
         payload: id
     })
   }
   const addEvent = (event) => {
    dispatch({
        type:'ADD_EVENT',
        payload: event
    })
  }

  const editEvent = (event) => {
    dispatch({
    type:'EDIT_EVENT',
    payload: event
    })
  }

    return (
        <GlobalContext.Provider value={{
            eventData: state.eventData,
            removeEvent,
            addEvent,
            editEvent
          }}>
            {children}
          </GlobalContext.Provider>
    )
}