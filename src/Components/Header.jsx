import React from 'react'

function Header({Heading}) {
  return (
    <header >
        <div className="container">
            <h2>{Heading}</h2>
        </div>
        </header>
  )
}

export default Header
