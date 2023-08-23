import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import personalInfoSchema from '../schema/personalInfo';
import InputField from './InputField';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function PersonalInfo() {

  const {updateFormData} = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    updateFormData(values);
    navigate('/educationinfo')
  }
 
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: ""
    },
    validationSchema: personalInfoSchema,
    onSubmit: onSubmit
  });



  let fields = [
    {
      label: 'Firstname',
      id: 'first_name',
      type: 'text'
    },
    {
      label: 'Lastname',
      id: 'last_name',
      type: 'text'
    },
    {
      label: 'Email',
      id: 'email',
      type: 'email'
    },
    {
      label: 'Phone',
      id: 'phone',
      type: 'number'
    },
  ]
  // console.log(formik.errors)

  return (
    <div className='nav-vh flex justify-center items-center'>
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col w-full max-w-[400px] justify-center items-center bg-slate-900 p-8 text-lg rounded' >
        <h3 className='font-semibold text-sky-500 text-2xl mb-2' >Personal details</h3>

        {
          fields.map((item, index) => {
            return (
              <InputField key={index} item={item} formik={formik}/>
            )
          })
        }

        <button
          disabled={formik.isSubmitting}
          type='submit'
          // disabled
          className='px-4 py-1 bg-slate-800 mt-3 text-white rounded disabled:bg-slate-400 disabled:cursor-not-allowed' >
          Next
        </button>
      </form>
    </div>
  )
}
