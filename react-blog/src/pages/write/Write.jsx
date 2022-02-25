import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
        className='writeImg'
        src="https://th.bing.com/th/id/OIP.HJ7NHYPDYM928R0qA2FhFQHaE8?w=287&h=192&c=7&r=0&o=5&pid=1.7" alt="" />
       <form className="writeForm">
           <div className="writeFormGroup">
               <label htmlFor="fileInput">
               <i className="writeIcon fa-solid fa-plus"></i>
               </label>
               <input type="file" id="fileInput" style={{display:"none"}} />
               <input 
               type="text" 
               placeholder='Title' 
               className='writeInput'
                autoFocus={true}
                 />
           </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type='text' className=' writeInput writeText'
                ></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
       </form>
    </div>
  )
}
