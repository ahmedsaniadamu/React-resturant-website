import React from 'react'
import products from './products/Products'
import { Link } from 'react-router-dom'

const ProductContainer = () => {

      const [ productsList ] = React.useState(products )

    return (
        <div className="product-container p-0 m-0 mt-3  pt-5 ">
           
            <fieldset>
                <legend className="w-auto d-block text-capitalize px-2">
                     <strong> our dishes </strong>
                </legend>
            </fieldset>

             <div className="row w-100 mx-auto p-0 m-0 mt-md-3 products ">                  
                    { productsList.map( ( product ) => {                        
                        const { id } = product ;
                        return  <SingleProduct key={id} {...product} /> ;
                    })}

             </div>

        </div>
    )
}
 
const SingleProduct = ({ productName , productImage , price , id }) => {
     
       return ( <div className="col-4 col-md-3 col-xl-2 px-0 mx-0 mt-3 mt-md-5">
                      <img src={productImage}  alt={ productName } className=" d-block mx-auto" />
                      <p className="p-0 m-0 text-center  mt-3 product-name">
                          { productName }
                      </p>
                      <p className="p-0 m-0 text-center font-weight-bold  product-price"> 
                            { price } 
                      </p>
                       <Link to = { `/productinfo/${id}`}
                          className="btn btn-success order  mt-2 mt-md-3 py-1 px-0  btn-block mx-auto"> 
                          <span className="fas fa-cart-plus "></span> order
                        </Link>
               </div> )
}

export default ProductContainer;