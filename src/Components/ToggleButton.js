import React from 'react'

export const ToggleButton = ({ mode, setModeinApp }) => {
  const handleClick = () => {
    console.log('clickButton')
    if (mode === 'signUp') {
      setModeinApp('signIn')
    }
    if (mode === 'signIn') {
      setModeinApp('signUp')
    }
  }

  return (
    <div className='button-toggle-wrapper'>
      <button
        onClick={() => handleClick()}
        type='button'
        className='button-toggle'
      >
        {mode === 'signUp' ? 'Logga In' : 'Skapa Användare'}
      </button>
    </div>
  )
}