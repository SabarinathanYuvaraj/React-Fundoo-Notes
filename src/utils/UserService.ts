import axios from "axios";
import { error } from "console";
import { Navigate } from "react-router-dom";

const configForUser = () => {
  const accessToken = localStorage.getItem("accessToken")
  const header = {
    headers : {
      "Content-Type" : "application/json",
      Authorization : accessToken 
    }
  }
  return header
}
  
export async function loginCall(data : {email:string,password:string}){
    await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login",
      data
    ).then(res => {
     
             const usertoken = res.data.id
             localStorage.setItem("accessToken",usertoken)
             localStorage.setItem("userName",res.data.firstName+res.data.lastName)
             localStorage.setItem("userEmail",res.data.email)
             return res
            
        }).catch(error => {
            const err = error.response.data.error.message
          });
        }


        export async function createUser(userObj: object) {
          await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
          userObj).then(res => {
             localStorage.setItem("accessToken", res.data.id);
          }).catch(
            error => {
              const err = error.response.data.error.message
            }
          )
        }

       