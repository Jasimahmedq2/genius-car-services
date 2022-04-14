import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Registerd.css'
import auth from '../../firebase.init';
const Registerd = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate()
  const handlelogin = () => {
    navigate('/login')
  }

  if(user){
    navigate('/home')
  }

  const handleRegisterd = event => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password)
  }

  return (
    <div className='w-50 mx-auto'>
      <form className='form-container' onSubmit={handleRegisterd}>
        <input type="text" name="name" id="" placeholder='whats your name'/>
         <input type="email" name="email" id="" placeholder='please give your email' />
       <input type="password" name="password" id="" placeholder= 'password' />
       <input type="submit" value="submite" />
      </form>
      <p>already have a account? <Link to={'/login'} onClick={handlelogin} className="text-primary text-decoration-none">login</Link> </p>
    </div>
  );
};

export default Registerd;