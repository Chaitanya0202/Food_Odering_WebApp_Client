import React from 'react'
import { Link } from 'react-router-dom'

function Wellcome() {
  return (
    <>
    <div><h1>Wellcome In QuickBite</h1></div>
    <Link className='btn btn-outline-success mx-3' to={"/signUp"}>Sign Up</Link>
    <Link className='btn btn-outline-success' to={"/logIn"}>Log In</Link>
    
    </>
  )
}

export default Wellcome