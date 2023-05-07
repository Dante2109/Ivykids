import { Input, Td,Tr, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { EditIcon,DeleteIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { deletee, edit } from '../REdux/action';
const TD = ({name,number,i,id}) => {
    const [n,sn]=useState(name)
    const [nu,snu]=useState(number)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch()
    const {token}=useSelector(store=>store.reducer)
  return (
    <>
    <Tr>
    <Td>{i}.</Td>
    <Td>{name}</Td>
    <Td>{number}</Td>
    <Td onClick={onOpen}><EditIcon/></Td>
    <Td onClick={()=>dispatch(deletee(id,token))}><DeleteIcon/></Td>
    </Tr>
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
    Name:<Input value={n} onChange={(e)=>sn(e.target.value)}></Input>    
   Number: <Input value={nu}  onChange={(e)=>snu(e.target.value)} type="number"></Input>    
    </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
        </Button>
        <Button variant='ghost'onClick={()=>dispatch(edit({name:n,number:nu},token,i-1,id,onClose))}>Change</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
    </>
  );
}

export default TD