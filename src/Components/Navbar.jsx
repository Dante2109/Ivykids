import { Flex, Heading ,Button} from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../REdux/action';


const Navbar = () => {
    const {isAuth}=useSelector(store=>store.reducer)
    const dispatch=useDispatch()
    const nav=useNavigate();
    const navi=()=>{
        nav("/")
    }
    console.log(isAuth)
  return (
  <Flex p="20px" bgColor={"red"} color="white">
    <Flex justifyContent={'space-between'} w="100%" alignItems={"center"}>
    <Heading as="h2">IvyKids</Heading>
    <Flex gap="20px" alignItems={"center"}>
    {!isAuth?(<NavLink to="/">Login & Signup</NavLink>):<Button onClick={()=>dispatch(logout(navi))} color="black">Logout</Button>}
    <NavLink to="/contacts">Contacts</NavLink>
    </Flex>
    </Flex>
  </Flex>
  );
}

export default Navbar;