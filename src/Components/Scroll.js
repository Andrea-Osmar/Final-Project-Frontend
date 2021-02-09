import React, { useEffect, useState } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

export const Scroll = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    const div = window.document.getElementById('city-list')
    if (div) {
      //console.log("div.scrollTop", div.scrollTop)
      //console.log("showbelow", showBelow.showBelow)

      if(div.scrollTop > showBelow.showBelow) {
        if(!show) setShow(true)
      } else { 
        if(show) setShow(false)
      }
    }
  }

  const handleClick = () => {
    const div = window.document.getElementById('city-list')
    div[`scrollTo`]({ top: 0, behaviour: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      const div = window.document.getElementById('city-list')
      div.addEventListener(`scroll`, handleScroll)
      return () => div.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <IconButton onClick={handleClick} aria-label='to top' component='span'>
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  )
}