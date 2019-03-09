import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const createBook = () => {
  const [title, setTitle] = useState("")

  const postBook = () => {

    const book = {
      "book": {
        title: title,
        author: "lucas"
      }
    }

    axios.post(`${apiUrl}/books/`, book)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  return (
    <div>
      <button onClick={postBook}>create</button>
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
