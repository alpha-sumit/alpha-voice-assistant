import { useState } from 'react'

function Home() {

  // Chat input
  const [input, setInput] = useState('')

  // Conversation messages
  const [messages, setMessages] = useState([
    {
      sender: 'Alpha',
      text: "Hello! I'm Alpha. How can I help you today?"
    }
  ])


  // Send message
  const sendMessage = () => {

    if (!input.trim()) {
      return
    }

    setMessages([
      ...messages,
      {
        sender: 'You',
        text: input
      }
    ])

    setInput('')
  }


  // Send when Enter is pressed
  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
      sendMessage()
    }

  }


  return (

    <div className="app">


      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        <div className="brand">

          <div className="brand-icon">
            A
          </div>

          <div>

            <h1>
              Alpha
            </h1>

            <span>
              AI Voice Assistant
            </span>

          </div>

        </div>


        <div className="online-status">

          <span className="status-dot"></span>

          Online

        </div>

      </header>



      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="main-content">


        {/* HERO */}

        <section className="hero">

          <p className="eyebrow">
            YOUR PERSONAL ASSISTANT
          </p>

          <h2>
            How can I help you?
          </h2>

          <p className="hero-description">
            Speak naturally with Alpha or type your command below.
          </p>

        </section>



        {/* =========================
            ASSISTANT CARD
        ========================= */}

        <section className="assistant-card">


          {/* MICROPHONE */}

          <div className="mic-section">

            <button className="mic-button">
              🎙️
            </button>

            <h3>
              Tap to speak
            </h3>

            <p className="status">
              Click the microphone to speak
            </p>

          </div>



          {/* =========================
              CONVERSATION
          ========================= */}

          <div className="conversation">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`message ${
                  message.sender === 'Alpha'
                    ? 'alpha-message'
                    : 'user-message'
                }`}
              >

                {/* Avatar */}

                <div className="message-avatar">

                  {message.sender === 'Alpha'
                    ? 'A'
                    : 'U'
                  }

                </div>


                {/* Message content */}

                <div className="message-content">

                  <span className="message-name">
                    {message.sender}
                  </span>

                  <p>
                    {message.text}
                  </p>

                </div>

              </div>

            ))}

          </div>



          {/* =========================
              INPUT AREA
          ========================= */}

          <div className="input-area">

            <input
              type="text"
              placeholder="Ask Alpha something..."
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />


            <button
              className="send-button"
              onClick={sendMessage}
            >
              Send
            </button>

          </div>


        </section>

      </main>



      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <span>
          Alpha AI Assistant
        </span>

        <span>
          Built for intelligent interaction
        </span>

      </footer>


    </div>

  )
}

export default Home