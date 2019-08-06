// tworzymy ten plik ponieważ chcemy system do wysyłania wiadomości

import mapObjectToArray from './mapObjectToArray'

export const getMessages = () => {
  
  return fetch('https://olninio.firebaseio.com/messages/.json')
      .then(r => r.json())
      .then(messagesInObj => {
        const messagesInArr = mapObjectToArray(messagesInObj)

        return messagesInArr
      })

}