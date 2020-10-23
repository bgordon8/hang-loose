import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../actions/messages'
import { useParams } from 'react-router-dom'

function Messages({ fetchMessages, ...props }) {
  const params = useParams()

  useEffect(() => {
    if (params.channelId) {
      fetchMessages(params.channelId)
    }
  }, [fetchMessages, params])

  console.log(props)

  return (
    <div className="messages box">
      <ul className="message-list">
        {props.messages && props.messages.length > 0 ? (
          <>
            {props.messages &&
              props.messages.map((message) => <li key={message.id}>{message.content}</li>)}
          </>
        ) : (
          <li>be the first to leave a message!</li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  messages: state.channel.messages,
})

export default connect(mapStateToProps, { fetchMessages })(Messages)
