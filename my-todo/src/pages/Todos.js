import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Todos() {

    const [mytodo, setMyTodo] = useState(null);
    const [info, setInfo] = useState(null);

    const navigate = useNavigate();

    const useparams = useParams("id");

    console.log(useparams)
    const todo = () => {
        navigate(`/todos/${useparams.id}`);
    }    

    const logout = () => {
        navigate('/log')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const pk = {
            username : useparams.id,
            text : mytodo
        }
        console.log(pk);

        axios.post("http://localhost:8080/Todoadded" , pk).then((data)=>{
            console.log(data)
            alert("posted successfully ! Please Go and Check MyTodos")
        }).catch((err) => {
            console.log(err)
            alert("something went to wrong")
        })


        let cc = document.getElementById('tr');
        cc.value = ""

    }

    const getData = (e) => {
        e.preventDefault();

        const pk1 = {
            username : useparams.id,
            password : info            
        }
        console.log(pk1)

        axios.put("http://localhost:8080/PasswordUpdate",pk1).then((data)=>{
            console.log(data)
        }).catch((err) => {
            console.log(err)
            alert("something went to wrong")
        })

        let bb = document.getElementById('ch');
        bb.value = ""
    }

    const activate = () => {
        var elems = document.querySelectorAll('.modal');
        var trigger = M.Modal.init(elems, {});

    }

    const deleteAccount = (e) => {
        e.preventDefault();

        const pk2 = {
            username : useparams.id
        }

        axios.post("http://localhost:8080/userdelete", pk2).then((data) => {
            console.log(data)
            console.log("Account deleted Successfully")
            navigate("/log")
        }).catch((err)=>{
            console.log(err);
            console.log("some thing wrong")
        })
    }


    return (
    <div>

<nav class="nav-wraper st">
            <div class="container">
            <div>
            <a href="/rr" className="brand-logo left">Todo List </a>
            <p className='st2 right brand-logo'>Welcome, &nbsp;&nbsp;{useparams.id}</p>
            </div>
        </div>
        </nav>
        <ul className="sidenav des1" id="resposive"><br/><br/>
            <li> <button className='btn st1 modal-trigger' data-target="change" onClick={activate}><a href='#change' className='st4'>Change Password</a></button></li><br/><br/>
            <li> <button className='btn st1' onClick={todo}> My Todos</button></li><br/><br/>
            <li> <button className='btn st1 modal-trigger' data-target="change1" onClick={activate} >Delete Account</button> </li><br/><br/>
            <li> <button className='btn st1' onClick={logout}> Logout</button></li><br/><br/>
        </ul>

        <div className='container'>
              <div className='row st3'>
                    <div className='col s8 offset-s4'>
                        <div className='card'>
                            <div className='card-content'>
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <h4 className='center'>Todo Task</h4>
                                        <div className='col s12' >
                                            <div className="input-field col s12">
                                                <input type="text" id='tr' placeholder='write something' onChange={ (e)=>setMyTodo(e.target.value)} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='center'>
                                      <button className="btn center" type='submit'>Add Task</button>
                                    </div>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>


    <div id="change" className="modal">
    <form onSubmit={getData}>
        <div className="modal-content">
            <h4 className='center'>Change Password</h4>
            <input type="text" id='ch' placeholder = "Enter a New Password" onChange={(e) => setInfo(e.target.value)}  required/>
        </div>
        <div className="modal-footer">
            <button type='submit' className='btn mod modal-close'>Update</button>
        </div>
    </form>
    </div>

    <div id="change1" className="modal">
    <form>
        <div className="modal-content">
            <h4 className='center'>Delete Your Account</h4>
            <p className='center'>Are You Sure ? you wnat to Delete your Account...!!!</p>
        </div>
        <div className="modal-footer">
            <button type='submit' className='btn mod modal-close' onClick={deleteAccount}>Delete</button>
        </div>
    </form>
    </div>


    </div>
  )
}

export default Todos