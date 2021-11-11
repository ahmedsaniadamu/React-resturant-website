import React from 'react';
import { useParams } from 'react-router-dom' ;
import MoreProducts from './components/products/MoreProducts' ;
import products from './components/products/Products';

const ProductInfo = () => {

    const { id } = useParams() ;

    const [ singleProduct , setSingleProduct]  = React.useState('') ;

     React.useEffect( ()=> window.scroll(0,0) , []) ;
     
     React.useEffect( () => {

        // return an object with properties and values that user clicks from  homepage.
        let newProduct = products.find( item => item.id === parseInt(id) ) ;
        setSingleProduct( newProduct );

     } , [ id ] ) ;

    return (
         <div className='product-info mt-5 pt-3 pt-md-5'>
            <fieldset>
                <legend className='w-auto d-block text-capitalize px-2'>
                       <strong> product Details. </strong>
                </legend>
            </fieldset>
            <div className='row m-0 p-0 w-100 mx-auto'>
                <div className='col-6 product-image p-0 m-0'>
                <img 
                       src={ singleProduct.productImage } 
                       alt={ singleProduct.productName }
                       className='d-block mx-auto'
                     />
                </div>
                <div className='col-6 m-0 p-0 pl-3 pl-md-5 description d-flex justify-content-sm-center'>
                    <div className='align-self-center pl-3 pl-md-5 ml-md-5'>
                        <h6>
                             <strong> Name </strong> : { singleProduct.productName }.
                        </h6>
                        <p className='m-0 p-0 py-1'>
                            <strong> Price :</strong>  { singleProduct.price }.
                        </p>
                        <p className=' m-0 p-0 py-1'>
                            <strong> Taste :</strong>  100% satisfaction.
                        </p> 
                        <p className=' m-0 p-0 py-1'>
                            <strong> customers rating :</strong> &nbsp;
                            
                             <i className='fas fa-star pl-1' ></i>
                             <i className='fas fa-star pl-1' ></i>
                             <i className='fas fa-star pl-1' ></i>
                             <i className='fas fa-star-half-alt pl-1' ></i>
                             <i className='fas fa-star-half-alt pl-1' ></i>
                             
                        </p>  
                              {/* modal */}
                              { /* <!-- Button to Open the Modal --> */}
                            <button 
                                   type='button'
                                   data-toggle='modal' 
                                   data-target='#myModal'
                                   className='btn btn-outline-success open-modal  mt-3 mt-md-5 py-1 px-0  btn-block ' 
                                   >
                                     <span className='fas fa-cart-plus '></span> order
                            </button>

                            {/* <!-- The Modal --> */}
                            <div class='modal' id='myModal'>
                            <div class='modal-dialog modal-dialog-centered'>
                                <div class='modal-content'>

                                {/* <!-- Modal Header --> */}
                                <div class='modal-header p-0'>
                                    <h4 class='modal-title p-0 m-0'>

                                        <img src={singleProduct.productImage}
                                            alt={singleProduct.productName} 
                                            style={{ width:'80px',height:'70px'}}
                                            className='d-block mx-auto p-0'
                                        />

                                         <span className='text-center'>
                                             <i className='fas fa-check-circle pr-2'></i>
                                             Added sucessfully!
                                        </span>
                                    </h4>
                                </div>

                                {/*  <!-- Modal footer --> */}
                                <div class='modal-footer py-1'>
                                    <button 
                                       type='button'
                                       class='btn btn-ouline-success'
                                       data-dismiss='modal'>
                                        Ok
                                    </button>
                                </div>

                                </div>
                            </div>
                        </div>                  
                    </div>                       
                </div>
            </div>
            <section className='other-products mt-3 w-100'>
                 <h3 className='text-capitalize  pl-2 py-2'> you may also like ? </h3>
                 <div className=' p-0 m-0 container-fluid py-3'>
                      { MoreProducts.map( item => {
                          return <SingleItem key={item.id} {...item} />
                      }) }
                 </div>
            </section>
        </div>
    )
}

const SingleItem = ({name,price,image}) => {
    return (
        <div className='d-inline-block mb-0 pb-0 mr-2 mr-md-3 mb-4 ml-3'>
            <img src={image} alt={name} className='mt-1' />
            <p className='name text-center p-0 m-0 pt-1 pt-md-2'>
                {name}
            </p>
            <p className='price text-center p-0 m-0 pt-1 pt-md-2'>
                 { price }
            </p>
        </div>
    )
}
export default ProductInfo

