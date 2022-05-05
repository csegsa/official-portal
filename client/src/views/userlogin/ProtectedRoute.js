// import { auth } from './Firebase'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import checkAdminRole from '../../utils/CheckAdminRole'
import { auth } from '../../views/userlogin/Firebase'

function ProtectedRoute({ children, isAdmin}) {
    // const [user, , loading, error] = useAuthState(auth)
    // const [isAdmin, setAdmin] = React.useState(false)

    // async function checkAdminStatus() {
    //     if (user) {
    //         const isAdminCheck = await checkAdminRole(user, loading, error, auth)
    //         if (isAdminCheck) {
    //             setAdmin(true)
    //             console.log("[Protected]:: isAdmin")
    //         } else {
    //             setAdmin(false)
    //         }
    //     }
    // }

    console.log(isAdmin)

    // React.useEffect(async () => {
    //     console.log("opening protected route component")
    //     if (user) {
    //         await checkAdminStatus()
    //         console.log("awaiting done for check admin status")
    //     } 
    // }, [user])

    // return children

    return isAdmin ? children : <Redirect to="/login" replace />
  
}

export default ProtectedRoute