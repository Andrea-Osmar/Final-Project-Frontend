import React from 'react'
import { useHistory } from 'react-router-dom'

export const Error = () => {
  let history = useHistory()

  const handleGoBack = () => {
    history.push('/')
  }

  return (
    <section className="error">
      <h3 className="error-heading">Something went wrong.. Go back </h3>
      <img
        className="error-image"
        src="https://media1.giphy.com/media/3o6MbkBbeZx4QLOs4U/source.gif"
        alt="house gif"
      />
      <button
        type="button"
        text="Go Back"
        onClick={handleGoBack}
        className="error-button"
      ></button>
    </section>
  )
}
