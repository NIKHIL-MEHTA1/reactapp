import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <link className="navbar-brand" to="#">V SUARE IT SYSTEMS</link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link className="nav-link " aria-current="page" to="#">Home</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="/contact">Contact Us!</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="/ourtechnicians">Our technician</link>
        </li>
       
       
      </ul>
      <form className="d-flex">
        
      </form>
    </div>
  </div>
</nav>
            
        </div>
    )
}
