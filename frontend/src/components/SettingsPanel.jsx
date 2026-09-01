function SettingsPanel({ onClose }) {
  return (
    <div className="settings-panel">

      <div className="settings-header">

        <div>
          <h3>Settings</h3>
          <p>Customize Alpha</p>
        </div>

        <button
          className="close-settings"
          onClick={onClose}
        >
          ×
        </button>

      </div>


      <div className="setting-item">

        <div>
          <strong>Voice Assistant</strong>
          <span>Enable voice interaction</span>
        </div>

        <div className="toggle active">
          <div className="toggle-circle"></div>
        </div>

      </div>


      <div className="setting-item">

        <div>
          <strong>Auto Listen</strong>
          <span>Listen after Alpha responds</span>
        </div>

        <div className="toggle">
          <div className="toggle-circle"></div>
        </div>

      </div>


      <div className="setting-item">

        <div>
          <strong>Notifications</strong>
          <span>Show assistant notifications</span>
        </div>

        <div className="toggle active">
          <div className="toggle-circle"></div>
        </div>

      </div>

    </div>
  )
}

export default SettingsPanel