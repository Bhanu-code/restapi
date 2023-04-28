import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    })
    )
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={email}
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password}
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          
          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login