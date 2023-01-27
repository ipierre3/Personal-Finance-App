import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import "./RegisterPage.css"

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  };

  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div>
      <header className='header'>
        <nav className='header-nav group'>
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
          <h1 className='main-header'>All your finances in one place</h1>
          <form className='form group' onSubmit={handleSubmit}>
            <fieldset className='form-fieldset'>
            <div className='input'>
                <label>
                Username:{" "}
                </label>
                <input 
                type='text' 
                name='username'
                value={formData.username}
                onChange={handleInputChange} 
                />
              </div>

              <div className='input'>
                <label>
                  Email:{" "}
                </label>
                <input id='form-email' 
                type='text' 
                name='email'
                value={formData.email}
                onChange={handleInputChange} 
                />
              </div>

              <div className='input'>
                <label>
                  Password:{" "}
                </label>
                <input
                  id='form-password'
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className='input'>
                <label>
                  First Name:{" "}
                  </label>
                <input
                type='text' 
                name='first_name'
                value={formData.first_name}
                onChange={handleInputChange} 
                />
              </div>

              <div className='input'>
                <label>
                  Last Name:{" "}
                  </label>
                <input 
                type='text' 
                name='last_name'
                value={formData.last_name}
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
          <h1 className='sidebar-header'>
            Safety & Security
          </h1>
        </section>
      </main>
    </div>
  );
};

export default RegisterPage;
