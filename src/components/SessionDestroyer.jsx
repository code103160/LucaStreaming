import React, { useState } from 'react'
import Logout from '../functions/Logout'
import { useNavigate } from 'react-router-dom';

export default function SessionDestroyer() {

  const navegar = useNavigate();
  const mail = useState(sessionStorage.getItem("streamingEmail"));
  const toke = useState(sessionStorage.getItem("streamingToken"));

  function clear() { sessionStorage.clear();}

  return (
    <button className="btn btn-danger" onClick={() => {let err = Logout(mail, toke); console.log(err['message']); clear(); navegar(`/`);}}> Log Out </button>
  )
}

