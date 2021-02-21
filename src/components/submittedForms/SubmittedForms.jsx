import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'antd'

import './SubmittedForm.css'

const SubmittedForms = () => {

    const [forms, setForms] = useState('')

    useEffect( () => {
        axios
            .get(`http://localhost:5000/user/submitted-forms`)
            .then(response => {
                console.log(response.data.forms);
                setForms(response.data.forms)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    return (
        <div>
            <h1 id="header"> All submitted forms </h1>

            {forms && forms.map( (form, key) => (
                <div key={key} className='card-wrapper'>
                    <Card style={{ width : 300 }}>
                        <pre><p> Name          : {form.name}  </p></pre> 
                        <pre><p> Date of birth : {form.dob}   </p></pre> 
                        <pre><p> Email         : {form.email} </p></pre> 
                        <pre><p> Phone No.     : {form.phone} </p></pre> 
                    </Card>
                </div>
            ))}

        </div>
    )
}

export default SubmittedForms
