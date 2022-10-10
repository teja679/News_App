import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'

const SignUp = () => {
  const {register, handleSubmit, errors } =  useForm()
  const [userInfo, setUserInfo] = useState()
  const onSubmit = (data) => {
    setUserInfo(data)
    console.log(data)
  }
  return (
    <div className='sign-up'>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up Form</h1>
          <hr />
          <div className='ui divider'></div>
          <div className='field'>
            <label>Username</label>
            <input type="text" name='username' placeholder='Username' />
          </div>
          <div className='field'>
            <label>Email</label>
            <input type="email" name='email' placeholder='Email' />
          </div>
          <div className='field'>
            <label>Password</label>
            <input type="password" name='password' placeholder='Password' />
          </div>
          <button className='fluid ui button blue'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp