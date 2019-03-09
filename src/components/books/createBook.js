import React, { useState, useEffect } from "react"
import axios from "axios"

const createBook = () => {
  const [title, setTitle] = useState("")
  return (
    <div>
      <button>create</button>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="book title"
        type="text"
        name="title"
        required
      />
    </div>
  )
}

export default createBook
