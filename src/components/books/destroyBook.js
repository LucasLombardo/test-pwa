import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const destroyBook = () => {
  const [id, setId] = useState("")

  const deleteBook = () => {
    axios.delete(`${apiUrl}/books/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div>
      <button onClick={deleteBook}>delete</button>
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

export default destroyBook
