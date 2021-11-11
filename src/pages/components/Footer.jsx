import React from 'react';

const Footer = () => {

      const [input,setInput] = React.useState('')

    return (
        <footer className='w-100 p-0 m-0  pt-1'>
            <div className='footer-content m-0 mt-2'>
                  <div className='row w-100 p-0 pt-3 m-0 mx-auto justify-content-center justify-content-md-between'>
                      <div className='col-6 col-md-4 '>
                         <h4 className='text-capitalize mt-3'> About us </h4>
                          <ul className='list-group bg-transparent border-0 about'>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   help center
                               </li>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   Sell with us
                               </li>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   contact us
                               </li>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   Advertise with us
                               </li>                               
                          </ul>
                          <p className='social-media pt-4'>
                              <i className='fab fa-facebook mr-2 mr-md-3'></i>
                              <i className='fab fa-twitter mr-2 mr-md-3'></i>
                              <i className='fab fa-whatsapp mr-2 mr-md-3'></i>
                              <i className='fab fa-instagram mr-2 mr-md-3'></i>
                              <i className='fab fa-linkedin mr-2 mr-md-3'></i>
                          </p>
                      </div>
                      <div className='col-6 col-md-4 '>
                         <h4 className='text-capitalize mt-3'> quick links </h4>
                         <ul className='list-group bg-transparent border-0 quick-links'>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   Alibaba
                               </li>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   Amazon
                               </li>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   Ebay
                               </li>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   Golden Store
                               </li>
                               <li className='list-group bg-transparent border-0 py-0 m-0 pt-1'>
                                   Ali express
                               </li>                                                              
                          </ul>
                      </div>
                      <div className='col-8 col-md-4 '>
                         <h4 className='text-capitalize mt-3 text-center text-md-left '> 
                               subscribe to our news letters 
                         </h4>
                         <form action='/' className='form'>
                             <input 
                                   type='email' 
                                   name='customer-email' 
                                   placeholder=' your email address...' 
                                   value = {input}
                                   className='form-control py-1 mt-md-4'
                                   onChange={ (ev) => setInput(ev.target.value)}
                             />
                             <button className='btn btn-outline-light py-1 mt-3 btn-block mx-auto'>
                                 Subscribe
                             </button>
                         </form>                         
                      </div>
                  </div>
                  <p className='p-0 m-0 pt-3 pb-1 text-center copy-right'> 
                             copyright &copy; deli foods <i>all right reserved</i>
                  </p>
            </div>
        </footer>
    )
}

export default Footer
