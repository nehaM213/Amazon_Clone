import React, { createContext, useContext, useReducer} from 'react';

//prepares data layer
export const StateCentext = createContext();// using createContext() from context api to create context

//wrap out app and and provides the data layer
export const StateProvider=({reducer, initialState, children})=>(
    <StateCentext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateCentext.Provider>
)

//pull information from data layer
export const useStateValue=()=>useContext(StateCentext);