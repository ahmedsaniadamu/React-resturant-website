import React from 'react'

const Header = () => {
    
    return (
      <>
        <header className="p-0 m-0 w-100 row">
               <div className="col-7 description  align-self-center p-0 m-0 my-md-5 py-md-5">
                     <h1 className=" my-md-4 pl-2 font-weight-bold">
                          The Food That You Can't Resist 
                     </h1>
                     <h4 className="pl-2 font-weight-bold">
                         Enjoy The Marvelous Taste Today !!!
                     </h4>
                     <p className="pl-2 font-italic">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Earum maiores dolor placeat repellat sunt laboriosam architecto saepe 
                         vitae ipsa quibusdam, modi, sapiente totam.
                     </p>
                     <button className="btn text-capitalize ml-2 ml-md-3 px-3 px-md-5"> 
                               order now  &#10142;
                      </button>
               </div>
               <div className="col-5 p-0 m-0 banner-img"></div>
        </header>
        <div className="welcome-animation py-2">

            <p className="p-0 m-0">
                 <i> Welcome back to :  <b> www.delifoods.com </b> Time : {`${new Date().toLocaleTimeString()}`} 
                   &nbsp; Date :  {`${new Date().toLocaleDateString()}`} &nbsp;
                   we offer our customers the best they need and what they deserve. 
                   we stay among the best resturant that care about your need.  Thank you!! 
                </i>

                <i style={{ display:'inline-block' , marginLeft : '60%'}}> 
                   Welcome back to :  <b>www.delifoods.com</b> Time : {`${new Date().toLocaleTimeString()}`} 
                   &nbsp; Date :  {`${new Date().toLocaleDateString()}`} &nbsp;
                   we offer our customers the best they need and what they deserve. 
                   we stay among the best resturant that care about your need.  Thank you!! 
                </i>
            </p>
        </div>
    </>
    )
}

export default Header
