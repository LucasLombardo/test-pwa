import React, { useState, useEffect } from "react"
import axios from "axios"

const readBooks = () => {
  const [ books, setBooks ] = useState([])

  const getBooks = () => {
    axios.get(`https://powerful-earth-75266.herokuapp.com/books`)
    .then(res => {
      // setBooks(res.data.books)
      console.log(res.data)
    })
  }

  return (
    <div>
      <button onClick={getBooks}>read all</button>
      {/* <ul style={{display: 'inline'}}>
        {books.map(book => <li>{book.title}</li>)}
      </ul> */}
    </div>
  )
}

export default readBooks
