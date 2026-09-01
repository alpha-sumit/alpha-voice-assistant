import Message from './Message'

function Conversation({ messages }) {
  return (
    <div className="conversation">
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message}
        />
      ))}
    </div>
  )
}

export default Conversation