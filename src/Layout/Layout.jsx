import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({children}) {
  return (
    <div>
        <header><Header /></header>
        <main>{children}</main>
        <footer
        className='m-8'
        ><Footer /></footer>
    </div>
  )
}

export default Layout