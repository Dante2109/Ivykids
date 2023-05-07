import {ERROR, LOADING, LOGIN, REGISTER,GET, EDIT,ADD,DEL,LOGOUT} from "./actionTypes"
import axios from "axios";
export const login=(obj,nav)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await axios.post("https://red-awful-coral.cyclic.app/users/login",obj)
        data=data.data;
        dispatch({type:LOGIN,payload:data.token})
        console.log(data)
        nav()
    } catch (error) {
        dispatch({type:ERROR})
        alert("Wrong Credentials") 
    }
}
export const logout=(n)=>async(dispatch)=>{
    dispatch({type:LOGOUT});
    n()
}
export const register=(obj,s)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await axios.post("https://red-awful-coral.cyclic.app/users/register",obj)
        data=data.data;
        dispatch({type:REGISTER,payload:data.token})
        s()
    } catch (error) {
        dispatch({type:ERROR})
        alert(error) 
    }
}
export const get=(token)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        let data=await axios.get("https://red-awful-coral.cyclic.app/contact",{
            headers:{
                Authorization:token
            }
        })
        data=data.data;
        dispatch({type:GET,payload:data})
    } catch (error) {
        dispatch({type:ERROR})
        alert(error) 
    }
}
export const edit=(body,token,i,id,close)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        let data=await axios.patch(`https://red-awful-coral.cyclic.app/contact/${id}`,body,{
            headers:{
                Authorization:token
            }
        })
        data=data.data;
        dispatch({type:EDIT,payload:{i,body}})
        close()
        alert("Updated successfully")
    } catch (error) {
        dispatch({type:ERROR})
        alert(error) 
    }
}
export const add=(body,token,close)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        let data=await axios.post(`https://red-awful-coral.cyclic.app/contact/`,body,{
            headers:{
                Authorization:token
            }
        })
        data=data.data;
        dispatch({type:ADD,payload:body})
        close()
        alert("Added successfully")
    } catch (error) {
        dispatch({type:ERROR})
        alert(error) 
    }
}
export const deletee=(id,token)=>async(dispatch)=>{
    dispatch({type:LOADING})
    try {
        let data=await axios.delete(`https://red-awful-coral.cyclic.app/contact/${id}`,{
            headers:{
                Authorization:token
            }
        })
        data=data.data;
        dispatch({type:DEL,payload:id})
        close()
        alert("Deleted successfully")
    } catch (error) {
        dispatch({type:ERROR})
        alert(error) 
    }
}