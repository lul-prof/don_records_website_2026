import React, { useContext, useEffect, useState } from 'react'
import './NotificationsPage.css'
import axios from 'axios'
import { ShopContext } from '../../Context/ShopContext'

const NotificationsPage = () => {
  const [notifications,setNotifications]=useState([])
  const { backend_url } = useContext(ShopContext);

  useEffect(()=>{
        const fetchNotifs=async()=>{
            try {
              const response=await axios.get(`${backend_url}/api/admin/notifications`); 
              console.log(response);
               
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
      <div className="notifs-header">
        <h2>Notifications</h2>
      </div>
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
    </>
  )
}

export default NotificationsPage