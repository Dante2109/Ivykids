import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
  <Flex p="20px" bgColor={"red"} color="white">
    <Flex justifyContent={'space-between'} w="100%" alignItems={"center"}>
    <Heading as="h2">IvyKids</Heading>
    <Flex gap="20px">
    <NavLink to="/">Login & Signup</NavLink>
    <NavLink to="/contacts">Contacts</NavLink>
    </Flex>
    </Flex>
  </Flex>
  );
}

export default Navbar;