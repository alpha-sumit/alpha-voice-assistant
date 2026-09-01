import { useState } from 'react'

import Microphone from './Microphone'
import Conversation from './Conversation'
import ChatInput from './Chatinput'

function AssistantCard() {

  // =========================
  // CHAT INPUT
  // =========================

  const [input, setInput] = useState('')


  // =========================
  // CONVERSATION
  // =========================

  const [messages, setMessages] = useState([
    {
      sender: 'Alpha',
      text: "Hello! I'm Alpha. How can I help you today?"
    }
  ])


  // =========================
  // SEND MESSAGE
  // =========================

  const sendMessage = () => {

    if (!input.trim()) {
      return
    }


    const newMessage = {
      sender: 'You',
      text: input
    }


    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage
    ])


    setInput('')
  }


  // =========================
  // ENTER KEY
  // =========================

  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
      sendMessage()
    }

  }


  return (

    <section className="assistant-card">


      {/* =========================
          MICROPHONE
      ========================= */}

      <Microphone />


      {/* =========================
          CONVERSATION
      ========================= */}

      <Conversation
        messages={messages}
      />


      {/* =========================
          CHAT INPUT
      ========================= */}

      <ChatInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        handleKeyDown={handleKeyDown}
      />


    </section>

  )
}

export default AssistantCard