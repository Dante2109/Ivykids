import { Box, Flex, Heading, Input, Button} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../REdux/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch=useDispatch()
    const {loading}=useSelector(store=>store.reducer)
    const nav=useNavigate()
    const init={
        username:"",
        password:""
    }
    const init2={
        username:"",
        password:"",
        cpassword:""
    }
    const [log,setLog]=useState(init)
    const [reg,setreg]=useState(init2)
    const [state,setState]=useState(false)
    const change=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
    }
    const changereg=(e)=>{
        setreg({...reg,[e.target.name]:e.target.value})
    }

    const logins=()=>{
        let naviga=()=>nav("/contacts")
        if(log.email!="" &&  log.password!="" ){
            dispatch(login(log,naviga))
        }else{
            alert("please fill all the details")
        }
    }
    const regists=()=>{
        let s=()=>setState(!state)
        if(reg.email!="" && reg.password!="" && reg.password===reg.cpassword){
            dispatch(register({username:reg.username,password:reg.password},s))
        }else{
            alert("Please all the details correctly")
        }
    }
  return (
    <Box width={"500px"} m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" mt="200px" p="10px">
        <Flex justifyContent={"space-evenly"}>
            <Box bgColor={state?"white":"black"} p="10px" color={state?"black":"white"} cursor="pointer" onClick={()=>setState(!state)}><Heading size="md">Login</Heading></Box>
            <Box bgColor={state?"black":"white"} p="10px" color={state?"white":"black"} cursor="pointer" onClick={()=>setState(!state)}><Heading size="md">Sign Up</Heading></Box>
        </Flex>
        {!state?<Flex width="80%" m="auto" flexDir={"column"} p="10px" gap="5px">     
                <Input placeholder='email' type='email' onChange={change} value={log.username} name="username" ></Input>
                <Input placeholder='password' type="password"onChange={change} value={log.password} name="password" ></Input>
                <Button onClick={logins} disabled={loading}>{loading?"...Logging":"Login"}</Button>
        </Flex>:<Flex width="80%" m="auto" flexDir={"column"} p="10px" gap="5px">
        <Input placeholder='email' type="email" onChange={changereg} value={reg.username} name="username" ></Input>
        <Input placeholder='password' type="password"onChange={changereg} value={reg.password} name="password" ></Input>
        <Input placeholder='Confirm password' type="password" onChange={changereg} value={reg.cpassword} name="cpassword" ></Input>
        <Button onClick={regists} disabled={loading}>{loading?"...Registering":"Register"}</Button>
            </Flex>
        }
    </Box>
  );
}

export default Login;