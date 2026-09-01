import ConversationItem from './ConversationItem'

function ConversationList({ conversations, onSelect }) {
  return (
    <div className="conversation-list">

      <div className="conversation-section">

        <p className="conversation-section-title">
          TODAY
        </p>

        {conversations
          .filter(
            (conversation) =>
              conversation.dateGroup === 'today'
          )
          .map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              onSelect={onSelect}
            />
          ))}
      </div>


      <div className="conversation-section">

        <p className="conversation-section-title">
          YESTERDAY
        </p>

        {conversations
          .filter(
            (conversation) =>
              conversation.dateGroup === 'yesterday'
          )
          .map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              onSelect={onSelect}
            />
          ))}
      </div>

    </div>
  )
}

export default ConversationList