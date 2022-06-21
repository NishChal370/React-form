import { useFormik } from 'formik';
import React from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage';


const initialValues = {
      email: '',
      name: '',
      phone: '',
}

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const ALPHABET_REGEX  = /^[A-Za-z]+$/i;
const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

function UserForm({submitHandler}) {

      const validate = ({email, name, phone})=>{
            let errors = {};

            if (!email) errors.email = 'Required';
            else if (!EMAIL_REGEX.test(email)) errors.email = 'Invalid email address';

            if (!name) errors.name = 'Required';
            else if (!ALPHABET_REGEX.test(name)) errors.name = 'Invalid name';

            if (!phone) errors.phone = 'Required';
            else if (!PHONE_REGEX.test(phone)) errors.phone = 'Invalid phone';

            return errors;
      }
      
      const resetHandler = ()=>{
            formik.resetForm();

            submitHandler({});
      }

      const formik = useFormik({
            initialValues,
            validate,
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
