import React, { useState } from "react";
import "../styles/authModal.css";

const AuthModal = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);  
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin({ username });
      onClose();
    } else {
      alert("Please enter all fields.");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && mobile && password) {
      alert("Signup successful!");
      onClose();
    } else {
      alert("Please enter all fields.");
    }
  };

  const handleSwitchMode = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
      <button className="authModal-close-btn" onClick={onClose}><i class="bi bi-x"></i></button>
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="loginBtn" type="submit">Login</button>

            <div className="social-login">
              <button className="google-login">
                <i className="fab fa-google"></i> Google
              </button>
              <button className="apple-login">
                <i className="fab fa-apple"></i> Apple
              </button>
            </div>
            
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="signupBtn" type="submit">Signup</button>
          </form>
        )}

        <div className="switch-mode">
          <span>
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <button className="switch-btn" onClick={handleSwitchMode}>
              {isLogin ? "Signup" : "Login"}
            </button>
          </span>
        </div>

        
      </div>
    </div>
  );
};

export default AuthModal;
