import jwt from 'jsonwebtoken'

const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPsmFvE6zGn46Lk_Z3143D0ajsO41W_ak'
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBPsmFvE6zGn46Lk_Z3143D0ajsO41W_ak'

export const logIn = (email, password) => {
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
    
      return data
    })
}

export const isUserLoggedIn = () => {
  const idToken = localStorage.getItem('idToken')
  return idToken ? true:false
}

export const getLoggedInUser = () => {
  if (!isUserLoggedIn()) return null

  const idToken = localStorage.getItem('idToken')
  
  return jwt.decode(idToken)
}

export const fetchWithToken = (url, options) => {
  const idToken = localStorage.getItem('idToken')

  const authString = idToken ? '?auth=' + idToken : ''

  return fetch(
    url + authString,
    options
  )
  // to jest funkcja ktora robi to samo co fetch, sprawdzamy czy jest w local storage idToken
}




