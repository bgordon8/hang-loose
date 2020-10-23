import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import './WorkspaceStyle.css'
import { fetchUser } from '../actions/auth'
import Workspaces from '../components/Workspace/Workspaces'
function Workspace({ fetchUser, ...props }) {
  const { workspaceId = 1, channelId = 1 } = useParams()

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const workspaces =
    props.user &&
    props.user.workspaces.map((workspace) => ({
      id: workspace.id,
      letter: workspace.name.charAt(0).toUpperCase(),
    }))

  const workspaceIdx =
    props.user && workspaceId
      ? props.user.workspaces.findIndex((workspace) => workspace.id === parseInt(workspaceId))
      : 0

  const workspace = props.user && props.user.workspaces[workspaceIdx]

  const channelIdx =
    props.user && workspaceId
      ? props.user.workspaces[workspaceIdx].channels.findIndex(
          (channel) => channel.id === parseInt(channelId)
        )
      : 0
  console.log(channelIdx)
  // const channel = props.user && workspace.channels[channelIdx]

  return (
    <div className="app">
      <Workspaces workspaces={workspaces} />
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { fetchUser })(Workspace)
