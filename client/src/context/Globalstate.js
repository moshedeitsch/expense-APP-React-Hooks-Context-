import React, { createContext, useReducer,useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}




export const GlobalContext = createContext(initialState);


// Prrovider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('transactions');
       return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('transactions',JSON.stringify(state))
    }, [state])

    //Action

    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        })


    }

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        })


    }


      



    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>)
}