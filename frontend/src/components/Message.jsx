function Message({ message }) {
  const isAlpha = message.sender === 'Alpha'

  return (
    <div
      className={`message ${
        isAlpha
          ? 'alpha-message'
          : 'user-message'
      }`}
    >

      <div className="message-avatar">
        {isAlpha ? 'A' : 'U'}
      </div>

      <div className="message-content">

        <div className="message-header">

          <span className="message-name">
            {message.sender}
          </span>

          <span className="message-time">
            Now
          </span>

        </div>

        <p>
          {message.text}
        </p>

      </div>

    </div>
  )
}

export default Message