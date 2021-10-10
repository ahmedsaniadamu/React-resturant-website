import React,{useState} from 'react'

const styles = {
    backgroundImage : `url(${require('./products/Assets/background.jpg').default})` ,
    backgroundRepeat:'no-reapeat',
    backgroundSize:'100% 100%',
}

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
        <section style={ styles } className='our-users m-0 p-0'>
            <div style={{background:'rgba(0,0,0,0.3)'}} className='h-100 w-100'> 
                    <h6 className='text-capitalize py-2'> 
                    from our customers
                </h6>
                    <div className='row w-100 p-0 m-0 mx-auto h-100 justify-content-md-around pt-3 pt-md-4'>
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
        <div className='col-12 col-md-5  p-0 m-0'>
                 <div className='media'>
                    <img src={image}
                        alt={name} 
                        className='mr-3 mt-3 ml-1 rounded-lg' />
                        <div class='media-body'>
                            <h4> {name} <small><i>Posted on {datePosted} </i></small></h4>
                            <p> Rating :   <i className='fas fa-star pl-1' ></i>
                                            <i className='fas fa-star pl-1' ></i>
                                            <i className='fas fa-star pl-1' ></i>
                                            <i className='fas fa-star-half-alt pl-1' ></i>
                                            <i className='fas fa-star-half-alt pl-1' ></i>
                            </p>
                            <p className='comment'>
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
