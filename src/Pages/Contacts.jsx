import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../REdux/action';
import TD from '../Components/TD';
import { ADD } from '../Components/Add';
const Contacts = () => {
    const {token,data}=useSelector(store=>store.reducer)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(get(token))
    },[])

  return (
    <Box w="70%" m="auto" mt="50px">
        <Heading as={"h1"}>Contact list</Heading>
        <Box alignSelf={"right"}>
            <ADD></ADD>
        </Box>
        {data.length?<TableContainer>
<Table variant='striped'>
    <TableCaption>All the contacts that you have created are listed here</TableCaption>
    <Thead>
      <Tr>
        <Th>S.no</Th>
        <Th>Name</Th>
        <Th>Contact No.</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody> 
        {data.map((el,i)=>{
            return(<TD key={i} name={el.name} number={el.number} i={i+1} id={el._id}></TD>)
        })}
    </Tbody>
    <Tfoot>
      <Tr>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>:<Heading>No Contacts!</Heading>}
    </Box>
    
  );
}

export default Contacts;
