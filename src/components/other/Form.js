import React from 'react';
import {Formik} from 'formik'
import * as yup from 'yup';


let schema = yup.object().shape({
    first_name: yup.string().required('This field is required'),
    last_name: yup.string().required('This field is required'),
    email: yup.string().email('Please enter a valid email').required('This field is required')
});

const Form = () => (
       <div className="form-container">
           <h2 className="form-heading">Sign up for our Rewards Program</h2>
           <p className="form-p">Get special coupons, notifications, and more!</p>
            <Formik
                initialValues={{first_name: '', last_name: '', email: ''}}
                validationSchema={schema}
                onSubmit={(values, {setSubmitting, resetForm }) => {
                    alert('Form Submiited Successfully');
                    console.log(values)
                    setSubmitting(false);
                    resetForm(true);
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
                        <button className="submit-button" type="submit" disabled={isSubmitting}>Sign Up</button>
                    </div>
                </form>
            )}
            </Formik>
       </div>
)

export default Form;