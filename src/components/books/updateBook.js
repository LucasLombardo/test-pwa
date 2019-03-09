import React, { useState, useEffect } from "react"
import axios from "axios"

const updateBook = () => {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  return (
    <div>
      <button>read</button>
      <input
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="book id"
        type="text"
        name="id"
        required
      />
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

export default updateBook
