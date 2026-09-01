function Message({ sender, text }) {

  const isAlpha = sender === 'Alpha'

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

        <span className="message-name">

          {sender}

        </span>


        <p>

          {text}

        </p>

      </div>

    </div>

  )
}

export default Message