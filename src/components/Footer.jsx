import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [fecha , setFecha] = useState({
    date : new Date()
  })
  return (
    <>
  <div className='inline-block sm:items-center sm:gap-6 sm:py-4 m-4'> 
     <section
     className='text-gray-500 font-black '
     >My Links</section>
   <Link 
     to="https://github.com/josepedrolorenzini"
     className="inline mb-1"
   >Github
  </Link>
   <Link 
     to="https://www.linkedin.com/in/jose-pedro-lorenzini-/"
     className="inline mb-1"
   > Linkedin 
   </Link>
   <Link 
      to="https://www.vientodelsur.net/"
      className="inline mb-1"
    > web
     </Link>
    </div>
    <div>
      {console.log(fecha.date)}
      <small>{fecha.date.toString()}</small>
    </div>
    </>
  )
}

export default Footer