import './App.css'

function App() {
  return (
    <div className="app">

      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">A</div>

          <div>
            <h1>Alpha</h1>
            <span>AI Voice Assistant</span>
          </div>
        </div>

        <div className="online-status">
          <span className="status-dot"></span>
          Online
        </div>
      </header>


      <main className="main-content">

        <section className="hero">
          <p className="eyebrow">YOUR PERSONAL ASSISTANT</p>

          <h2>How can I help you?</h2>

          <p className="hero-description">
            Speak naturally with Alpha or type your command below.
          </p>
        </section>


        <section className="assistant-card">

          <div className="mic-section">

            <button className="mic-button">
              🎙️
            </button>

            <h3>Tap to speak</h3>

            <p className="status">
              Click the microphone to speak
            </p>

          </div>


          <div className="conversation">

            <div className="message alpha-message">
              <div className="message-avatar">A</div>

              <div className="message-content">
                <span className="message-name">Alpha</span>

                <p>
                  Hello! I'm Alpha. How can I help you today?
                </p>
              </div>
            </div>


            <div className="message user-message">
              <div className="message-avatar">U</div>

              <div className="message-content">
                <span className="message-name">You</span>

                <p>
                  I'm ready to get started.
                </p>
              </div>
            </div>

          </div>


          <div className="input-area">

            <input
              type="text"
              placeholder="Ask Alpha something..."
            />

            <button className="send-button">
              Send
            </button>

          </div>

        </section>

      </main>


      <footer className="footer">
        <span>Alpha AI Assistant</span>
        <span>Built for intelligent interaction</span>
      </footer>

    </div>
  )
}

export default App