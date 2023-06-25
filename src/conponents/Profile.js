import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const id = useSelector(state=>state.id)
    const userData = useSelector(state=>state.data) 
    const dispatch = useDispatch();
    const navigate = useNavigate();
       
    useEffect(()=>{

      fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            if(data.message)
               {alert(data.message)
                navigate("/")}
            else
              dispatch({type:'SUCCESS', payload:data});
        });
    },[])


  return (
    <div className='profile'>
       
        {userData && 
        <>
         <img src={userData.image} alt="user"/>
         <ul>
            <li>ID: {userData.id}</li>
            <li>Username: {userData.username}</li>
            <li>Email: {userData.email}</li>
            <li>First Name: {userData.firstName}</li>
            <li>Last Name: {userData.lastName}</li>
            <li>Gender: {userData.gender}</li>
            
         </ul>
         </>
        }
    </div>
  )
}

export default Profile