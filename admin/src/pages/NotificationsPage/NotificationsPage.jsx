import React from 'react'
import './NotificationsPage.css'
import { useState } from 'react'
import axios from 'axios'
import { ManagementContext } from '../../Context/ManagementContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const NotificationsPage = () => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    const {backend_url}=useContext(ManagementContext);
    const [notifications,setNotifications]=useState([])

    const handleSubmit=async(e)=>{
        e.target.preventDefault();
        try {
            const response=await axios.post(`${backend_url}/api/admin/notification`,{title,description,author:"admin"});
            console.log(response);
            if(response.data.success){
                toast.success(response.data.message);
            }else{
                console.log(response.data.message);
            } 
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        const fetchNotifs=async()=>{
            try {
              const response=await axios.get(`${backend_url}/api/admin/notifications`);  
              if(response.data.success){
                setNotifications(response.data.notifications);
              }
              
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchNotifs();       
    },[notifications,backend_url])
  return (
    <>
    <div className="notifications-container">
        <div className="notifs">
            {/*==================================*/}
            <div className="notifs-top">
                <div className="notifs-top-header">
                    <h2>Post Notification</h2>
                </div>
                <div className="notifs-top-body">
                    <form onSubmit={handleSubmit} method="post">
                        <div className="form-class">
                            <label htmlFor="">Title</label><br/>
                            <input type="text" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)} />
                        </div>
                        <div className="form-class">
                            <label htmlFor="">Description</label><br/>
                            <textarea name="" id="" rows={5} value={description} onChange={(e)=>setDescription(e.target.value)}> </textarea>
                        </div>
                        <div className="form-btn">
                            <button type='submit'>Post</button>
                        </div>
                    </form>
                </div>

            </div>
            {/*==================================*/}
            <div className="notifs-bottom">
                <div className="notifs-class">
                    {
                        notifications.map((notif)=>(
                            <div className="single-notif">
                                <div className="single-notif-header">
                                    <h4>{notif.title}</h4>
                                </div>
                                <div className="single-notif-descr">
                                    <p>{notif.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default NotificationsPage