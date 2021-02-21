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
                        <p> Name          : {form.name} </p>
                        <p> Date of birth : {form.dob} </p>
                        <p> Email         : {form.email} </p>
                        <p> Phone No.     : {form.phone} </p>
                    </Card>
                </div>
            ))}

        </div>
    )
}

export default SubmittedForms
