import React from "react";
export default function Addtodos(props){
    const [formData,setFormData]= React.useState({
        title:'',
        description:'',
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        props.initAdd(formData);
        setFormData({
            title:'',
            description:''
        })
    }
    const handleChange = (event) => {
        const {name,value} = event.target
        setFormData(prevFormData => { 
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label className="input-title" htmlFor="title">
            <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="Enter the Title" required/>
            </label>
        </div>
        <div>
            <label className="input-description" htmlFor="description">
                <textarea onChange={handleChange} value={formData.description} name="description" placeholder="Enter the Description" required>
                </textarea>
            </label>
        </div>
        <div>    
            <button className="submit-btn">Add To do List</button>
        </div>
        </form>       
        </div>
    )
}