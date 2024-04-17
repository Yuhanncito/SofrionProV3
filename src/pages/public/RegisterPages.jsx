import { useState } from 'react'
import { RegisterForm } from '../../organisms/LoginForms'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function RegisterPages() {
  const { register, handleSubmit: handleValidateSubmit, formState: { errors } } = useForm()
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    question: '',
    answer: ''
  })

  const handleSubmit = (e) => {
    console.log('user')
  }

  return (
    <div className="flex w-full h-screen ">
      <div className="hidden relative lg:flex h-full lg:w-5/12 items-center justify-center bg-blue-200/20">
        <div className="w-60 h-60 bg-gradient-to-tr from-green-900 to-green-600 rounded-full animate-bounce"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/5 backdrop-blur-lg flex justify-center"></div>
      </div>
      <div className="w-full flex items-center justify-center lg:w-7/12 py-4">
        <RegisterForm user={user} validate={register} errors={errors} onSubmit={handleValidateSubmit(handleSubmit)} />
      </div>
      
    </div>
  )
}

export default RegisterPages