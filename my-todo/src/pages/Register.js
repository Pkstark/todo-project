import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    
    const [username, setUsername] = useState(null)
    const [emails, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const pk = {
            username : username,
            email : emails,
            password : password,
        }
        console.log(pk);

        axios.post("http://localhost:8080/register" , pk).then((data)=>{
            console.log(data)
            if(data.data.error){
                alert(data.data.error)
            }
            else{
                navigate("/log")
                alert("register successfully! Please Login")
            }
        }).catch((err) => {
            console.log(err)
            alert("something went to wrong")
        })

        let x = document.getElementById('a');
        x.value = "";
        let y = document.getElementById('b');
        y.value = "";
        let z = document.getElementById('c');
        z.value = "";
    }


  return (
    <div>
        <div className='container'>
        <div className='row res1'>
                    <div className='col s8 offset-s2'>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <h4 className='center'>Register Form</h4>
                                        <div className='col s12' >
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input type="text" id='a' placeholder='UserName' name='username' onChange={ (e)=>setUsername(e.target.value)} required />
                                            </div>
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">mail</i>
                                                <input type="text" id='b' placeholder='Email'  name='email' onChange={ (e)=>setEmail(e.target.value)} required/>
                                            </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">visibility</i>
                                            <input type="password" id='c' placeholder='Password' name='password' onChange={ (e)=>setPassword(e.target.value)} required />
                                        </div>
                                        </div>
                                        <div>
                                            <p className='center'>Already have a Account ? &nbsp;<a href='/log'>Login here !!!</a></p>
                                        </div><br/>
                                    </div>
                                    <div className='center'>
                                      <button className="btn center" type='submit'>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Register