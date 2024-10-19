import { createContext } from "react";
<<<<<<< HEAD

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {};
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
=======
import { doctors } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'

    const value = {
        doctors,
         currencySymbol
    }

    return (
        <AppContext.Provider value={value}> 
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;//exporting the context provider
>>>>>>> 8e093b1d3d8c1ecceb38b9d9aa15f5cae94958bc
