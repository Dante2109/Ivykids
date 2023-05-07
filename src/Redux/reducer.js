import { LOADING, LOGIN,REGISTER,ERROR,GET,EDIT,ADD,DEL } from "./actionTypes"
let token=localStorage.getItem("token") || ""
const init={
    loading:false,
    error:false,
    data:[],
    token,
    isAuth:token?true:false
}
export const reducer=(state=init,action)=>{
    const {payload,type}=action
    switch(type){
        case LOGIN:{
            localStorage.setItem("token",payload)
            return {...state,loading:false,isAuth:true,token:payload}
        }
        case REGISTER:{
            return {...state,loading:false}
        }
        case LOADING:{
            return {...state,loading:true}
        }
        case ERROR:{
            return {...state,error:true,loading:false}
        }
        case GET:{
            return {...state,data:payload,loading:false}
        }
        case ADD:{
            let data=[...state.data,payload]
            return {...state,data}
        }
        case EDIT:{
            let data=state.data.map((el,i)=>{
                if(i==payload.i){
                    return payload.body
                }
                return el
            })

            return {...state,data,loading:false}
        }
        case DEL:{
            let data=state.data.filter((el)=>{
                return el._id!==payload
            })
            return {...state,data,loading:false}
        }
        default:{
            return state
        }
    }
}