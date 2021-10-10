import React from 'react'

const defaultInput = {
     email : '' ,
     password : '' ,
}

const Login = () => {

    React.useEffect( () => window.scroll(0,0) , [] ) ;

    const [ input , setInput ] = React.useState(defaultInput) ;

    const handleChange = event => {

        setInput( { [event.target.name] : event.target.value} )
    }

    return (
        <section className='mt-5 pb-0 mb-0 login pt-5'>
             <div className='mt-5 border d-block mx-auto'> 
                    <h6 className='mt-0 py-2 text-center'>
                        User Login
                    </h6>
                    <form action='/login' className='form d-block mx-auto pt-3'>
                        
                        <input 
                            type='email'
                                name='email' 
                                placeholder='email'
                                className='pl-2 form-control mt-4'
                                value={input.email}
                                onChange = { handleChange }
                            />

                            <input 
                                    type='password'
                                    name='password' 
                                    placeholder='password'
                                    className='pl-2 form-control mt-4'
                                    value={input.password}
                                    onChange = { handleChange }
                              /> 

                             <p className='pt-3 text-capitalize mt-3' > 
                                     dont have an account ?
                                      <i className='text-primary font-weight-bold'> Singup </i>
                             </p>

                             <button className='btn btn-success py-1 text-center btn-block mx-auto mb-4'> 
                               Login
                             </button>
                             
                    </form>
              </div>
        </section>
    )
}

export default Login
