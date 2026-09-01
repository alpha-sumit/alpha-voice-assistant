import Message from './Message'

function ConversationItem({ message }) {

  return (

    <Message
      sender={message.sender}
      text={message.text}
    />

  )
}

export default ConversationItem