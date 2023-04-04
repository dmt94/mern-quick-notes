import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css';
import { useState } from 'react';

export default function AuthPage({ user, setUser }) {
  const [toggle, setToggle] = useState(false);

  function handleSignUpView() {
    setToggle(!toggle);
  }

  return (
    <>
      <main>
        <button className='sign-up-toggle' onClick={ handleSignUpView }>
          {toggle ? "View Login" : "View Sign Up"}
          </button>
        {
          toggle ? 
            <SignUpForm setUser={ setUser } /> 
            : 
            <LoginForm setUser={ setUser } />
        }        
      </main>
    </>
  );
}