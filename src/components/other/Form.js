import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup';
import axios from 'axios';

// VALIDATION SCHEMA
let schema = yup.object().shape({
    first_name: yup.string().required('This field is required'),
    last_name: yup.string().required('This field is required'),
    email: yup.string().email('Please enter a valid email').required('This field is required')
});
// onSubmit: asynchronous function will send POST request to server.
// status(201): will return response object with user input values.
// status(400): will return error object.
// NOTE: server will validate email address to make sure the value isn't currently subscribed
const Form = (props) => (
    <div className="form-broder">
       <div className="form-container">
           <h2 className="form-heading">Join our Members Club</h2>
           <p className="form-p">Special coupons, notifications, and more.</p>
            <Formik
                initialValues={{first_name: '', last_name: '', email: ''}}
                validationSchema={schema}
                onSubmit={async (values, {setSubmitting, resetForm, setFieldError}) => {
                    props.setIsLoading(true);
                    await axios.post('/api/users', values)
                    .then(res => {
                        resetForm(true);
                        props.setIsLoading(false);
                        props.setRes(res.data.doc);
                    }).catch(error => {
                        props.setIsLoading(false);
                        if(error.response){
                            setFieldError('email', 'This email is already subscribed to our mailing list');
                        }
                        setSubmitting(false);
                    });
                }}
            >
            {({values, handleSubmit, isSubmitting, handleChange, errors, touched,handleBlur})=>(
                <form className="formik" onSubmit={handleSubmit}>
                <label className="input-label">Name</label>
                    <div className="name-container">
                        <input
                            className="first-name-input"
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.first_name}
                        />
                        <input
                            className="last-name-input"
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.last_name}
                        />
                        
                    </div>
                    <div className="error-container">
                        <div className="error-flex">
                            <div className="error-container">
                                <span>{errors.first_name && touched.first_name && errors.first_name}</span>
                            </div>
                            <div className="error-container">
                                <span>{errors.last_name && touched.last_name && errors.last_name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="email-container">
                        <input
                            className="email-input"
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <span className="email-error-message">{errors.email && touched.email && errors.email}</span>
                    </div>
                    <div className='button-container'>
                        <button className="submit-button" type="submit" disabled={isSubmitting}>{props.isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Sign Up'}</button>
                    </div>
                </form>
            )}
            </Formik>
       </div>
       </div>
)

export default Form;