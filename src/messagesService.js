// tworzymy ten plik ponieważ chcemy system do wysyłania wiadomości

import mapObjectToArray from './mapObjectToArray'

const URL = 'https://olninio.firebaseio.com/messages'

export const getMessages = () => {

  return fetch(URL + '.json')
    .then(r => r.json())
    .then(messagesInObj => {
      const messagesInArr = mapObjectToArray(messagesInObj)

      return messagesInArr
    })
}

export const addMessage = (newMessage) => {
  return fetch(
    (URL+'.json'),
    {
      method: 'POST',
      body: JSON.stringify(newMessage)
    }
  )
}

export const deleteMessage = (messageKey) => {
  return fetch(
    URL+'/'+messageKey+'.json',
    {
      method: 'DELETE'
    }
  )
}