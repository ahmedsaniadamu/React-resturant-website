import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => {

    React.useEffect( () => {
        window.scroll(0,0)
    })
    return (
        <div 
            style={{ 
                width:'100vw' , 
                height:'100vh',
                 position:"absolute",
                 top:0,
                 left:0,
                 zIndex:100,
                 background:'rgba(0,0,0,0.9)'
               }}
             className="row justify-content-center align-items-center p-0 m-0 error">
              <div className="h-auto  alert alert-success border border-success py-5">
                  <p className="text-center text-capitalize font-weight-bold text-sucess">
                  <i className="far fa-question-circle "> </i> &nbsp;                      
                         <strong>we are sorry ! </strong> the page that you are
                         looking for does not exist.                         
                  </p>
                  <Link to='/' className="btn btn-outline-success py-1  mx-auto btn-block w-50">
                      Back To Home Page
                  </Link>
              </div>
        </div>
    )
}

export default ErrorPage
