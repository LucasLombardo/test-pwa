import React, { useState, useEffect } from "react"
import axios from "axios"

const readBook = () => {
  const [id, setId] = useState("")
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
    </div>
  )
}

export default readBook
