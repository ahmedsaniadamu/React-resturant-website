import React from 'react' ;
// a container that is responsibe for displaying all food items with their prices.
import ProductContainer from './components/ProductContainer' ;
// customers posts component
import OurUsers from './components/OurUsers';

const Home = () => {

    React.useEffect( () => window.scroll(0,0)) ;   
    const [ product ] = React.useState({
          drinks: require('./components/products/Assets/image27.png').default ,
          meat : require('./components/products/Assets/image2.png').default ,
          food : require('./components/products/Assets/image4.png').default ,
          vegetable :  require('./components/products/Assets/image18.png').default ,
          egg : require('./components/products/Assets/image13.png').default ,
    })

    return (
        <>
            <section className="mt-1 mt-sm-3 pt-3 home">
                
                  <div className="categories row  mx-auto w-100 p-0 m-0 ">
                      <div className="shop-by-categories col-12 col-sm-3 p-0 m-0">
                         <h6 className="header text-capitalize text-md-center pl-2 pl-md-0 py-2 mb-0">
                               shop by categories
                         </h6>
                         <ul className="list-group bg-transparent border-0 rounded-0 text-capitalize mt-0 pt-0">
                             <li className="list-group-item ">
                                   <img src={ product.food} alt="food" className='mr-2'/>
                                   food
                             </li>
                             <li className="list-group-item ">
                                  <img src={ product.drinks} alt="food" className='mr-2'/>
                                   drinks
                             </li>
                             <li className="list-group-item ">
                                    <img src={ product.vegetable} alt="food" className='mr-2'/>
                                   vegetables
                             </li>
                             <li className="list-group-item ">
                                   <img src={ product.meat} alt="food" className='mr-2'/>
                                   meats
                             </li>
                             <li className="list-group-item ">
                                 <img src={ product.egg} alt="food" className='mr-2'/>
                                   eggs
                             </li>
                         </ul>
                      </div>
                      <div className="why-us col-12 col-sm-9  p-0 m-0">
                         
                            <h6 className='w-100 header py-2'>
                                 Why Choose us ?
                            </h6>
                           <div className="row p-0 m-0  w-100 mx-auto justify-content-center justify-content-md-between ">
                              <div className="col-12 col-sm-4 text-center py-3 first">
                                    <i className="fas fa-truck-moving"></i>
                                    <br />
                                    <p className="text-capitalize pt-3">
                                           fast delivery
                                   </p>
                                   <p className='font-weight-normal text'> Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Eaque blanditiis perferendis
                                       cum debitis  ?
                                    </p>
                              </div>
                              <div className="col-12 col-sm-4 text-center py-3 second">
                                    <i className="fas fa-crown"></i>
                                    <br />
                                    <p className="text-capitalize pt-3">
                                           100% secured payment
                                   </p>
                                   <p className='font-weight-normal text'> Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Eaque blanditiis perferendis
                                       cum debitis  ?
                                    </p>
                              </div>
                              <div className="col-12 col-sm-4 text-center py-3 third">
                                    <i className="fas fa-headphones-alt"></i>
                                    <br />
                                    <p className="text-capitalize pt-3">
                                           great customer support
                                   </p>
                                   <p className='font-weight-normal text'> Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Eaque blanditiis perferendis
                                       cum debitis  ?
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