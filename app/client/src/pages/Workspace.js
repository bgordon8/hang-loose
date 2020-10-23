import React, { useEffect, useState } from 'react'
import './WorkspaceStyle.css'
import axios from 'axios'

export default function Workspace() {
  const [user, setUser] = useState()

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem('token')
      const res = await axios.get('http://localhost:3000/auth/user', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      setUser(res.data.user)
    }
    fetchUser()
  }, [])

  console.log(user)
  return (
    <div className="app">
      <div className="teams box">Teams</div>
      <div className="channels box">Channels</div>
      <div className="header box">Header</div>
      <div className="messages box">
        <ul className="message-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="input box">
        <input type="text" placeholder="Send Message..."></input>
      </div>
    </div>
  )
}
