import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const readBooks = () => {
  const [ books, setBooks ] = useState([])

  const getBooks = () => {
    axios.get(`${apiUrl}/books`)
    .then(res => {
      setBooks(res.data.books)
    })
  }

  return (
    <div>
      <button onClick={getBooks}>read all</button>
      <ul style={{display: 'inline'}}>
        {books.map((book, i) => <li key={Object.toString(book)+i}>{book.title}</li>)}
      </ul>
    </div>
  )
}

export default readBooks
