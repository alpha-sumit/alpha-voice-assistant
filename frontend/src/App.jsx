import { useState } from 'react'

import Navbar from './components/Navbar'
import SettingsPanel from './components/SettingsPanel'
import Hero from './components/Hero'
import AssistantCard from './components/AssistantCard'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([
    {
      sender: 'Alpha',
      text: "Hello! I'm Alpha. How can I help you today?"
    }
  ])

  const [assistantState, setAssistantState] = useState('idle')

  const [showSettings, setShowSettings] = useState(false)


  const sendMessage = () => {

    if (!input.trim()) return

    const userMessage = {
      sender: 'You',
      text: input
    }

    const alphaMessage = {
      sender: 'Alpha',
      text: `I received your message: "${input}"`
    }

    setMessages([
      ...messages,
      userMessage,
      alphaMessage
    ])

    setInput('')
  }


  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
      sendMessage()
    }

  }


  const clearConversation = () => {

    setMessages([
      {
        sender: 'Alpha',
        text: "Hello! I'm Alpha. How can I help you today?"
      }
    ])

  }


  const toggleListening = () => {

    if (assistantState === 'idle') {

      setAssistantState('listening')

    } else {

      setAssistantState('idle')

    }

  }


  return (
    <div className="app">

      <Navbar
        onClear={clearConversation}
        onSettings={() =>
          setShowSettings(!showSettings)
        }
      />


      {showSettings && (
        <SettingsPanel
          onClose={() =>
            setShowSettings(false)
          }
        />
      )}


      <main className="main-content">

        <Hero />

        <AssistantCard
          assistantState={assistantState}
          onMicToggle={toggleListening}
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSend={sendMessage}
          onKeyDown={handleKeyDown}
        />

      </main>


      <Footer />

    </div>
  )
}

export default App