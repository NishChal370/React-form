import React from 'react'

function ErrorMessage({inputName, formik}) {
      return (formik.touched[inputName] && formik.errors[inputName]) && <div className='error--message'>{formik.errors[inputName]}</div>
}

export default ErrorMessage