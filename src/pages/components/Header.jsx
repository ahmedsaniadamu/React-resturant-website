import React from 'react'

const Header = () => {
     
    const [ carouselImages ] = React.useState([
          require('./carouselimages/carousel1.jpg').default ,
          require('./carouselimages/carousel2.jpg').default ,
          require('./carouselimages/carousel3.jpg').default ,
    ])
    return (
      <>
        <header className="p-0 m-0 w-100">
                <div className="carousel-container h-100 w-100">
                     <div id="demo" className="carousel slide p-0 m-0 w-100 h-100" data-ride="carousel">                      
                            <div class="carousel-inner p-0 m-0 w-100 h-100">
                                <div class="carousel-item active">
                                    <img 
                                       src={carouselImages[0]}
                                        alt="deli foods"
                                        className='w-100 h-100 p-0 m-0'
                                     />
                                </div>
                                <div class="carousel-item">
                                     <img 
                                         src={carouselImages[1]}
                                          alt="deli foods"
                                          className='w-100 h-100 p-0 m-0'
                                          />
                                </div>
                                <div class="carousel-item">
                                    <img 
                                         src={carouselImages[2]}
                                          alt="New York" 
                                          className='w-100 h-100 p-0 m-0'
                                          />
                                </div>
                            </div>
                      </div>
                </div>            
              
                <div className="header-content d-flex justify-content-center">
                        <div className=" p-0 m-0 align-self-sm-center mt-4 ">
                            <h1 className=" my-md-4 pl-2 font-weight-bold">
                                The Food That You Can't Resist 
                            </h1>
                            <h4 className="pl-2 font-weight-bold">
                                Enjoy The Marvelous Taste Today !!!
                            </h4>
                            <p className="pl-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Earum maiores dolor placeat repellat sunt laboriosam architecto saepe 
                                vitae ipsa quibusdam, modi, sapiente totam.
                            </p>
                            <button className="btn text-capitalize ml-2 ml-md-3 px-3 px-md-5"> 
                                    order now  &#10142;
                            </button>
                       </div>    
                </div>
        </header>
    </>
    )
}

export default Header
