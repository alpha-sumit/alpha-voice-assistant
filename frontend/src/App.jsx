import './App.css'

function App(){
  return (
    <div className="app">
      <h1 className="logo">Alpha</h1>
      <p className="subtitle">Your Virtual Voice Assistant</p>
      <main className="assistant">
        <button className="mic-button">🎙️</button>
        <p className="status">Click the microphone to speak</p>     
        <div className="chat">
          <p className="alpha-message">Hello! I'm Alpha, your voice assistant. How can I help you today?</p>
        </div>
        <div className="input-area">
          <input type="text" placeholder="Ask Alpha something..."/>
          <button>Send</button>
        </div>
      </main> 
    </div>
  )
}

export default App
