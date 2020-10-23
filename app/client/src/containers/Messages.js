import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../actions/messages'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'

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
              props.messages.map((message) => (
                <li
                  style={{
                    borderRadius: '8px',
                    width: 'max-content',
                    alignSelf: 'flex-end',
                    overflow: 'auto',
                    listStyleType: 'none',
                    background: '#fff',
                    padding: '1.2em',
                    fontSize: 'medium',
                    // border: 'solid',
                    margin: '8px',
                  }}
                  key={message.id}
                >
                  <div style={{ fontSize: 'small', padding: '5px', color: '#7c5576' }}>
                    {message.username}
                  </div>
                  <div style={{ fontSize: 'x-small', padding: '5px', color: '#7c5576' }}>
                    {dayjs(message.created_at).format('h:mm a')}
                  </div>
                  <div style={{ fontSize: 'large', padding: '5px' }}>{message.content}</div>
                </li>
              ))}
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
