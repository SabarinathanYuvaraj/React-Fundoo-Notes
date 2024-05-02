import axios from "axios";

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

