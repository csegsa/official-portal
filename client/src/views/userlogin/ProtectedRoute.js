// import { auth } from './Firebase'
import React from 'react'
import { Redirect } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children, isAdmin }) {
  console.log(isAdmin)
  return isAdmin ? children : <Redirect to="/login" replace />
}

export default ProtectedRoute
