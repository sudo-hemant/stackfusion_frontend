import React, { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const initialValues = {
    name: '',
    dob: '',
    email: '',
    phone: ''
}

const onSubmit = values => {
    console.log('data', values);
}

const validate = values => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.dob) {
        errors.dob = 'Required';
    }
    // TODO:    ERROR

    // else if (!/^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(19|20)\d\d$/i.test(values.dob)) {
    //     errors.dob = 'Invalid Date of birth';
    // } 
    else if (false) {
        // TODO:    check if age is greater than 18 or not
        console.log('checking');
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
            <h1> User Form</h1>

            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor='name' > Name </label>
                        <Field
                            type='text'
                            id='name'
                            name='name'
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.name}
                        />
                        <ErrorMessage name='name' />
                        {/* {formik.touched && formik.touched.name && formik.errors && formik.errors.name ? <div> {formik.error.name} </div> : null} */}
                    </div>

                    <div>
                        <label htmlFor="dob"> Date of birth </label>
                        <Field
                            type="date"
                            id="dob"
                            name="dob"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.dob}
                        />
                        <ErrorMessage name='dob' />
                        {/* {formik.touched && formik.touched.dob && formik.errors && formik.error.dob ? <div> {formik.error.dob} </div> : null} */}
                    </div>

                    <div>
                        <label htmlFor="email"> Email </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.email}
                        />
                        <ErrorMessage name='email' />
                        {/* {formik.touched && formik.touched.email && formik.errors && formik.error.email ? <div> {formik.error.email} </div> : null} */}
                    </div>

                    <div>
                        <label htmlFor="phone"> Phone No. </label>
                        <Field
                            type="name"
                            id="phone"
                            name="phone"
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // value={formik.values.phone}
                        />
                        <ErrorMessage name='phone' />
                        {/* {formik.touched && formik.touched.phone && formik.errors && formik.error.phone ? <div> {formik.error.phone} </div> : null} */}
                    </div>

                    <button type="submit"> Submit </button>
                </Form>
            </Formik>
        </div >
    )
}

export default UserForm
