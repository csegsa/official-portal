// import { auth } from './Firebase'
import React from 'react'
import { Redirect } from 'react-router-dom'

function ProtectedRoute({ children, isAdmin}) {
    console.log(isAdmin)
    return isAdmin ? children : <Redirect to="/login" />
}

export default ProtectedRoute