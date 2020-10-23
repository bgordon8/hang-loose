import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Workspaces({ workspaces }) {
  return (
    <div className="teams box">
      {workspaces &&
        workspaces.map((workspace) => (
          <NavLink
            key={`workspace-${workspace.id}`}
            to={`/workspace/${workspace.id}`}
            className="workspace-link"
          >
            <div
              style={{
                padding: '15px',
                margin: '5px',
                height: '50px',
                width: '50px',
                background: 'rgba(0,0,0,0.25)',
                borderRadius: '8px',
              }}
            >
              {workspace.letter}{' '}
            </div>
          </NavLink>
        ))}
    </div>
  )
}
