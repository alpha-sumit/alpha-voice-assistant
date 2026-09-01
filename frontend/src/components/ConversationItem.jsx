function ConversationItem({ conversation, onSelect }) {
  return (
    <button
      className="conversation-item"
      onClick={() => onSelect(conversation)}
    >
      <span className="conversation-icon">
        💬
      </span>

      <span className="conversation-info">
        <span className="conversation-title">
          {conversation.title}
        </span>

        <span className="conversation-date">
          {conversation.date}
        </span>
      </span>
    </button>
  )
}

export default ConversationItem