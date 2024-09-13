import React from 'react';
import Signup from '../components/Signup'; // Path might vary

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <Signup /> {/* Renders the Signup form */}
    </div>
  );
};

export default SignupPage;
