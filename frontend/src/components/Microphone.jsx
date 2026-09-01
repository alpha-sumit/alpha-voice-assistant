function Microphone({ assistantState, onToggle }) {

  const getMicText = () => {
    if (assistantState === 'listening') {
      return 'Listening...'
    }

    if (assistantState === 'thinking') {
      return 'Alpha is thinking...'
    }

    return 'Tap to speak'
  }


  const getStatusText = () => {
    if (assistantState === 'listening') {
      return 'I am listening to you'
    }

    if (assistantState === 'thinking') {
      return 'Processing your request'
    }

    return 'Click the microphone to speak'
  }


  return (
    <div className={`mic-section ${assistantState}`}>

      <div className="mic-wrapper">

        <div className="mic-ring"></div>

        <button
          className="mic-button"
          onClick={onToggle}
        >
          {assistantState === 'listening'
            ? '🔴'
            : '🎙️'}
        </button>

      </div>

      <h3>
        {getMicText()}
      </h3>

      <p className="status">
        {getStatusText()}
      </p>

    </div>
  )
}

export default Microphone