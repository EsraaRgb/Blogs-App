import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form  className="loginForm">
        <input type="text" name="email" id="email" placeholder='Email' className='loginInput'/>
        <input type="password" name="password" id="password"placeholder='Password' className='loginInput'/>
      </form>
      <button className='loginBtn'>Login</button>
    </div>
  )
}
