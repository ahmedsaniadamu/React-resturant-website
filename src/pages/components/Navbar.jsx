import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
            <nav className="navbar navbar-expand-sm p-0 m-0 d-flex justify-content-between">  
                
                { /* brand logo */ }

                <Link className="navbar-brand p-0 m-0" to='/'> 
                    <img className='img-logo' src="./logo.jpg" alt="logo" />
                </Link>                   
                    
                   { /*  Toggler/collapsibe Button  */ }

                <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#collapsibleNavbar"
                    >
                        <span className="fas fa-bars"></span>
                    </button>

                    { /* Navbar links */ }

                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                                <ul className="navbar-nav ">
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link "> Home </Link>
                                        </li>
                                        <li className="nav-item">
                                                <Link to='/about' className="nav-link"> About </Link>
                                        </li>
                                        <li className="nav-item">
                                                <Link to='/contact' className="nav-link"> Contact </Link>
                                        </li>
                                        <li className="nav-item">
                                                <Link to='/login' className="nav-link"> Login </Link>
                                        </li>
                                        <li className="nav-item">
                                                <div className="dropdown">
                                                        <a
                                                          href="#"
                                                          className="btn btn-primary dropdown-toggle mr-3" 
                                                           data-toggle="dropdown"
                                                        >
                                                        More
                                                        </a>
                                                        <div className="dropdown-menu">
                                                                 <ul className="list-group">
                                                                    <li 
                                                                      className="py-2 list-group-item text-white">
                                                                        <i className="fas fa-baby-carriage">
                                                                         </i> &nbsp;Orders
                                                                     </li>
                                                                     <li 
                                                                      className=" py-2 list-group-item text-white">
                                                                         <i className="fas fa-comment-dollar">
                                                                         </i> &nbsp;Payments
                                                                     </li>
                                                                     <li 
                                                                      className="py-2 list-group-item text-white">
                                                                       <i className="fas fa-briefcase">
                                                                         </i> &nbsp;Support Office
                                                                     </li>
                                                                     <li 
                                                                      className="py-2 list-group-item text-white">
                                                                       <i className="far fa-question-circle ">
                                                                         </i> &nbsp;Help line
                                                                     </li>
                                                                 </ul>
                                                         </div>     
                                                </div>
                                        </li>
                                        <li className="nav-item">
                                              <form className="form-inline ml-3 ml-md-0 mr-3" action="#">
                                                  <input 
                                                         type="search"
                                                          placeholder=" &#128269; &nbsp; your food choice..." 
                                                          className="form-control"
                                                    />
                                              </form>
                                        </li>
                                </ul>
                    </div>
            </nav>
    )
}

export default Navbar
