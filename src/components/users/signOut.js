import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../../config"

const signOut = () => {

  const postSignOut = () => {
    const token = window.localStorage.getItem('userToken');
    console.log(token)
    
    axios.delete(`${apiUrl}/sign-out`, {
      'Authorization': `Token token=${token}`
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  return (
    <div>
      <button onClick={postSignOut}>sign out</button>
    </div>
  )
}

export default signOut
