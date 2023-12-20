import React from 'react'

function Container({children}) {
  return (
    <div className='px-4 w-full max-w-7xl max-auto'>{children}</div>
  )
}

export default Container