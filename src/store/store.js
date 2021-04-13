// import React, { useReducer, useContext, createContext } from 'react'

// const StoreContext = createContext();

// const initState = {
// 	message: '',
// 	address: null,
// 	balance: 0
// }

// const reducer = (action, state) => {
// 	switch(action.type){
// 		case "NEW-ADDRESS": 
// 			return {
// 				...state,
// 				address: action.newAddress
// 			}

// 		case "SET-BALANCE":
// 			return {
// 				...state,
// 				balance: action.newBalance
// 			} 

// 		default: 
// 			throw new Error(`Unknown type of action ${action.type}`);
// 	}
// }	


// export const StoreProvider = ({children}) => {
// 	const {state, dispatch} = useReducer(reducer, initState);

// 	return (
// 		<StoreContext.Provider values={{ state, dispatch }}>
// 			{children}
// 		</StoreContext.Provider>
// 	)	
// }

// export const useStore = () => useContext(StoreContext);