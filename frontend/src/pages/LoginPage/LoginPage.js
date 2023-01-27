import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(defaultValues, loginUser);

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError, reset]);

  return (
    <div>
      <header className='header'>
        <nav className='header-nav group'>
          <ul className='header-list group'>
            <li>
            <Link to="/register">Sign up</Link>
            </li>
            <li>
              <a href='/login' className='header-list-bold'>
                Log in
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className='content group'>
        <section className='content-main'>
          <h1 className='main-header'>
          <a href='/'>Log in to Fin
          <small className='text-muted'>SMART</small></a>
            </h1>

          <form className='form group' onSubmit={handleSubmit}>
            {isServerError}
            <fieldset className='form-fieldset'>
              <div className='input'>
                <label>Username</label>
                <input id='form-email' 
                type='text' 
                name='username'
                value={formData.username}
                onChange={handleInputChange} 
                />
              </div>

              <div className='input'>
                <label>Password</label>
                <input
                  id='form-password'
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className='submit'>
                <button onClick={() => navigate("/login")}>LOG IN</button>
              </div>
            </fieldset>
          </form>

          <form className='form group' onSubmit={handleSubmit}>
            <input type='hidden' name='user[email]' value='test@test.com' />
            <input type='hidden' name='user[password]' value='password' />
          </form>
        </section>

        <section className='login-content-sidebar'>
          <p className='content-sidebar-link'>Don't have an account?</p>
          <a className='signup-link' href='/register'>
            Sign up now for free
          </a>
        </section>
      </main>
    </div>
    );
};

export default LoginPage;