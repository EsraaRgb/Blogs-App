import './signup.css'

export default function SignUp() {
  return (
    <div className='signup'>
      <span className="signupTitle">sign Up </span>
      <form  className="signupForm">
        <input type="text" name="firstName" id="firstName" placeholder='First Name' className='signupInput'/>
        <input type="text" name="lastName" id="lastName"placeholder='Last Name' className='signupInput'/>
        <input type="email" name="email" id="email"placeholder='Email' className='signupInput'/>
        <input type="password" name="password" id="password"placeholder='Password' className='signupInput'/>
        <input type="password" name="cpassword" id="cpassword"placeholder='Confirm Password' className='signupInput'/>
      </form>
      <button className='signupBtn'>Sign Up</button>
    </div>
  )
}