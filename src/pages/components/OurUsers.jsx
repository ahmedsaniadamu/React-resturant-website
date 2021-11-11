import React,{useState} from 'react'


const users = [
    {
        name:'Janeth',
        datePosted:'25-03-2015',
        id : 1 ,
        image: require('./users/janeth.jpg').default 
    },
    {
        name:'Smith',
        datePosted:'02-05-2017',
        id : 2 ,
        image: require('./users/smith.jpg').default 
    },
    {
        name:'Ahmed',
        datePosted:'10-03-2016',
        id : 3 ,
        image: require('./users/sani.png').default 
    },
    {
        name:'johanna',
        datePosted:'12-12-2020',
        id : 4 ,
        image: require('./users/johanna.jpg').default 
    },            
]

const OurUsers = () => {

    const [customers] =  useState(users) ;

    return (
        <section  className='our-users m-0 p-0'>
            <div  className='h-100 w-100'> 
                    <h6 className='text-capitalize py-2'> 
                    from our customers
                </h6>
                    <div className='row w-100 p-0 m-0 mx-auto h-100 justify-content-md-around '>
                        { customers.map( customer => {
                            return <SingleCustomer key={customer.id} {...customer} />
                        } ) }
                    </div>
            </div>
        </section>
    )
}

const SingleCustomer = ({name,datePosted,image}) => {
    return (
        <div className='col-12 col-md-5  p-0 m-0 mt-3'>
                 <div className='media mt-0 py-0 mb-0 '>
                    <img src={image}
                        alt={name} 
                        className='mr-3 align-self-center ml-1 rounded-lg '  />
                        <div class='media-body m-0 pb-0 pt-2'>
                            <h4> {name} <small><i>Posted on {datePosted} </i></small></h4>
                            <p> Rating :   <i className='fas fa-star pl-1' ></i>
                                            <i className='fas fa-star pl-1' ></i>
                                            <i className='fas fa-star pl-1' ></i>
                                            <i className='fas fa-star-half-alt pl-1' ></i>
                                            <i className='fas fa-star-half-alt pl-1' ></i>
                            </p>
                            <p className='comment mb-0 pb-0 '>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Magni delectus consectetur, id, voluptate vel saepe natus 
                                assumenda sit impedit laboriosam voluptatem! 
                            </p>
                       </div>
                  </div>
        </div>
    )
}
export default OurUsers
