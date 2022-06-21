import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage';


const initialValues = {
      email: '',
      name: '',
      phone: '',
}

const ALPHABET_REGEX  = /^[A-Za-z]+$/i;
const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

function UserForm({submitHandler}) {

      const validationSchema = Yup.object({
            email: Yup.string()
                  .required('Required')
                  .email('Invalid email address'),
            
            name: Yup.string()
                  .required('Required')
                  .matches(ALPHABET_REGEX, 'Invalid name'),

            phone: Yup.string()
                  .required('Required')
                  .matches(PHONE_REGEX, 'Invalid phone'),
      })

      
      
      const resetHandler = ()=>{
            formik.resetForm();

            submitHandler({});
      }

      const formik = useFormik({
            initialValues,
            validationSchema,
            onSubmit: submitHandler,
      });

      return (
            <form onSubmit={formik.handleSubmit} onReset={resetHandler}>
                  
                  <label htmlFor='email'>Email</label>
                  <input id='email' name='email' type="text" 
                        className={(formik.touched.email && formik.errors.email) && 'error--input'}
                        value={formik.values.email}
                        {...formik.getFieldProps('email')}
                  />
                  <ErrorMessage inputName={'email'} formik={formik}/>

                  <label htmlFor="name">Name</label>
                  <input id='name' name='name' type="text" 
                        className={(formik.touched.name && formik.errors.name) && 'error--input'}
                        value={formik.values.name}
                        {...formik.getFieldProps('name')}
                  />
                  <ErrorMessage inputName={'name'} formik={formik}/>


                  <label htmlFor="phone">Phone</label>
                  <input  id='phone' name='phone' type="text"
                        className={(formik.touched.phone && formik.errors.phone) && 'error--input'}  
                        value={formik.values.phone}
                        {...formik.getFieldProps('phone')}
                  />
                  <ErrorMessage inputName={'phone'} formik={formik}/>

                  <button type='submit'>Submit</button>
                  <button type='reset'>Reset</button>
            </form>
      )
}

export default UserForm


/*================= NOTE ============================= */
/*
->  onBlur
      it track the users input touch
            <input  id='phone' name='phone' type="text"
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
            />

->  onChange
      it keep track of input change
            <input  id='phone' name='phone' type="text"
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
            />


-> getFieldProps('')
      it is the replacement of onBlur and onChange  
            <input id='phone' name='phone' type="text" 
                  value={formik.values.phone}
                  {...formik.getFieldProps('phone')}
            />

-> nanoid()
      it is used to get unique id/value
 */
