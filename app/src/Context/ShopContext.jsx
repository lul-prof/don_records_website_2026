import { createContext, useEffect, useState } from "react";
import {toast} from 'react-hot-toast'
import axios from 'axios'


export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const username="the_don";
    const currency="kes";

    const [token, setToken]=useState(false);

    const [userId,setUserId]=useState("");

    const [pic,setPic]=useState(false);

    const [user,setUser]=useState(false);

    const [beats,setBeats]=useState([]);

    const [merchandise,setMerchandise]=useState([]);

    const [blogs,setBlogs]=useState([]);

    const [users,setUsers]=useState([]);

    const [searched,setSearched]=useState([]);



    const [count,setCount]=useState(0);

    const backend_url=import.meta.env.VITE_BACKEND_URL;
    

    const addToCart=async(productId)=>{
        try {
            if(productId){
                setCount(count+1);
            }else{
                toast.error('Failed to add Product')
            }
        } catch (error) {
            console.log(error);    
        }
    }

    useEffect(()=>{
        const fetchToken=async()=>{
            try {
                const resp=await localStorage.getItem("token");
                if(resp){
                    setToken(resp);
                }else{
                    toast.error('Login to update profile.')
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchToken();
    },[token]);

    useEffect(()=>{
        const fetchUser=async()=>{
            try {
                const resp=await localStorage.getItem("user");
                if(resp){
                    setUserId(resp)
                    const response=await axios.post(`${backend_url}/api/user/user/${resp}`);
                    setPic(response.data.user.avatar);                    
                    setUser(response.data.user.username);
                }else{
                    toast.error("login to update profile")
                }
                
            } catch (error) {
                console.log(error);                
            }
        }
        fetchUser();
    },[userId,pic,backend_url])

    useEffect(()=>{
        const fetchBeats=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/admin/beats`);
                if(response.data.success){
                    setBeats(response.data.beats);
                }else{
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchBeats();
    },[beats,backend_url]);

    useEffect(()=>{
        const fetchMerchandise=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/admin/merchandise`);
                
                if(response.data.success){
                    setMerchandise(response.data.merchandise);
                }else{
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchMerchandise();
    },[merchandise,backend_url]);

    useEffect(()=>{
        const fetchBlogs=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/admin/blogs`);  
                if(response.data.success){
                    setBlogs(response.data.blogs);
                }else{
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchBlogs();

        const fetchUSers=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/user/users`);
                if(response.data.success){
                    setUsers(response.data.users);
                }else{
                    console.log(response.data.message);
                    
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUSers();
    },[blogs,backend_url,users]);

    const value={
        username,
        currency,
        addToCart,
        count,
        setCount,
        token,
        setToken,
        backend_url,
        setUserId,
        userId,
        setPic,
        pic,
        setUser,
        user,
        setBeats,
        beats,
        setMerchandise,
        merchandise,
        setBlogs,
        blogs,
        setUsers,
        users,
        searched,
        setSearched
    };

    

return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
);
};

export default ShopContextProvider;

