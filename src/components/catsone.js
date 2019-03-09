// https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=30
import React, { useEffect, useState } from "react"

const CatsOne = () => {
  const [cats, setCats] = useState([])

  const fetchUsers = async () => {
    const res = await fetch(`https://reqres.in/api/users`)
    const json = await res.json()
    setCats(json.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <ul>
      {cats.map(cat => (
        <li key={cat.first_name}>{cat.first_name}</li>
      ))}
    </ul>
  )
}

export default CatsOne
