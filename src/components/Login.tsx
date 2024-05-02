import { useState } from 'react';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { loginCall } from '../utils/UserService';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidator, setEmailValidator] = useState(false);
  const [passwordValidator, setPasswordValidator] = useState(false);

  const handleLogin = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    setEmailValidator(!emailRegex.test(email));

    setPasswordValidator(password.length < 6);

    if (!emailValidator && !passwordValidator) {
       const res = loginCall({"email": email , "password" : password})
      console.log("Email and password are valid. Logging in...");
    }
  };

  return (
    <div className="mx-auto w-96 mt-40">
      <div className="rounded-md shadow p-5 space-y-4">
        <h1 className="text-center text-2xl font-medium text-orange-500">Fundo</h1>
        <h2 className="text-center text-xl font-medium">Sign in</h2>
        <h3 className="text-center text-lg font-medium">Use your Fundoo Account</h3>
        <div className="mt-8">
          <TextField
            fullWidth
            id="login-body-email-field"
            label="Email or phone*"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailValidator && <div className="text-red-500 text-left mt-1">Invalid email address</div>}
        </div>
        <div className="mt-8">
          <TextField
            fullWidth
            id="login-body-password-field"
            label="Password*"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordValidator && <div className="text-red-500 text-left mt-1">Password should have at least 6 characters</div>}
          <p className="text-blue-700 cursor-pointer mt-2 ml-[-225px] ">Forget password</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          
          <p className="text-blue-700 cursor-pointer">Create Account</p>
          <button className="bg-blue-700 text-white py-1 px-4 rounded hover:bg-blue-800" onClick={handleLogin}>Login</button>
        </div>
      </div>
      <div className="flex justify-between items-end text-sm mt-4 text-gray-800 font-medium">
        <div className="flex">
          English (United States)
          <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
        </div>
        <div>Help</div>
        <div>Privacy</div>
        <div>Terms</div>
      </div>
    </div>
  );
}

export default Login;
