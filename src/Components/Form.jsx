import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { AuthContext } from '../Context/Auth.Context';


export const Form =()=>{
    const [user, setUser] = useState({email:"", password:""});
    const {toggleAuth, isLogin, setIsLogin} = useContext(AuthContext);
    const [token, setToken] = useState("");

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setUser({...user, [name]:value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    setIsLogin(true);
                    setToken(res.token);
                    toggleAuth();
                    alert("login Successful")
                    

                } 
            })
    }
    return isLogin ? (<div>login Success</div>) : (
        
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row">
            <input name="email" type="text" placeholder='Enter Email' onChange={handleChange}></input>
            <input name="password" type="password" placeholder='Enter Password' onChange={handleChange}></input>
         
            <Button variant="contained">Submit</Button>
         
            </Stack>
        </form>
    )
}
