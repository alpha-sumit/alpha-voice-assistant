function Register({ onLogin, onRegister }) {

  return (

    <div className="auth-page">


      <div className="auth-card">


        {/* LOGO */}

        <div className="auth-logo">
          A
        </div>


        {/* TITLE */}

        <h1>
          Create your account
        </h1>


        <p className="auth-subtitle">
          Start your journey with Alpha
        </p>



        {/* REGISTER FORM */}

        <form
          className="auth-form"
          onSubmit={(event) => event.preventDefault()}
        >


          {/* NAME */}

          <div className="form-group">

            <label>
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
            />

          </div>



          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>



          {/* PASSWORD */}

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
            />

          </div>



          {/* CONFIRM PASSWORD */}

          <div className="form-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
            />

          </div>



          {/* TERMS */}

          <label className="terms-checkbox">

            <input
              type="checkbox"
            />

            <span>
              I agree to the Terms of Service
              and Privacy Policy
            </span>

          </label>



          {/* CREATE ACCOUNT */}

          <button
            type="submit"
            className="auth-button"
            onClick={onRegister}
          >
            Create Account
          </button>


        </form>



        {/* LOGIN */}

        <p className="auth-switch">

          Already have an account?

          <button
            type="button"
            onClick={onLogin}
          >
            Sign in
          </button>

        </p>


      </div>

    </div>

  )
}

export default Register