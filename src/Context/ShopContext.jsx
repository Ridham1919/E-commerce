import { createContext } from "react";
import All_product from "../Utils/All_product";
import New_collection from "../Utils/New_collection";

export const Shopcontext = createContext(null)


const ShopContextProvider = (props) => {
    const contextValue = {All_product, New_collection};

    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopContextProvider;