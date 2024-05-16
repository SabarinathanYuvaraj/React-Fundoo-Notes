import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/signup-logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { createUser } from '../utils/UserService';

function Signup() {
  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")
  const[userName, setUserName] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[firstNameValidator,setFirstNameValidator] =useState(false)
  const[lastNameValidator,setLastNameValidator] =useState(false)
  const[userNameValidator, setUserNameValidator] = useState(false)
  const [passwordValidator, setPasswordValidator] = useState(false);
  const [ConfirmPasswordValidator, setConfirmPasswordValidator] = useState(false);
  const [passwordComparison , setPasswordComparison] = useState(false)

    const navigate = useNavigate()

    function handleSignUp(){
      setFirstNameValidator(firstName.length<4)
      setLastNameValidator(lastName.length<4)
      setUserNameValidator(userName.length<5)
      setPasswordValidator(password.length<6)
      setConfirmPasswordValidator(confirmPassword.length<6)

      if (password !== confirmPassword) {
        setPasswordComparison(true);
      } else {
        setPasswordComparison(false);
      }

      if(!firstNameValidator && !lastNameValidator && !userNameValidator && !passwordValidator && !ConfirmPasswordValidator && !passwordComparison){
        const userObj = {
          "firstName": firstName,
          "lastName": lastName,
          "email": userName,
          "password": password,
          "service" : "advance"
        }
       const newUser = createUser(userObj)
       navigate("/")
       console.log("signup successfully , moving to login page");
      }
   
      
    }





  return (
    <div className="signup h-520 w-500 mt-40 mx-auto flex flex-col justify-center items-center">
    <div className='signup-body-content'>
    <div className="signup-body flex rounded-md border border-gray-300 shadow p-5 space-y-4">
        <div className="signup-body-register-fields w-96">
          <div className="signup-body-register-fields-header1 text-orange-500 text-2xl font-medium">Fundo</div>
          <div className="signup-body-register-fields-header2 text-xl font-medium">Create your Fundoo Account</div>
          <div className="signup-body-register-name-field mt-8 flex justify-between gap-8">
      <div className='firstname-field flex flex-col'>
      <TextField id="signup-body-register-first-name-field" label="First Name*" variant="outlined" className="w-42%" onChange={(e) => setFirstName(e.target.value)} />
      {firstNameValidator && <div className='text-red-500 text-left mt-1'>firstname is required </div>}
      </div>
      <div className='lastname-field flex flex-col'>
      <TextField id="signup-body-register-last-name-field" label="Last Name*" variant="outlined" className="w-42%" onChange={(e) => setLastName(e.target.value)} />
      {lastNameValidator && <div className='text-red-500 text-left mt-1'>lastname is required </div>}
      </div>
</div>
 
     


          <div className="signup-body-register-user-name-field mt-8">
            <TextField id="user-name-field" label="Username*" variant="outlined" className="w-full"  onChange={(e) => setUserName(e.target.value)}/>
          </div>
          {userNameValidator && <div className='text-red-500 text-left mt-1'>username must atleast contain four characters </div>}

          <div className="signup-body-register-password-field mt-8">
            <div className="signup-body-register-password-text-field flex justify-between gap-8">
              
              <div className='signup-password flex flex-col'>
              <TextField id="signup-body-register-new-password-field" label="Password*" variant="outlined" className="w-45" onChange={(e) => setPassword(e.target.value)}/>
              {passwordValidator && <div className='text-red-500 text-left mt-1'>password is required </div>}
              </div>

              <div className='signup-confirm-password flex flex-col'>
              <TextField id="signup-body-register-confirm-password-field" label="Confirm*" variant="outlined" className="w-45 ml-4" onChange={(e) => setConfirmPassword(e.target.value)}/>
              {ConfirmPasswordValidator && <div className='text-red-500 text-left mt-1'> confirm password is required </div> }
              </div>
            </div>
            {passwordComparison && <div className='text-red-500 text-left mt-1'>both password and confirm password must be same </div>}



          </div>
          <div className="signup-body-register-action-field mt-8 flex justify-between items-center">
            <p className="signup-body-register-action-signin-field text-blue-700 cursor-pointer">Sign in instead</p>
            <button className="signup-body-register-action-register-button-field bg-blue-700 text-white py-1 px-4 rounded hover:bg-blue-800" onClick={handleSignUp}>Register</button>
          </div>
        </div>
        <div className="signup-body-logo w-66">
          <div className="signup-body-logo-container">
            <img src={logo} alt="" height={400} width={300} className="signup-body-logo-image "/>
          </div>
          <p className="signup-body-logo-description text-lg font-small text-center w-60 mx-auto  mr-38">One account. All of Fundo working for you.</p>
        </div>
      </div>
    </div>

    
      <div className="signup-footer w-500 flex justify-between text-sm text-gray-700 font-medium mt-1 mr-20">
        <div className="signup-footer-description1 w-80 mr-60">English (United States)<FontAwesomeIcon id="caret-icon" className='caret-icon ml-1' icon={faCaretDown} /></div>
        <div className="signup-footer-description2 w-20">Help</div>
        <div className="signup-footer-description3 w-20">Privacy</div>
        <div className="signup-footer-description4 w-20">Terms</div>
      </div>
      </div>




  );
}

export default Signup;
