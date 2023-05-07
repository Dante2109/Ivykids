import React, { useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { add } from "../REdux/action"
export const ADD=() =>{
    const [n,sn]=useState("")
    const [nu,snu]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch();
    const {token}=useSelector(store=>store.reducer)
    return (
      <>
        <Button onClick={onOpen}>Add contact</Button>
  
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
              <Button variant='ghost' onClick={()=>dispatch(add({name:n,number:nu},token,onClose))}>ADD</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
