import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const updateBook = () => {
  const [id, setId] = useState("")
  const [title, setTitle] = useState("")

  const patchBook = () => {
    const book = {
      "book": {
        title: title,
        author: "lucas"
      }
    }

    axios.put(`${apiUrl}/books/${id}`, book)
    // NOTE: PATCH was not working with CORS-anywhere workaround, using put for now
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  return (
    <div>
      <button onClick={patchBook}>update</button>
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
