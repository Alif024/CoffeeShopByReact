import { useState, useEffect } from 'react'
import Axios from 'axios';
import './Nav.css'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getMinutes(minute) {
  if (minute < 10) {
    return `0${minute}`
  } else {
    return minute
  }
}

function getFormattedDay(day) {
  if (day >= 11 && day <= 13) {
    return day + 'th';
  }

  var lastDigit = day % 10;

  switch (lastDigit) {
    case 1:
      return day + 'st';
    case 2:
      return day + 'nd';
    case 3:
      return day + 'rd';
    default:
      return day + 'th';
  }
}

function GETHOUR(hour) {
  if (hour === 0) {
    return 12
  } else if (hour > 0 && hour < 13) {
    return hour
  } else {
    return hour - 12
  }
}

function getAMPM(hour) {
  if (hour <= 11) {
    return "AM"
  } else {
    return "PM"
  }
}

function updateDateTime(currentDateTime) {
  var year = currentDateTime.getFullYear();
  var month = months[currentDateTime.getMonth()];
  var day = getFormattedDay(currentDateTime.getDate());
  var hour = currentDateTime.getHours();
  var Hour = GETHOUR(currentDateTime.getHours());
  var minute = currentDateTime.getMinutes();
  var AMPM = getAMPM(hour);
  return `${month} ${day} ${year}, ${Hour}:${getMinutes(minute)} ${AMPM}`;
}

// eslint-disable-next-line react/prop-types
const Nav = ({ setDataUser }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const [currentTime, setCurrentTime] = useState(updateDateTime(new Date()));
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(updateDateTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime;

  const [signupData, setsignupData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setsignupData({ ...signupData, [event.target.name]: event.target.value });
  };

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    try {
      if (signupData.username !== '' && signupData.password !== '' && signupData.email !== '') {
        const response = await Axios.post('http://localhost:5000/insert', {
          username: signupData.username,
          password: signupData.password,
          email: signupData.email
        });
        if (response.status === 200) {
          alert('Sign up successful');
          setShowSignupForm(false);
          setsignupData({
            email: '',
            username: '',
            password: ''
          });
        } else {
          console.error('error');
        }
      } else {
        alert('Sign up error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/read', {
        username: Username,
        password: Password
      });
      if (response.data[0] !== null && response.data[0] !== undefined) {
        setDataUser(response.data[0]);
        setUsername('');
        setPassword('');
        setShowLoginForm(false);
        setIsLoggedIn(true);
        alert(`ยินดีต้อนรับ ${Username}!`);
      } else {
        alert(`ไม่พบผู้ใช้ ${Username}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  const handleSignupCancel = () => {
    setShowSignupForm(false);
    setsignupData({
      email: '',
      username: '',
      password: ''
    });
  };

  const handleLoginCancel = () => {
    setShowLoginForm(false);
    setUsername('');
    setPassword('');
  };

  const SignOut = () => {
    setIsLoggedIn(false);
    setDataUser(null);
  };


  return (
    <div className="navbar">
      <div className="left-nav">
        <a href='#'>
          <div className="liff">LIFF</div>
          <div className="coff">COFF</div>
        </a>
      </div>
      <div className="right-nav">
        <div className="nav-date">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path
              d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V7.36364H14.4V16.3636ZM14.4 5.72727H1.6V3.27273H14.4V5.72727Z"
              fill="black" />
          </svg>
          <nav>
            {formattedTime}
          </nav>
        </div>
        <div className="signup-login" id='signup-login'>
          {isLoggedIn ? (
            <nav className='signuot-btn'>
              <button onClick={SignOut}>Sign up</button>
            </nav>
          ) : (
            <>
              <nav className='signup-btn'>
                <button onClick={() => setShowSignupForm(true)}>Sign up</button>
              </nav>
              <nav className='login-btn'>
                <button onClick={() => setShowLoginForm(true)}>Login</button>
              </nav>
            </>
          )}
        </div>
      </div>


      {showSignupForm && (
        <form onSubmit={handleSubmitSignup}>
          <div className="content-signup">
            <h1>Sign up</h1>
            <div className='item'>
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                id="email"
                name="email"
                value={signupData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className='item'>
              <label htmlFor="username">Username : </label>
              <input
                type="text"
                id="username"
                name="username"
                value={signupData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className='item'>
              <label htmlFor="password">Password : </label>
              <input
                type="password"
                id="password"
                name="password"
                value={signupData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="footer-singup-btn">
              <button type="submit">Submit</button>
              <button onClick={handleSignupCancel}>Cancel</button>
            </div>
          </div>
        </form>
      )}

      {showLoginForm && (
        <form onSubmit={handleSubmitLogin}>
          <div className="content-signup">
            <h1>Login</h1>
            <div className='item'>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='item'>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div >
            <div className="footer-singup-btn">
              <button type="submit">Login</button>
              <button onClick={handleLoginCancel}>Cancel</button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default Nav