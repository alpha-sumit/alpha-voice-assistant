function ChatInput({
  input,
  onInputChange,
  onSend,
  onKeyDown
}) {
  return (
    <>
      <div className="input-area">

        <div className="input-wrapper">

          <span className="input-icon">
            ✦
          </span>

          <input
            type="text"
            placeholder="Ask Alpha something..."
            value={input}
            onChange={(event) =>
              onInputChange(event.target.value)
            }
            onKeyDown={onKeyDown}
          />

        </div>

        <button
          className="send-button"
          onClick={onSend}
        >
          <span>Send</span>

          <span className="send-icon">
            ➤
          </span>
        </button>

      </div>

      <div className="input-hint">

        <span>
          Press Enter to send
        </span>

        <span>•</span>

        <span>
          Use the microphone for voice commands
        </span>

      </div>
    </>
  )
}

export default ChatInput