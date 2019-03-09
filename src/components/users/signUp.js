import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const signUp = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const postSignUp = () => {
    const credentials = {
      credentials: {
        email: username,
        password_confirmation: password,
        password
      }
    }

    axios.post(`${apiUrl}/sign-up`, credentials)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  return (
    <div>
      <button onClick={postSignUp}>sign up</button>
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
export default signUp
