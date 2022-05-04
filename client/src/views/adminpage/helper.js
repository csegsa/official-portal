export async function getRoles(auth, csegsaApi, setInput) {
    console.log("making api call to check admin")
      const token = await auth.currentUser.getIdToken()
      csegsaApi.get('/roles/all', { headers: { authorization: 'Bearer ' + token } })
      .then(res => {
        console.log(res.data)
        const roles = res.data
        // roles.map(role => role['name'] = role['email'].split("@")[0])
        // console.log(roles)
        
        setInput(res.data)
      })
}

// async function deleteRole(auth,email) {
//     console.log("making api call to check admin")
//       const token = await auth.currentUser.getIdToken()
//       csegsaApi.delete('/roles', {
//         email: email
//       }, { headers: { authorization: 'Bearer ' + token } })
//       .then(res => {
//         console.log(res.data)
//         setInput(input.filter(item => item.email !== email));
//       })
// }