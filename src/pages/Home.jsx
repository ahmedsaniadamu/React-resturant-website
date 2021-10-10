import React from 'react' ;
// a container that is responsibe for displaying all food items with their prices.
import ProductContainer from './components/ProductContainer' ;
// customers posts component
import OurUsers from './components/OurUsers';

const Home = () => {

    React.useEffect( () => window.scroll(0,0)) ;   

    return (
        <>
            <section className="mt-4 pt-5 home">
                
                  <div className="categories row  mx-auto w-100 p-0 m-0 ">
                      <div className="shop-by-categories col-4 p-0 m-0">
                         <h6 className="header text-capitalize text-md-center pl-2 pl-md-0 py-2 mb-0">
                               shop by categories
                         </h6>
                         <ul className="list-group bg-transparent border-0 rounded-0 text-capitalize mt-0 pt-0">
                             <li className="list-group-item ">
                                   food
                             </li>
                             <li className="list-group-item ">
                                   drinks
                             </li>
                             <li className="list-group-item ">
                                   vegetables
                             </li>
                             <li className="list-group-item ">
                                   meats
                             </li>
                             <li className="list-group-item ">
                                   eggs
                             </li>
                         </ul>
                      </div>
                      <div className="why-us col-8  p-0 m-0">
                          <h4 className="header mb-0 text-capitalize text-center"> 
                               why choose us ?
                           </h4>
                           <div className="row p-0 m-0 mt-5 w-100 mx-auto justify-content-center">
                              <div className="col-6 col-md-4 text-center py-3">
                                    <i className="fas fa-truck-moving"></i>
                                    <br />
                                    <p className="text-capitalize pt-3">
                                           fast delivery
                                   </p>
                              </div>
                              <div className="col-6 col-md-4 text-center py-3">
                                    <i className="fas fa-crown"></i>
                                    <br />
                                    <p className="text-capitalize pt-3">
                                           100% secured payment
                                   </p>
                              </div>
                              <div className="col-6 col-md-4 text-center py-3">
                                    <i className="fas fa-headphones-alt"></i>
                                    <br />
                                    <p className="text-capitalize pt-3">
                                           great customer support
                                   </p>
                              </div>
                           </div>
                      </div>
                  </div>
                  { /* a container that contains a list of products and their details  */ }
                  < ProductContainer />
                  { /* a container that contains a list of users with their posts  */ }
                  <OurUsers />
            </section>
        </>
    )
}

export default Home ;