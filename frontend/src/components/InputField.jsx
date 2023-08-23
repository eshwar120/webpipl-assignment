import React from 'react'

export default function InputField({ item , formik}) {
    return (
        <div className='w-full text-gray-50' >
            <label htmlFor={item.id} className='self-start ml-1'>
                {item.label}
                <span className='text-red-400 '>*</span>
            </label>
            <input
                id={item.id}
                type={item.type}
                {...formik.getFieldProps(item.id)}
                className={`h-[40px] bg-transparent border-slate-500 border-2 rounded focus:border-sky-500 ${formik.errors[item.id] && formik.touched[item.id] ? 'border-red-400' : ''} outline-none w-full text-lg m-1`}
            />
            {formik.errors[item.id] && formik.touched[item.id] ?
                <p className='h-[20px] ml-1 -mt-1 mb-2 text-red-400 text-sm self-start'>{formik.errors[item.id]}</p> :
                <p className='h-[24px]'></p>}
        </div>
    )
}
