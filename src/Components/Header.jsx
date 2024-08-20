import React from 'react'
import "../App.css"
function Header() {
  return (
    <div>
        <header>
            <div className="img-cont">
                <div className="img"></div>
            </div>
            <div className="search-cont">
                <input type="text" placeholder="Search..."  className='search-inp'/>
                <button className='add-btn'>Add</button>
            </div>
        </header>
    </div>
  )
}

export default Header