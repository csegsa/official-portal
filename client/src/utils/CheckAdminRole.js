import csegsaApi from 'api/csegsaApi.js'

export default async function checkAdminRole(user, loading, error, auth) {
    if (user) {
        console.log('Checking if user can be access')
        console.log(user, loading, error)
        const token = await auth.currentUser.getIdToken()
        csegsaApi
            .get('/roles' + '?email=' + user.email, { headers: { authorization: 'Bearer ' + token } })
            .then(res => {
                console.log(res.data)
                if (res.data.role === 'admin') {
                    return true
                }
            })
    } else if (loading) {
        console.log('auth state Loading')
        return false
    } else if (error) {
        console.log('Error')
        return false
    } else {
        console.log('No user')
        return false
    }
}