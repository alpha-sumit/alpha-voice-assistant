import ConversationList from './ConversationList'

function Sidebar({
  conversations,
  onNewChat,
  onSelectConversation
}) {
  return (
    <aside className="sidebar">

      <button
        className="new-chat-button"
        onClick={onNewChat}
      >
        <span className="new-chat-icon">
          +
        </span>

        <span>
          New Chat
        </span>
      </button>


      <ConversationList
        conversations={conversations}
        onSelect={onSelectConversation}
      />


      <div className="sidebar-bottom">

        <button className="sidebar-option">
          <span>⚙</span>
          Settings
        </button>

        <button className="sidebar-option">
          <span>?</span>
          Help
        </button>

      </div>

    </aside>
  )
}

export default Sidebar