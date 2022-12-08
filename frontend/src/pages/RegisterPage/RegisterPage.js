import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./RegisterPage.css"

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    email: "",
    password: "",
  };

  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div>
      <header className='header'>
        <nav className='header-nav group'>
          <h1 className='header-logo'></h1>

          <ul className='header-list group'>
            <li>
              <a href='/register' className='header-list-bold'>
                Sign up
              </a>
            </li>
            <li>
              <a href='/login'>Log in</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='content group'>
        <section className='content-main'>
          <h1 className='main-header'>
            See all your finances in one place & create a budget
          </h1>

          <form className='form group' onSubmit={handleSubmit}>
            <fieldset className='form-fieldset'>
              <div className='input'>
                <label>Your Email</label>
                <input id='form-email' 
                type='text' 
                name='user[email]'
                value={formData.email}
                onChange={handleInputChange} 
                />
              </div>

              <div className='input'>
                <label>Password</label>
                <input
                  id='form-password'
                  type='password'
                  name='user[password]'
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className='submit'>
                <button>SIGN UP</button>
              </div>
            </fieldset>
          </form>
        </section>
        <section className='content-sidebar'>
          <h1 className='sidebar-header'>Why you'll love it</h1>

          <ul className='sidebar-list'>
            <li>See all your accounts in one place</li>
            <li>Set a budget and pay down your debt</li>
            <li>Find the best ways to grow your money</li>
            <li>Stay safe and secure</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default RegisterPage;
