import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// toast.configure();

import './UserForm.css'

let redirect = false;

const initialValues = {
    name: '',
    dob: '',
    email: '',
    phone: ''
}

const onSubmit = values => {
    console.log('data', values);

    axios
        .post(`http://localhost:5000/user/user-form`, values)
        .then(response => {
            console.log(response);
            redirect = true
        })
        .catch(error => {
            console.log(error);
        })

}

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.dob) {
        errors.dob = 'Required';
    } else if (!/^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/i.test(values.dob)) {
        errors.dob = 'Invalid Date of birth';
    } else {
        const epoch_seconds = new Date() - new Date(values.dob);
        let age = new Date(epoch_seconds);
        age = Math.abs(age.getUTCFullYear() - 1970);

        if (age < 18) {
            errors.dob = 'Age should be above 18'
        }
    }

    if (!values.email) {
        errors.email = 'Requried';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    }

    return errors
}


const UserForm = () => {


    return (
        <div>
            <h1 id="header"> User Form</h1>

            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="input-box">
                        <label htmlFor='name' > Name * </label>
                        <Field
                            type='text'
                            id='name'
                            name='name'
                        />
                        <div className="error-msg">
                            <ErrorMessage name='name' />
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="dob"> Date of birth * </label>
                        <Field
                            type="date"
                            id="dob"
                            name="dob"
                        />
                        <div className="error-msg">
                            <ErrorMessage name='dob' />
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="email"> Email * </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                        />
                        <div className="error-msg">
                            <ErrorMessage name='email' />
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="phone"> Phone No. * </label>
                        <Field
                            type="name"
                            id="phone"
                            name="phone"
                        />
                        <div className="error-msg">
                            <ErrorMessage name='phone' />
                        </div>
                    </div>

                    <Link onClick={e => (redirect) ? e.preventDefault() : null} to={`/submitted-forms`} >
                        <button type="submit" id="submit-btn"> Submit </button>
                    </Link>
                </Form>
            </Formik>
        </div >
    )
}

export default UserForm
