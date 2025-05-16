import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {

    const err = useRouteError()  // return object
    console.log(err);
    

  return (
    <div className='center'>
      <h1>{err.status} : {err.statusText}</h1>
    </div>
  )
}

export default Error
