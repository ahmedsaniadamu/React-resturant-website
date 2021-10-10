import React,{useReducer} from 'react'

const reducer = (state , action) => {
     
      let { type , payload } = action ;

         switch( type ){
             
             case 'EMAIL_CHANGE' :
                 return { ...state , email : payload.email } ;

             case 'MESSEGE_CHANGE' :
                   return {...state , messege : payload.messege} ;

             case 'SUBJECT_CHANGE' :
                    return { ...state , mysubject : payload.mysubject  } ;

             default :
               return state ;

         }

}

 const defaultState = {
    email: '',
    messege:'',
    mysubject: ''
 }

 const Contact = () => {
     
    const [input,dispatch] = useReducer(reducer,defaultState);

   return (
     <section className='contact-page p-0 m-0 py-5'> 
        <div className=' w-100 p-0 m-0 d-block mx-auto rounded-lg'>
            <h6 className='m-0 p-0 py-2 text-center rounded-lg'> contact us </h6>
            <form action='/' className='d-block mx-auto mt-5'>
                    
                   <input 
                         type='email'
                         className='form-control pl-3 mt-3'
                         name='email'
                         value={input.email}
                         placeholder='email'
                         maxLength='80'
                         onChange={ event => {
                            event.preventDefault();
                             dispatch({
                               type:'EMAIL_CHANGE',
                               payload : { [event.target.name]: event.target.value }  
                              })
                         } }
                   />
                   <input 
                       type='text'
                       name='mysubject' 
                       value={input.mysubject}
                       placeholder='subject'
                       className='form-control pl-3 mt-3'
                       onChange={ event => {
                        event.preventDefault();
                         dispatch({
                           type:'SUBJECT_CHANGE',
                           payload : { [event.target.name]: event.target.value }  
                          })
                        } }
                        
                    />
                   <textarea 
                             name='messege' 
                             value={input.messege}
                             className='form-control pl-3 mt-3'
                             placeholder='message'
                             onChange={ event => {
                                event.preventDefault();
                                 dispatch({
                                   type:'MESSEGE_CHANGE',
                                   payload : { [event.target.name]: event.target.value }  
                                  })
                                } }
                     /> 
                     <button type='submit' className='btn btn-success px-md-5 py-1 my-3' >
                          Send 
                     </button>
            </form>
             
        </div>
      </section>
    )
}

export default Contact ;