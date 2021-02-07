import React from 'react'

export const SignOutButton = ({ signOut }) => {
  const handleSignOut = () => {
    signOut('')
  }

  return (
    <div className='signOut-text'>
      <h3 className='start-logo'>Tack för besöket</h3>
      <p>Din drömbostad väntar på dig...</p>
      <button
        onClick={() => handleSignOut()}
        className='button-sign-out'
        type='button'
      >
        Logga ut
      </button>
    </div>
  )
}