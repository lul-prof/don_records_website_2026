import { createContext, useEffect, useState } from "react";


export const ManagementContext=createContext();

const ManagementContextProvider=(props)=>{
    const username="the_don";
    const [token, setToken]=useState("");

    const frontend_url=import.meta.env.VITE_FRONTEND_URL;
    const backend_url=import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if(!token){
            const storedToken=localStorage.getItem("token");
            if(storedToken){
                setToken(storedToken);
            }else{
                console.log("Could not set token");   
            }
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    
    fetchToken();
  }, []);

    

    const value={
        username,
        setToken,
        token,
        frontend_url,
        backend_url
    };

return (
    <ManagementContext.Provider value={value}>{props.children}</ManagementContext.Provider>
);
};

export default ManagementContextProvider;

