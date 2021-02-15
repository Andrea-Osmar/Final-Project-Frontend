import React from 'react'

export const Sort = ({onChange}) => {

  return(
    <article className='sort-container' tabIndex='0'>
      <selection className='sort-selection' type='text' onChange={onChange}>
        <option value=''>Sorty by:</option>
        <option value='room-sm'>Room Size increasing</option>
        <option value='room-lg'>Room size decreasing</option>
        <option value='price-sm'>Price increasing</option>
        <option value='price-lg'>Price decreasing</option>
      </selection>
    </article>
  )
}

/*
/countries?sort_by=asc(name)
*/