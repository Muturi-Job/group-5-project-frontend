import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm({ onLogin }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [image, setImage] = useState("");
    const [contact, setContact] = useState([""])
    const [bio, setBio] = useState('')
    const [location, setLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("https://group-5-back.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          image,
          contact,
          bio,
          location          
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => console.log(user));//onLogin(user));
          navigate('/home');
        } else {
          throw new Error("Sign Up Failed!");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    }

    return (
        <form onSubmit={handleSubmit} className="form_main container-sm " >
              <p className="heading">Sign Up</p>
    <p>Username</p>
    <div className="inputContainer">
        <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
        </svg>
    <input 
    placeholder="Must be at least 6 characters" 
    id="username" 
    className="inputField"
    autoComplete="off"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
     type="text"
     />
    </div>

    <p>Password</p>
<div className="inputContainer">
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    <input 
    placeholder="Include uppercase, lowercase and numbers" 
    id="password" 
    className="inputField" 
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
</div>

<div className="inputContainer">
    <svg viewBox="0 0 16 16" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    <input 
    placeholder="Confirm Password" 
    id="password-confirmation" 
    className="inputField" 
    type="password"
    value={passwordConfirmation}
    onChange={(e) => setPasswordConfirmation(e.target.value)}
    />
</div>

<p>Profile Image</p>
<div className="inputContainer">
    <svg viewBox="0 0 512 512" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
    <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
    </svg>
    <input 
    placeholder="Link profile image url" 
    id="imageUrl" 
    className="inputField" 
    type="text"
    value={image}
    onChange={(e) => setImage(e.target.value)}
    />
</div>



<p>Contact</p>
<div className="inputContainer">
    <svg viewBox="0 0 512 512" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
    </svg>
    <input 
    placeholder="Enter your contact" 
    id="chefContact" 
    className="inputField" 
    type="text"
    value={contact}
    onChange={(e) => setContact(e.target.value)}
    />
</div>

<p>Location</p>
    <div className="inputContainer">
        <svg viewBox="0 0 384 512" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
       <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
       </svg>  
    <input 
    placeholder="Enter residential location" 
    id="location" 
    className="inputField"
    autoComplete="off"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
     type="text"
     />
    </div>

    <p>Bio</p>
    <div className="inputContainer">
        <svg viewBox="0 0 512 512" fill="#2e2e2e" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="inputIcon">
        <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/>
        </svg>
    <input 
    placeholder="Must be at least 50 characters" 
    id="bio" 
    className="inputField"
    autoComplete="off"
    value={bio}
    onChange={(e) => setBio(e.target.value)}
     type="text"
     />
    </div>

           
<button id="button" type="submit">
{isLoading ? "Loading..." : "Sign Up"}  </button>
   

        </form>
      )
        
}
export default SignUpForm;