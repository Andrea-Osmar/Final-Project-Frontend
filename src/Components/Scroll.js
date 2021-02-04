import React, { useEffect, useState } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

export const Scroll = (showBelow) => {

  const [show, setShow] = useState(showBelow ? false : true)
  const div = window.document.getElementById("city-list")   
  
  const handleScroll = () => {
    console.log(div.scrollTop)
    console.log(showBelow.showBelow)    

    if (div.scrollTop > showBelow.showBelow) { 
      //console.log(true)
      if(!show) setShow(true)  
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    div[`scrollTo`]({ top: 0, behaviour: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      const div = window.document.getElementById("city-list")  
      div.addEventListener(`scroll`, handleScroll)
      return () => div.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
        )}
    </div>
  )
}