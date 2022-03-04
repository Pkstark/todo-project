import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const pk = {
            username : username,
            password : password
        }
        console.log(pk);

        axios.post("http://localhost:8080/login" , pk).then((data)=>{
            console.log(data)
            if(data.data.error){
                alert(data.data.error)
            }
            else{
                navigate(`/todo/${data.data.username}`);
            }
        }).catch((err) => {
            console.log(err)
            alert("something went to wrong")
        })

        let pk1 = document.getElementById('p');
        pk1.value = "";
        let pk2 = document.getElementById('p1');
        pk2.value = "";

    }

  return (
    <div className='container'>
              <div className='row style1'>
                    <div className='col s8 offset-s2'>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <h4 className='center'>Login</h4>
                                        <div className='col s12' >
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix">account_circle</i>
                                                <input type="text" id='p' placeholder='UserName' name='username' onChange={ (e)=>setUsername(e.target.value)} required />
                                            </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">visibility</i>
                                            <input type="password" id='p1' placeholder='Password' name='password' onChange={ (e)=>setPassword(e.target.value)} required />
                                        </div>
                                        </div>
                                    </div>
                                    <div className='center'>
                                      <button className="btn center" type='submit'>Login</button>
                                    </div>
                                    <br/>
                                    <div>
                                        <p className='center des'>
                                            You Don't have a Account &nbsp;&nbsp; <a href='/reg'> Register here !!</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Login