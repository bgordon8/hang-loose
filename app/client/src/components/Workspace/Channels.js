import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function Channels({ workspace }) {
  const { workspaceId } = useParams()

  return (
    <div className="channels box">
      {workspace &&
        workspace.channels.map((channel) => (
          <NavLink
            key={`channel-${channel.id}`}
            className="workspace-link"
            to={`/workspace/${workspaceId}/${channel.id}`}
          >
            <p style={{ color: '#fff' }}>{channel.name}</p>
          </NavLink>
        ))}
    </div>
  )
}
