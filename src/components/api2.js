import React, { useEffect, useState } from "react"

const Api = () => {
  const [cats, setCats] = useState([])

  const fetchUsers = async () => {
    const res = await fetch(`https://reqres.in/api/unknown`)
    const json = await res.json()
    setCats(json.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <ul>
      {cats.map(cat => (
        <li key={cat.name}>{cat.name}</li>
      ))}
    </ul>
  )
}

export default Api
