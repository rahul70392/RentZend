import React from 'react';
import { Button } from '@material-ui/core';
import { Formik} from 'formik';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import * as Yup from 'yup';

import UploadFile from './upload';

export default function Form(){  
    const query = useQuery(gql`
            query {
                createUser(name:test,email:test,) {
                email
                name
            }
            }
        `)
        return (
            <Formik
                initialValues = {{email:"",number:"",name:"",address:"",zip:""}}
                onSubmit = {(values,{setSubmitting}) => {
                    setTimeout(() => {
                        const { data,loading,error } = query;
                    console.log('values' ,values,data,'loading',loading,'error,',error)
                    }, 500);
                }}  

                validationSchema = {Yup.object().shape({
                    email:Yup.string()
                    .email()
                    .required("Required"),

                    name:Yup.string()
                    .required("Required"),

                    address:Yup.string()
                    .required("Required"),

                    zip:Yup.string()
                    .required("Required"),
                    
                    number:Yup.string()
                    .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,'Phone number is not valid')
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    } = props;

                    return(
                        <div className="base">
                            <div className="formBase">
                                <p> RentZend Agent Registration Form</p>
                                <form autoComplete="off" onSubmit={handleSubmit}>
                                    <input type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="name" 
                                        placeholder="Enter Name" 
                                        value={values.name}
                                    />     
                                      {errors.name && touched.name && (
                                        <div className="errorMsg">{errors.name}</div>
                                    )}

                                    <input 
                                        type="email" 
                                        name ="email" 
                                        placeholder="Enter E-mail"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className={errors.email && touched.email && 'error'}
                                    />
                                    {errors.email && touched.email && (
                                        <div className="errorMsg">{errors.email}</div>
                                    )}

                                    <input 
                                        type="text" 
                                        name="number" 
                                        placeholder="Enter Phone number (123) 456-7899" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.number} 
                                    />
                                    {errors.number && touched.number && (
                                        <div className="errorMsg">{errors.number}</div>
                                    )}

                                    <textarea 
                                        type="text" 
                                        name="address"
                                        placeholder="Enter Address" 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        value={values.address} 
                                    />
                                      {errors.address && touched.address && (
                                        <div className="errorMsg">{errors.address}</div>
                                    )}

                                    <input 
                                        type="text" 
                                        name="zip"
                                        placeholder="Enter Zip Code" 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        value={values.zip} 
                                    />
                                      {errors.zip && touched.zip && (
                                        <div className="errorMsg">{errors.zip}</div>
                                    )}
                                    <UploadFile />
                                    <Button type="submit" variant="contained" color="secondary">
                                        Submit
                                    </Button>
                                </form>
                            </div>
                            {/* <Button onClick={this.handleClic}>click me</Button> */}
                        </div>
                    )
                }}
            </Formik>
        )
    }
// }