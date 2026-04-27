import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValur = { food_list };
  return (
    <StoreContext.Provider value={contextValur}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
