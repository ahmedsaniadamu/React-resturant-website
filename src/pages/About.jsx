import React,{ useEffect } from 'react'

const About = () => {
    
    useEffect(() => {
          window.scroll(0,0)
      }, [])

    return (
        <section className='p-0 m-0 w-100 mt-5 pt-md-5 about'>
             <div className='row w-100 mx-auto'>                
                 <div className='col-6 image-container'>
                     <img 
                         src={ require('./components/products/Assets/chef.png').default } 
                          alt='chef'
                          className='d-block mx-auto'
                          />
                 </div>
                 <div className='col-6 align-self-md-center'>

                     <fieldset className='w-100 p-0 m-0'>
                         <legend className='w-auto text-capitalize d-block mx-auto px-2'>
                             our chef
                         </legend>
                     </fieldset>

                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempora odio facere expedita nisi voluptates alias veritatis
                       doloremque? Rerum, facilis tempore! Repellat, fugit? Voluptates
                       Tempora odio facere expedita nisi voluptates alias veritatis
                       doloremque? Rerum, facilis tempore! Repellat, fugit? Voluptates
                        omnis cumque quam officiis. Corrupti, quisquam repellendus.
                       
                        <button className='btn btn-success text-capitalize px-md-4 ml-3 py-1 mt-2'>
                            learn more
                        </button>
                 </div>
             </div>
        </section>
    )
}

export default About
