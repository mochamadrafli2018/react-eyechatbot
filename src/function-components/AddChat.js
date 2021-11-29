import '../index.css';

export default function addChat(input, reply) {
  const messagesContainer = document.getElementById('messages')
  // create element for user reply
  const userDiv = document.createElement('div')
        userDiv.id = 'user'
        userDiv.className = 'user bg-primary border-2 border-white my-2 ml-auto px-2 py-2 max-w-7xl rounded-l-3xl rounded-br-lg'
        userDiv.innerHTML =
        `
          <i class="bi bi-person-circle text-light"></i>
          <span class='mx-1 text-light'>${input}</span>
        `
  // add userDiv to messagesContainer
  messagesContainer.appendChild(userDiv)

  // create div element for bot reply
  const botDiv = document.createElement('div')
        botDiv.id = 'bot'
        botDiv.className = 'bot bg-ivory border-2 border-blue-700 my-2 mr-auto px-2 py-2 rounded-r-3xl rounded-bl-lg'
  // create bot image element

  /*
  const botImg = document.createElement('img')
        botImg.src = bot
        botImg.className = 'avatar'
        botDiv.appendChild(botImg) 
  */
  
  // create text element
  const botText = document.createElement('span')    
        botText.className = 'mx-1 text-dark lastMessage'
        botText.innerText = 'Mengetik...'
        botDiv.appendChild(botText)    
  // add botDiv to messagesContainer
  messagesContainer.appendChild(botDiv)

  // Fake delay to seem 'real'
  setTimeout(() => {
    botText.innerHTML = 
    `<i class="bi bi-robot"></i> ${reply} <span class='border-3 border-blue-700 px-2 py-1 rounded-2xl'>y/t</span>`
  }, 300)
}