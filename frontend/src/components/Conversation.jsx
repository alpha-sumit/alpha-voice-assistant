import ConversationList from './ConversationList'

function Conversation({ messages = [] }) {

  return (

    <div className="conversation">

      <ConversationList
        messages={messages}
      />

    </div>

  )
}

export default Conversation