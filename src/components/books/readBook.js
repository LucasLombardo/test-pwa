import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const readBook = () => {
  const [id, setId] = useState("")
  const [ book, setBook ] = useState([])

  const getBook = () => {
    axios.get(`${apiUrl}/books/${id}`)
    .then(res => {
      setBook(res.data.book)
    })
  }

  return (
    <div>
      <button onClick={getBook}>read</button>
      <input
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="book id"
        type="text"
        name="id"
        required
      />
      <ul style={{display: 'inline'}}>
        { book.title && <li>{book.title}</li>}
      </ul>
    </div>
  )
}

export default readBook
