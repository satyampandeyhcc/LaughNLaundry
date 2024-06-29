import React, { useState } from 'react';

const EmailOtpForm = () => {
  const [email, setEmail] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [PasswordChange, setPasswordChange] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();
      console.log('Data for email submission', data);
      setShowOtpField(true);
    } catch (error) {
      console.error('OTP sent failed', error?.message);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();
      const otpOutput = data.otp;
      if (otp === otpOutput) {
        alert('OTP Verified Successfully!');
        setPasswordChange(true)
      } else {
        alert('Otp Verification Failed');
      }
    } catch (error) {
      console.error('OTP verification failed', error?.message);
    }
  };

  const handlePasswordChange = async () => {

    try {
      const response = await fetch('http://localhost:5000/api/auth/passChange', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email , password : password }),
      });

      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error('OTP verification failed', error?.message);
    }
  };


  return (
    <div
      style={{
        width: '300px',
        margin: 'auto',
        marginTop: '50vh',
        transform: 'translateY(-50%)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {!PasswordChange ? (<div>
      <h2>{showOtpField ? 'Enter OTP' : 'Enter Email'}</h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={showOtpField ? handleOtpSubmit : handleSubmit}
      >
        {showOtpField ? (
          <div>
            <label style={{ marginBottom: '8px' }} htmlFor="otp">
              OTP:
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{
                padding: '8px',
                marginBottom: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
        ) : (
          <div>
            <label style={{ marginBottom: '8px' }} htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '8px',
                marginBottom: '16px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
        )}
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {showOtpField ? 'Verify OTP' : 'Submit Email'}
        </button>
      </form>
      </div>) : 
      <div>
       <h2>Enter new Password</h2>
       <input type="text" onChange={(e)=>setpassword(e.target.value)} />
       <button onClick={()=>handlePasswordChange()}>Change Password</button>
       </div>}
    </div>
  );
};

export default EmailOtpForm;
