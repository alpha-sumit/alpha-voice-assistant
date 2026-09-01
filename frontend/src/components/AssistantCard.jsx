import Microphone from './Microphone'
import Conversation from './Conversation'
import ChatInput from './ChatInput'

function AssistantCard({
  assistantState,
  onMicToggle,
  messages,
  input,
  onInputChange,
  onSend,
  onKeyDown
}) {
  return (
    <section className="assistant-card">

      <Microphone
        assistantState={assistantState}
        onToggle={onMicToggle}
      />

      <Conversation
        messages={messages}
      />

      <ChatInput
        input={input}
        onInputChange={onInputChange}
        onSend={onSend}
        onKeyDown={onKeyDown}
      />

    </section>
  )
}

export default AssistantCard