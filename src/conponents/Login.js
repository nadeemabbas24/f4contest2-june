import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector(state=>state.error)

    const submitHandler = (e)=>{
        e.preventDefault();
        let userName = e.target.username.value;
        let password = e.target.password.value;

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                         username: userName,
                        password: password,
    
                        })
                })
            .then(res => res.json())
            .then(data=> {
                console.log(data)
                if(data.message)
                    alert(data.message)
                else{  
                dispatch({type:'LOGIN', payload:data.id});
                navigate('/profile'); }
            })
            .catch(error=>{
                
                dispatch({type:'ERROR', payload:"Something went wrong!"});
            });
    }
  return (
    <div>
       
        {!error &&
        <>
        <h1>LOGIN</h1>
        <form onSubmit={submitHandler} className='myform'>
            <input type="text" placeholder="User Name" name="username"/>
            <input type="password" placeholder='Password' name="password"/>
            <button type='submit'>Login</button>
        </form>
        </>}
    </div>
  )
}

export default Login