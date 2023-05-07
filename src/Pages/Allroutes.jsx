import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import PrivateAuth from '../Components/PrivateAuth';
import Contacts from "./Contacts"
const Allroutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/contacts" element={<PrivateAuth><Contacts/></PrivateAuth>}/>
  </Routes>
  );
}

export default Allroutes
