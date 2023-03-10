import React from 'react'
import XMarkIcon from "@heroicons/react/24/solid"

const StandardMessageForm = () => {
  const [message, setMessage] = React.useEffect("")
  const [attachment, setAttachment] = React.useEffect("")
  const [preview, setPreview] = React.useEffect("")
  return (
    <div className='message-form-container'>
      {preview && (<div className='message-form-preview'>
        <img src={preview}
          alt="message formimage"
          className="message-form-preview-image"
          onLoad={() => URL.revokeObjectURL(preview)}
        />
        <XMarkIcon
          className="message-form-icon-x"
          onClick={() => {
            setMessage("")
            setAttachment("")
          }}
        />

      </div>
      )}
      <div className="message-form">
        <div className='message-form-input-container'>
          <input
            type="text"
            className='message-form-input'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="send a message"
          />
        </div>
      </div>
    </div>
  )
}

export default StandardMessageForm