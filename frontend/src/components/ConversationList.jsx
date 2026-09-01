import ConversationItem from './ConversationItem'

function ConversationList({ messages = [] }) {

  return (
    <div className="conversation-list">

      {messages.map((message, index) => (

        <ConversationItem
          key={index}
          message={message}
        />

      ))}

    </div>
  )
}

export default ConversationList