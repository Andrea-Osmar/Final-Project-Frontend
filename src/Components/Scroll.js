import React, { useEffect, useState } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

export const Scroll = (showBelow) => {

  const [show, setShow] = useState(showBelow ? false : true)
  
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if(!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behaviour: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      
        <IconButton
          onClick={handleClick}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
    </div>
  )
}