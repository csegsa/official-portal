export async function getRoles(auth, csegsaApi, setInput) {
  console.log('making api call to check admin')
  const token = await auth.currentUser.getIdToken()
  csegsaApi.get('/roles/all', { headers: { authorization: 'Bearer ' + token } }).then(res => {
    console.log(res.data)
    setInput(res.data)
  })
}
