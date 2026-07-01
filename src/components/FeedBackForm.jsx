import { useState} from 'react'

function FeedbackForm (){
    const[formData,setFormData]= useState(
        {
            name: "",
            email:"",
            feedback: "",

        }
    );
    const handleChange=(ev) =>{
        const{name,value}=ev.target;
    
       setFormData((prevData) => ({
   ...prevData,
   [name]: value,
 }));

        
    };

return(
<div className="form-data" >
<h1>USER FEEDBACK FORM</h1>
<form className="form-input">
    <label htmlFor='name'> Name: 
    <input type="text"
    name="name"
    value={formData.name}
        onChange={handleChange}
        />
    </label>
<br/>

     <label htmlFor='email'>Email:
    <input type="email"
    name="email"
    value={formData.email}
        onChange={handleChange}
        />
    </label>
    <br/>

     <label htmlFor='feedback'>Feedback:
    <textarea
    name="feedback"
    value={formData.feedback}
        onChange={handleChange}
        />
    </label>
    <br/>
    <button type="submit" >Submit Feedback</button>
</form>
<div className="preview-section">
<h2>Preview</h2>
<p>Name:{formData.name}</p>
<p>Email:{formData.email}</p>
<p>Feedback:{formData.feedback}</p>
</div>

</div>

);

}
export default FeedbackForm;