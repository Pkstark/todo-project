import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='container'>
        <div className='row wel'>
            <div className='col s8 offset-s2'>
                <div className='card '>
                    <div className='card-content center'>
                        <h5>Welcome to the Todo App</h5><br/>
                        <p>You can update the Daily routains and finish your task</p>
                    </div><br/>
                    <div className='card-action center'><br/><br/>
                        <Link to= "/log"><button className='btn'>Login</button></Link>&nbsp;&nbsp;&nbsp;
                        <Link to= "/reg"><button className='btn'>Register</button></Link><br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome