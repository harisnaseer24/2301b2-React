import { createContext } from "react";


export const CartData=createContext(["dsfdf"]);
//create context  : initialize the value of the context

// CarData.Provider: to provide the value of the context to the components
//useContext (CartData) : to access the value of the context in any component