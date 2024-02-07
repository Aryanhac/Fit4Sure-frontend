import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({children}) => {
    const {isAuthenticated} = useSelector((state)=>state.user);
   
   
  return (<>
    {isAuthenticated===false? <Navigate replace to='/'></Navigate>:children}
  </>
  )
}

export default ProtectedRouter
