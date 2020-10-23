import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import './WorkspaceStyle.css'
import { fetchUser } from '../actions/auth'
import Workspaces from '../components/Workspace/Workspaces'
import Messages from '../containers/Messages'
import Channels from '../components/Workspace/Channels'

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
  const channel = props.user && workspace.channels[channelIdx]

  return (
    <div className="app">
      <Workspaces workspaces={workspaces} />
      <Channels workspace={workspace} />
      <div className="header box">Header</div>
      <Messages channel={channel} />
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
