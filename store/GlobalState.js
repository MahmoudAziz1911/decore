import { useEffect } from "react";
import { createContext, useReducer } from "react";
import reducers from "./Reducers";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const initialState = { notify: {}, auth: {}, cart: [], modal: {} };
    const [state, dispatch] = useReducer(reducers, initialState);
    const { cart } = state;

    useEffect(() => {
        const __next__cart01 = JSON.parse(localStorage.getItem("__next__cart01"))
        if(__next__cart01) dispatch({type: "ADD_CART", payload: __next__cart01})
    }, [])

    useEffect(() => {
      localStorage.setItem("__next__cart01", JSON.stringify(cart))
    }, [cart])
    

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}