import jwt from 'jsonwebtoken'

const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPsmFvE6zGn46Lk_Z3143D0ajsO41W_ak'
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPsmFvE6zGn46Lk_Z3143D0ajsO41W_ak'

const logIn = (email, password) => {
  return fetch(
    SIGN_IN_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        email: email, /*mogłoby być na zasadzie email,*/
        password: password, /*tak samo mogłoby byc samo password bo  zmienne nazywają się tak samo jak zmienne */
        returnSecureToken: true
      })
    }
  )
    .then(r => r.json()) 
    .then(data => {
      localStorage.setItem('idToken', data.idToken) 
      localStorage.setItem('refreshToken', data.refreshToken)  /* jest coś takiego jak refreshToken który słuzy do odświeżania tokena */
    })
}

const isUserLoggedIn = () => {
  const idToken = localStorage.getItem('idToken')
  return idToken ? true:false
}

const getLoggedInUser = () => {
  if (!isUserLoggedIn()) return null

  const idToken = localStorage.getItem('idToken')
  
  return jwt.decode(idToken)
}

const fetchIdToken = (url, options) => {
  const idToken = localStorage.getItem('idTokent')

  cosnt authString = idToken ? '?auth=' + idToken : ''
}


window.getLoggedInUser = getLoggedInUser /* sprawdzenie czy dobrze wszystko jest napisane i czy się prawidłowo się loguje*/

logIn('j.j.sawczuk@gmail.com', '123456789')
  .then(console.log)
  .catch(console.log)

