import React, { useState } from 'react'


export const Modal = () => {
const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <>
    <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
              alt="modal pic"
            />
          </div>
          <div className="modalText">
            
              <h2>This is a modal header</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              harum qui perferendis error molestiae ab in expedita? Quaerat
              molestias adipisci maiores quam incidunt inventore, minima esse
              ratione exercitationem. Porro, illo?
            </p>
            
            <form action="">
              <button>Log In</button>
            </form>
            <button className="exitButton" onClick={() => toggleModalState()}>
              Close
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => toggleModalState()}>Open modal</button>
    </>
  )
}