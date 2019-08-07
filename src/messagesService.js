// tworzymy ten plik ponieważ chcemy system do wysyłania wiadomości

import { fetchWithToken } from './authService'
import mapObjectToArray from './mapObjectToArray'

const URL = 'https://olninio.firebaseio.com/messages'

export const getMessages = () => {

  return fetchWithToken(URL + '.json')
    .then(r => r.json())
    .then(messagesInObj => {
      const messagesInArr = mapObjectToArray(messagesInObj)

      return messagesInArr
    })
}

export const addMessage = (newMessage) => {
  return fetchWithToken(
    (URL+'.json'),
    {
      method: 'POST',
      body: JSON.stringify(newMessage)
    }
  )
}

export const deleteMessage = (messageKey) => {
  return fetchWithToken(
    URL+'/'+messageKey+'.json',
    {
      method: 'DELETE'
    }
  )
}