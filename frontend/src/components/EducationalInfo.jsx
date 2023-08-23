import { useFormik } from 'formik';
import React from 'react'
import InputField from './InputField';

export default function EducationalInfo() {

  const formik = useFormik({
    initialValues: {
      college_name: "",
      university_name: "",
      start_date: "",
      end_date: "",
      certificate: ""
    },
    // validationSchema: personalInfoSchema,
    // onSubmit: onSubmit
  });

  const fields = [
    {
      label: 'College Name',
      id: 'college_name',
      type: 'text'
    },
    {
      label: 'University Name',
      id: 'university_name',
      type: 'text'
    },
    {
      label: 'Start Date',
      id: 'start_date',
      type: 'date'
    },
    {
      label: 'End Date',
      id: 'end_date',
      type: 'date'
    },
    {
      label: 'Certificate',
      id: 'certificate',
      type: 'file'
    }
  ]

  return (
    <div>
      <div className='nav-vh flex justify-center items-center'>
        <form
          onSubmit={formik.handleSubmit}
          className='flex flex-col w-full max-w-[400px] justify-center items-center bg-slate-900 p-8 text-lg rounded' >
          <h3 className='font-semibold text-sky-500 text-2xl mb-2' >Personal details</h3>

          {
            fields.map((item, index) => {
              return (
                <InputField key={index} item={item} formik={formik} />
              )
            })
          }

          <button
          onClick={() => {
            
          }}
          >
            Add an Education
          </button>

          <button
            disabled={formik.isSubmitting}
            type='submit'
            // disabled
            className='px-4 py-1 bg-slate-800 mt-3 text-white rounded disabled:bg-slate-400 disabled:cursor-not-allowed' >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}
