import { createContext } from "react";


export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const username="test";
    const currency="kes";


    const value={
        username,
        currency,
    };

return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
);
};

export default ShopContextProvider;

