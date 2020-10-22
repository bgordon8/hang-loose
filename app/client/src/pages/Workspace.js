import React from 'react'
import './WorkspaceStyle.css'

export default function Workspace() {
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
