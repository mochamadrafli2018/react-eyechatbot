import bot from '../img/bot.png'
import user from '../img/user.png'

export default function addChat(input, reply) {
  const messagesContainer = document.getElementById('messages')
  // create element for user reply
  const userDiv = document.createElement('div')
  userDiv.id = 'user'
  userDiv.className = 'user bg-blue-baby my-2 px-2 py-2'
  userDiv.innerHTML =
  `
    <img src=${user} class='avatar mx-1'>
    <span class='mx-1 text-right text-dark'>${input}</span>
  `
  // add userDiv to messagesContainer
  messagesContainer.appendChild(userDiv)

  // create div element for bot reply
  const botDiv = document.createElement('div')
        botDiv.id = 'bot'
        botDiv.className = 'bot bg-ivory my-2 px-2 py-2'
  // create bot image element
  const botImg = document.createElement('img')
        botImg.src = bot
        botImg.className = 'avatar'
        botDiv.appendChild(botImg)    
  // create text element
  const botText = document.createElement('span')    
        botText.className = 'mx-1 text-right text-dark'
        botText.innerText = 'Mengetik...'
        botDiv.appendChild(botText)    
  // add botDiv to messagesContainer
  messagesContainer.appendChild(botDiv)

  // Keep messages at most recent
  // messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight 
  messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
  // Fake delay to seem 'real'
  setTimeout(() => {
    botText.innerHTML = `${reply} <span class='yt'>y/t</span>`
  }, 300)
}