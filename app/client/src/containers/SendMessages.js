import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createMessage } from '../actions/messages'

function SendMessages({ channel, ...props }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    props.createMessage({
      authorId: props.user.id,
      channelId: channel.id,
      content: message,
    })
    setMessage('')
  }

  return (
    <div className="input box">
      <input
        style={{ width: '64%' }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleSubmit(e)
          }
        }}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        type="text"
        placeholder={`send message to ${channel.name}`}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
})
export default connect(mapStateToProps, { createMessage })(SendMessages)
