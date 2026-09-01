function Login({ onRegister, onLogin}) {

  return (

    <div className="auth-page">


      <div className="auth-card">


        {/* LOGO */}

        <div className="auth-logo">
          A
        </div>


        {/* TITLE */}

        <h1>
          Welcome back
        </h1>


        <p className="auth-subtitle">
          Sign in to continue to Alpha
        </p>



        {/* LOGIN FORM */}

        <form
          className="auth-form"
          onSubmit={(event) => event.preventDefault()}
        >


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
              placeholder="Enter your password"
            />

          </div>



          {/* OPTIONS */}

          <div className="auth-options">


            <label className="remember-me">

              <input
                type="checkbox"
              />

              <span>
                Remember me
              </span>

            </label>


            <button
              type="button"
              className="forgot-password"
            >
              Forgot password?
            </button>


          </div>



          {/* SIGN IN */}

          <button
            type="button"
            className="auth-button"
            onClick={onLogin}
          >
            Sign In
          </button>


        </form>



        {/* DIVIDER */}

        <div className="auth-divider">

          <span>
            OR
          </span>

        </div>



        {/* GOOGLE */}

        <button
          type="button"
          className="google-button"
        >
          Continue with Google
        </button>



        {/* REGISTER */}

        <p className="auth-switch">

          Don't have an account?

          <button
            type="button"
            onClick={onRegister}
          >
            Create account
          </button>

        </p>


      </div>

    </div>

  )
}

export default Login