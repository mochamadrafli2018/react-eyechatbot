import bot from '../img/bot.png'
import user from '../img/user.png'
// make a inout and reply as a component
export default function addChat(input, reply) {
    const messagesContainer = document.getElementById('messages')
    // create element for user reply
    const userDiv = document.createElement('div')
    // create text element
    const userText = document.createElement('span')
    userDiv.id = 'user'
    userDiv.className = 'bg-warning border-5px rounded my-2 px-2 py-2'
    userDiv.innerHTML = 
    `<img src=${user} class='avatar'>
      <span class='mx-1 text-right text-dark'>
        ${input}
      </span>`
    // append userText to userDiv
    userDiv.appendChild(userText)
    // add userDiv to messagesContainer
    messagesContainer.appendChild(userDiv)

    // create div element for bot reply
    const botDiv = document.createElement('div')
    // create bot image element
    const botImg = document.createElement('img')
    // create text element
    const botText = document.createElement('span')
    botDiv.id = 'bot'
    botDiv.className = 'bg-warning border-5px rounded my-2 px-2 py-2'
    // get image from bot.png
    botImg.src = bot
    botImg.className = 'avatar'
    botText.className = 'mx-1 text-right text-dark'
    botText.innerText = 'Mengetik...'
    // append botImg to botDiv
    botDiv.appendChild(botImg)    
    // append botText to botText
    botDiv.appendChild(botText)
    // add botDiv to messagesContainer
    messagesContainer.appendChild(botDiv)
    // Keep messages at most recent
    //messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight 
    messagesContainer.scrollTo(0, messagesContainer.scrollHeight)
    // Fake delay to seem 'real' and also way to change botText inner Text
    setTimeout(() => {
      botText.innerText = `${reply}`
    }, 300)
}