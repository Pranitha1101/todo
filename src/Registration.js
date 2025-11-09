import React, { useState } from "react";
function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true);
   console.log("Form Submitted:", { name, email, password });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "70px auto" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name} // controlled value
            onChange={(e) => setName(e.target.value)} // update state
            required
          />
          <br></br>
          <br></br>      
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email} // controlled value
            onChange={(e) => setEmail(e.target.value)} // update state
            required
          />
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password} // controlled value
            onChange={(e) => setPassword(e.target.value)} // update state
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {/* Show submitted data */}
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Registered Data:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
            <h3>Registration Successful!</h3>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
