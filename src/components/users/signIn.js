import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const signIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const postSignIn = () => {
    const credentials = {
      credentials: {
        email: username,
        password
      }
    }

    axios.post(`${apiUrl}/sign-in`, credentials)
    .then(res => {
      console.log(res);
      console.log(res.data);
      window.localStorage.setItem('userToken', res.data.user.token);
      // access with window.localStorage.getItem('userToken');
    })
  }
  
  return (
    <div>
      <button onClick={postSignIn}>sign in</button>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
        type="text"
        name="username"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
        type="text"
        name="password"
        required
      />
    </div>
  )
}

export default signIn
