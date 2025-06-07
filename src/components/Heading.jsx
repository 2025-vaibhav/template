import React from 'react'

const Heading = ({title="Welcome"}) => {
  return (
    <div>
        <h1 className='text-3xl'>{title}</h1>
    </div>
  )
}

export default Heading