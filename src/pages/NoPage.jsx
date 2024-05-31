import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
   
 <div className='error-404'>
        <h1>Error 404</h1>
    
        <Link to='/'>Go back</Link>
    </div>
   
   
    
  );
}

export default NoPage