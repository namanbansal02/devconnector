import React, { Fragment,useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    
  });

  const {email,password}=formData;

  const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value});
  const onSubmit=async e=>{
    e.preventDefault();
    
      console.log('SUCCESS');
    
  }

  return (
    <section className="container">
     <h1 className="large text-primary">Sign Up</h1>
    <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
    <form className="form" action="create-profile.html">
      
      <div className="form-group">
        <input type="email" placeholder="Email Address" name="email" value={email}
        onChange={e=>onChange(e)} required/>
        
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e=>onChange(e)}
          minLength="6"
        />
      </div>
      
      <input type="submit" className="btn btn-primary" value="Login" />
    </form>
    <p className="my-1">
      Dont't have an account? <Link to='/register'>Sign Up</Link>
    </p>
  </section>
  );
}; 

export default Login;
