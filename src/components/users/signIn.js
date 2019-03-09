import React, { useState, useEffect } from "react"
import axios from "axios"

const signIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <button>sign in</button>
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
