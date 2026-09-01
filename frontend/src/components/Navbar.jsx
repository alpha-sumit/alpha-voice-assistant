function Navbar({ onClear, onSettings }) {
  return (
    <header className="navbar">

      <div className="brand">

        <div className="brand-icon">
          A
        </div>

        <div className="brand-text">
          <h1>Alpha</h1>
          <span>AI Voice Assistant</span>
        </div>

      </div>

      <div className="navbar-actions">

        <div className="online-status">
          <span className="status-dot"></span>
          Online
        </div>

        <button
          className="clear-button"
          onClick={onClear}
        >
          Clear
        </button>

        <button
          className="settings-button"
          onClick={onSettings}
        >
          ⚙
        </button>

      </div>

    </header>
  )
}

export default Navbar